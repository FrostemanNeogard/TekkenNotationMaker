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
