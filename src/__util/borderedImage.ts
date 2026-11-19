export type ImageBorder = {
  color: string;
  width: number;
  glow: number;
};

const infinity = 1e20;
const maxCacheSize = 600;
const imageCache = new Map<string, Promise<HTMLImageElement>>();
const resultCache = new Map<string, string>();
const inflight = new Map<string, Promise<string>>();
let pending = 0;

export const borderPadding = (border: ImageBorder, height: number) =>
  Math.ceil((border.width + border.glow) * height) + 2;

export const borderKey = (src: string, border: ImageBorder, height: number) =>
  `${src}|${border.color}|${border.width}|${border.glow}|${height}`;

export const cachedBorderedImage = (key: string) => resultCache.get(key);

export const bordersSettled = async () => {
  for (let i = 0; i < 300 && pending > 0; i++) {
    await new Promise((resolve) => setTimeout(resolve, 16));
  }
};

const loadImage = (src: string) => {
  let image = imageCache.get(src);
  if (!image) {
    image = new Promise<HTMLImageElement>((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = reject;
      element.src = src;
    });
    imageCache.set(src, image);
  }
  return image;
};

const distanceLine = (
  f: Float64Array,
  n: number,
  v: Int32Array,
  z: Float64Array,
  out: Float64Array,
) => {
  let k = 0;
  v[0] = 0;
  z[0] = -infinity;
  z[1] = infinity;
  for (let q = 1; q < n; q++) {
    let s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    while (s <= z[k]) {
      k--;
      s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    }
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = infinity;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1] < q) {
      k++;
    }
    out[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
  }
};

const distanceToShape = (shape: Uint8Array, width: number, height: number) => {
  const size = Math.max(width, height);
  const grid = new Float64Array(width * height);
  const column = new Float64Array(size);
  const result = new Float64Array(size);
  const v = new Int32Array(size);
  const z = new Float64Array(size + 1);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = shape[i] ? 0 : infinity;
  }

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      column[y] = grid[y * width + x];
    }
    distanceLine(column, height, v, z, result);
    for (let y = 0; y < height; y++) {
      grid[y * width + x] = result[y];
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      column[x] = grid[y * width + x];
    }
    distanceLine(column, width, v, z, result);
    for (let x = 0; x < width; x++) {
      grid[y * width + x] = Math.sqrt(result[x]);
    }
  }

  return grid;
};

const render = async (
  src: string,
  border: ImageBorder,
  height: number,
): Promise<string> => {
  const image = await loadImage(src);
  const innerHeight = Math.round(height);
  const innerWidth = Math.max(
    1,
    Math.round((image.naturalWidth * innerHeight) / image.naturalHeight),
  );
  const padding = borderPadding(border, innerHeight);
  const width = innerWidth + padding * 2;
  const fullHeight = innerHeight + padding * 2;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = fullHeight;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return src;
  }

  context.drawImage(image, padding, padding, innerWidth, innerHeight);
  const source = context.getImageData(0, 0, width, fullHeight);
  const shape = new Uint8Array(width * fullHeight);
  for (let i = 0; i < shape.length; i++) {
    shape[i] = source.data[i * 4 + 3] >= 128 ? 1 : 0;
  }

  const distance = distanceToShape(shape, width, fullHeight);
  const radius = border.width * innerHeight;
  const glow = border.glow * innerHeight;
  const value = parseInt(border.color.slice(1), 16);
  const output = context.createImageData(width, fullHeight);

  for (let i = 0; i < distance.length; i++) {
    const d = distance[i];
    const ring = Math.min(1, Math.max(0, radius + 0.5 - d));
    const falloff = glow > 0 ? Math.max(0, 1 - (d - radius) / glow) : 0;
    const alpha = Math.max(ring, d > radius ? falloff * falloff : 0);
    if (alpha > 0) {
      output.data[i * 4] = value >> 16;
      output.data[i * 4 + 1] = (value >> 8) & 255;
      output.data[i * 4 + 2] = value & 255;
      output.data[i * 4 + 3] = Math.round(alpha * 255);
    }
  }

  context.clearRect(0, 0, width, fullHeight);
  context.putImageData(output, 0, 0);
  context.drawImage(image, padding, padding, innerWidth, innerHeight);
  return canvas.toDataURL("image/png");
};

export const borderedImage = (
  src: string,
  border: ImageBorder,
  height: number,
): Promise<string> => {
  const key = borderKey(src, border, height);
  const cached = resultCache.get(key);
  if (cached) {
    return Promise.resolve(cached);
  }

  let request = inflight.get(key);
  if (!request) {
    pending++;
    request = render(src, border, height)
      .then((url) => {
        if (resultCache.size >= maxCacheSize) {
          resultCache.clear();
        }
        resultCache.set(key, url);
        return url;
      })
      .catch(() => src)
      .finally(() => {
        pending--;
        inflight.delete(key);
      });
    inflight.set(key, request);
  }
  return request;
};
