const arrowDirectoryPath = "../assets/images/upscaled/arrows/";
const buttonDirectoryPath = "../assets/images/upscaled/buttons/";
const miscDirectoryPath = "../assets/images/upscaled/misc/";
const stageDirectoryPath = "../assets/images/upscaled/stage/";

export enum ImagePaths {
  // ARROWS
  DF = `${arrowDirectoryPath}df`,
  DF_HOLD = `${arrowDirectoryPath}df_hold`,
  D = `${arrowDirectoryPath}d`,
  D_HOLD = `${arrowDirectoryPath}d_hold`,
  DB = `${arrowDirectoryPath}db`,
  DB_HOLD = `${arrowDirectoryPath}db_hold`,
  F = `${arrowDirectoryPath}f_hold`,
  F_HOLD = `${arrowDirectoryPath}f_hold`,
  B = `${arrowDirectoryPath}b_hold`,
  B_HOLD = `${arrowDirectoryPath}b_hold`,
  N = `${arrowDirectoryPath}n`,
  UF = `${arrowDirectoryPath}uf`,
  UF_HOLD = `${arrowDirectoryPath}uf_hold`,
  U = `${arrowDirectoryPath}u`,
  U_HOLD = `${arrowDirectoryPath}u_hold`,
  UB = `${arrowDirectoryPath}ub`,
  UB_HOLD = `${arrowDirectoryPath}ub_hold`,
  NEXT = `${arrowDirectoryPath}next`,
  PREV = `${arrowDirectoryPath}prev`,
  BRACKET_L = `${arrowDirectoryPath}bracket_l`,
  BRACKET_R = `${arrowDirectoryPath}bracket_r`,

  // BUTTONS
  ONE = `${buttonDirectoryPath}1`,
  TWO = `${buttonDirectoryPath}2`,
  THREE = `${buttonDirectoryPath}3`,
  FOUR = `${buttonDirectoryPath}4`,

  ONETWO = `${buttonDirectoryPath}12`,
  ONETHREE = `${buttonDirectoryPath}13`,
  ONEFOUR = `${buttonDirectoryPath}14`,
  TWOTHREE = `${buttonDirectoryPath}23`,
  TWOFOUR = `${buttonDirectoryPath}24`,
  THREEFOUR = `${buttonDirectoryPath}34`,

  ONETWOTHREE = `${buttonDirectoryPath}123`,
  ONETWOFOUR = `${buttonDirectoryPath}124`,
  ONETHREEFOUR = `${buttonDirectoryPath}134`,
  TWOTHREEFOUR = `${buttonDirectoryPath}234`,

  // STAGE
  BALCONY = `${stageDirectoryPath}balconybreak`,

  FLOORBLAST_HARD = `${stageDirectoryPath}floorblast_hard`,
  FLOORBLAST = `${stageDirectoryPath}floorblast`,

  WALLBLAST = `${stageDirectoryPath}wallblast`,
  WALLBOUND = `${stageDirectoryPath}wallbound`,

  FLOORBREAK_HARD = `${stageDirectoryPath}floorbreak_hard`,
  FLOORBREAK = `${stageDirectoryPath}floorbreak`,

  WALLBREAK_HARD = `${stageDirectoryPath}wallbreak_hard`,
  WALLBREAK = `${stageDirectoryPath}wallbreak`,

  // MISC
  HEATDASH = `${miscDirectoryPath}heatdash`,
  HEATUSE = `${miscDirectoryPath}heatuse`,
  TORNADO = `${miscDirectoryPath}tornado`,
}
