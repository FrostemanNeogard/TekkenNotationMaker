export type NotationImage = {
  text: string;
  src: string;
};

export type ComboItem =
  | { type: "image"; src: string }
  | { type: "stance"; text: string }
  | { type: "label"; text: string };

export type Character = { displayName: string; pathName: string };

export type Theme =
  | "arcade"
  | "tekken8"
  | "tekken7"
  | "tekken8xbox"
  | "tekken8playstation"
  | "numpad";

export type NotationStyle = {
  name: string;
  stanceFill: string;
  stanceOutline: string;
  stanceOutlineWidth: number;
  stanceFont: string;
  labelBackground: string;
  labelText: string;
  labelRadius: number;
  labelFont: string;
  labelOpacity: number;
  stanceSize: number;
  stanceMargin: number;
  labelSize: number;
  labelMargin: number;
  labelPadding: number;
  labelBackdrop: boolean;
};

export type SavedNotationStyle = NotationStyle & { id: string };

export type CustomNotation = {
  id: string;
  text: string;
  kind: "stance" | "label";
};
