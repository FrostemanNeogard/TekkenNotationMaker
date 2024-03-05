export type NotationImage = {
  text: string;
  src: string;
};

export type CharacterNotationImage = {
  [key: string]: {
    [key: string]: NotationImage;
  };
};
