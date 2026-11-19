import { ElementType, ImgHTMLAttributes, useEffect, useState } from "react";
import {
  ImageBorder,
  borderKey,
  borderPadding,
  borderedImage,
  cachedBorderedImage,
} from "../../__util/borderedImage";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "height"> & {
  src: string;
  border: ImageBorder | null;
  renderHeight: number;
  component?: ElementType;
};

export const BorderedImage = (props: Props) => {
  const { src, border, renderHeight, component, style, ...rest } = props;
  const Component = component ?? "img";
  const key = border ? borderKey(src, border, renderHeight) : "";
  const [result, setResult] = useState(() => ({
    key,
    url: key ? cachedBorderedImage(key) : undefined,
  }));

  useEffect(() => {
    if (!border || cachedBorderedImage(key)) {
      return;
    }
    let cancelled = false;
    borderedImage(src, border, renderHeight).then((url) => {
      if (!cancelled) {
        setResult({ key, url });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [key, src, border, renderHeight]);

  const url = border
    ? (cachedBorderedImage(key) ??
      (result.key === key ? result.url : undefined))
    : undefined;

  if (!border || !url) {
    return <Component src={src} style={style} {...rest} />;
  }

  const ratio = borderPadding(border, renderHeight) / renderHeight;
  return (
    <Component
      src={url}
      style={{
        ...style,
        height: `calc(var(--notation-height) * ${1 + 2 * ratio})`,
        margin: `calc(var(--notation-height) * ${-ratio}) 0`,
      }}
      {...rest}
    />
  );
};
