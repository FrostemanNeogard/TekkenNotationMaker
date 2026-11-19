import { CSSProperties } from "react";
import { NotationStyle, SavedNotationStyle } from "../__types/commonTypes";

export const fontOptions = ["Roboto", "Roboto Condensed", "Montserrat"];

export const defaultStyleId = "default";

export const defaultNotationStyle: SavedNotationStyle = {
  id: defaultStyleId,
  name: "Default",
  stanceFill: "#ffffff",
  stanceOutline: "#000000",
  stanceOutlineWidth: 0.06,
  stanceFont: "Roboto",
  labelBackground: "#fa8072",
  labelText: "#ffffff",
  labelRadius: 0.09,
  labelFont: "Roboto Condensed",
  labelOpacity: 1,
};

const styleFields = [
  "name",
  "stanceFill",
  "stanceOutline",
  "stanceOutlineWidth",
  "stanceFont",
  "labelBackground",
  "labelText",
  "labelRadius",
  "labelFont",
  "labelOpacity",
] as const;

const shareVersion = 1;
const stylesKey = "notation-styles";
const selectedKey = "notation-style-selected";

const readColor = (value: unknown, fallback: string) =>
  typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value)
    ? value.toLowerCase()
    : fallback;

const readNumber = (
  value: unknown,
  fallback: number,
  min: number,
  max: number,
) =>
  typeof value === "number" && Number.isFinite(value)
    ? Math.min(max, Math.max(min, value))
    : fallback;

const readFont = (value: unknown, fallback: string) =>
  typeof value === "string" && fontOptions.includes(value) ? value : fallback;

export const sanitizeNotationStyle = (raw: unknown): NotationStyle | null => {
  if (typeof raw !== "object" || raw === null) {
    return null;
  }
  const data = raw as Record<string, unknown>;
  const base = defaultNotationStyle;
  const name =
    typeof data.name === "string" ? data.name.trim().slice(0, 40) : "";

  return {
    name: name || "Custom style",
    stanceFill: readColor(data.stanceFill, base.stanceFill),
    stanceOutline: readColor(data.stanceOutline, base.stanceOutline),
    stanceOutlineWidth: readNumber(
      data.stanceOutlineWidth,
      base.stanceOutlineWidth,
      0,
      0.2,
    ),
    stanceFont: readFont(data.stanceFont, base.stanceFont),
    labelBackground: readColor(data.labelBackground, base.labelBackground),
    labelText: readColor(data.labelText, base.labelText),
    labelRadius: readNumber(data.labelRadius, base.labelRadius, 0, 0.5),
    labelFont: readFont(data.labelFont, base.labelFont),
    labelOpacity: readNumber(data.labelOpacity, base.labelOpacity, 0, 1),
  };
};

export const isSameStyle = (a: NotationStyle, b: NotationStyle) =>
  styleFields.every((field) => a[field] === b[field]);

const toBase64Url = (text: string) => {
  let binary = "";
  new TextEncoder().encode(text).forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const fromBase64Url = (code: string) => {
  const binary = atob(code.replace(/-/g, "+").replace(/_/g, "/"));
  return new TextDecoder().decode(
    Uint8Array.from(binary, (char) => char.charCodeAt(0)),
  );
};

export const encodeNotationStyle = (style: NotationStyle) =>
  toBase64Url(
    JSON.stringify([shareVersion, ...styleFields.map((field) => style[field])]),
  );

export const decodeNotationStyle = (code: string): NotationStyle | null => {
  try {
    const data = JSON.parse(fromBase64Url(code));
    if (!Array.isArray(data) || data[0] !== shareVersion) {
      return null;
    }
    return sanitizeNotationStyle(
      Object.fromEntries(styleFields.map((field, i) => [field, data[i + 1]])),
    );
  } catch {
    return null;
  }
};

export const shareUrl = (style: NotationStyle) =>
  `${window.location.origin}${window.location.pathname}#style=${encodeNotationStyle(style)}`;

export const styleCodeFromHash = (hash: string) =>
  hash.match(/^#style=([\w-]+)$/)?.[1] ?? null;

export const createStyleId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

export const loadSavedStyles = (): SavedNotationStyle[] => {
  try {
    const raw = JSON.parse(localStorage.getItem(stylesKey) ?? "[]");
    if (!Array.isArray(raw)) {
      return [];
    }
    return raw.flatMap((item) => {
      const style = sanitizeNotationStyle(item);
      return style && typeof item.id === "string"
        ? [{ ...style, id: item.id }]
        : [];
    });
  } catch {
    return [];
  }
};

export const loadSelectedStyleId = () => {
  try {
    return localStorage.getItem(selectedKey) ?? defaultStyleId;
  } catch {
    return defaultStyleId;
  }
};

export const persistStyles = (
  styles: SavedNotationStyle[],
  selectedId: string,
) => {
  try {
    localStorage.setItem(stylesKey, JSON.stringify(styles));
    localStorage.setItem(selectedKey, selectedId);
  } catch {
    return;
  }
};

const hexToRgba = (hex: string, alpha: number) => {
  const value = parseInt(hex.slice(1), 16);
  return `rgba(${value >> 16}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
};

export const notationStyleVars = (style: NotationStyle) =>
  ({
    "--stance-fill": style.stanceFill,
    "--stance-outline": style.stanceOutline,
    "--stance-outline-width": String(style.stanceOutlineWidth),
    "--stance-font": `"${style.stanceFont}", sans-serif`,
    "--label-background": hexToRgba(style.labelBackground, style.labelOpacity),
    "--label-text": style.labelText,
    "--label-radius": String(style.labelRadius),
    "--label-font": `"${style.labelFont}", sans-serif`,
  }) as CSSProperties;
