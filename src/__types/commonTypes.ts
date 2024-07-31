export type NotationImage = {
  text: string;
  src: string;
};

export type CharacterNotationImage = {
  [key: string]: {
    [key: string]: NotationImage;
  };
};

export type Character = { displayName: string; pathName: string };

export type Theme =
  | "arcade"
  | "tekken8"
  | "tekken7"
  | "tekken8xbox"
  | "tekken8playstation"
  | "sf"
  | "numpad";
