import { CharacterNotationImage, NotationImage } from "../__types/PathTypes";

// ARROWS
import db from "../assets/images/upscaled/arrows/db.png";
import d from "../assets/images/upscaled/arrows/d.png";
import df from "../assets/images/upscaled/arrows/df.png";
import b from "../assets/images/upscaled/arrows/b.png";
import n from "../assets/images/upscaled/arrows/n.png";
import f from "../assets/images/upscaled/arrows/f.png";
import ub from "../assets/images/upscaled/arrows/ub.png";
import u from "../assets/images/upscaled/arrows/u.png";
import uf from "../assets/images/upscaled/arrows/uf.png";

import db_h from "../assets/images/upscaled/arrows/db_h.png";
import d_h from "../assets/images/upscaled/arrows/d_h.png";
import df_h from "../assets/images/upscaled/arrows/df_h.png";
import b_h from "../assets/images/upscaled/arrows/b_h.png";
import f_h from "../assets/images/upscaled/arrows/f_h.png";
import ub_h from "../assets/images/upscaled/arrows/ub_h.png";
import u_h from "../assets/images/upscaled/arrows/u_h.png";
import uf_h from "../assets/images/upscaled/arrows/uf_h.png";
import bracket_l from "../assets/images/upscaled/arrows/bracket_left.png";
import bracket_r from "../assets/images/upscaled/arrows/bracket_right.png";
import next from "../assets/images/upscaled/arrows/next.png";

// BUTTONS
import one from "../assets/images/upscaled/buttons/1.png";
import two from "../assets/images/upscaled/buttons/2.png";
import three from "../assets/images/upscaled/buttons/3.png";
import four from "../assets/images/upscaled/buttons/4.png";
import onetwo from "../assets/images/upscaled/buttons/12.png";
import onethree from "../assets/images/upscaled/buttons/13.png";
import onefour from "../assets/images/upscaled/buttons/14.png";
import twothree from "../assets/images/upscaled/buttons/23.png";
import twofour from "../assets/images/upscaled/buttons/24.png";
import threefour from "../assets/images/upscaled/buttons/34.png";
import onetwothree from "../assets/images/upscaled/buttons/123.png";
import onetwofour from "../assets/images/upscaled/buttons/124.png";
import onethreefour from "../assets/images/upscaled/buttons/134.png";
import twothreefour from "../assets/images/upscaled/buttons/234.png";
import onetwothreefour from "../assets/images/upscaled/buttons/1234.png";

// STAGE GIMMICKS
import balcony from "../assets/images/upscaled/stage/balconybreak.png";
import floorblast from "../assets/images/upscaled/stage/floorblast.png";
import floorbreak from "../assets/images/upscaled/stage/floorbreak.png";
import wallblast from "../assets/images/upscaled/stage/wallblast.png";
import wallbound from "../assets/images/upscaled/stage/wallbound.png";
import wallbreak from "../assets/images/upscaled/stage/wallbreak.png";

// MISC
import heatdash from "../assets/images/upscaled/misc/heatdash.png";
import tornado from "../assets/images/upscaled/misc/tornado.png";
import heatburst from "../assets/images/upscaled/misc/hb!.png";
import jf from "../assets/images/upscaled/misc/jf.png";
import cc from "../assets/images/upscaled/misc/cc.png";
import ch from "../assets/images/upscaled/misc/ch.png";
import dash from "../assets/images/upscaled/misc/dash.png";
import fc from "../assets/images/upscaled/misc/fc.png";
import ssl from "../assets/images/upscaled/misc/ssl.png";
import ssr from "../assets/images/upscaled/misc/ssr.png";
import swl from "../assets/images/upscaled/misc/swl.png";
import swr from "../assets/images/upscaled/misc/swr.png";
import w from "../assets/images/upscaled/misc/w!.png";
import wr from "../assets/images/upscaled/misc/wr.png";
import ws from "../assets/images/upscaled/misc/ws.png";
import heat from "../assets/images/upscaled/misc/heat.png";
import ssc from "../assets/images/upscaled/misc/ssc.png";

// STANCES
import hms from "../assets/images/upscaled/stances/hms.png";

export const ImagePaths: { [key: string]: NotationImage } = {
  // ARROWS
  n: {
    text: "n",
    src: n,
  },
  f: {
    text: "f",
    src: f,
  },
  df: {
    text: "d/f",
    src: df,
  },
  d: {
    text: "d",
    src: d,
  },
  db: {
    text: "d/b",
    src: db,
  },
  b: {
    text: "b",
    src: b,
  },
  ub: {
    text: "u/b",
    src: ub,
  },
  u: {
    text: "u",
    src: u,
  },
  uf: {
    text: "u/f",
    src: uf,
  },
  f_h: {
    text: "F",
    src: f_h,
  },
  df_h: {
    text: "D/F",
    src: df_h,
  },
  d_h: {
    text: "D",
    src: d_h,
  },
  db_h: {
    text: "D/B",
    src: db_h,
  },
  b_h: {
    text: "B",
    src: b_h,
  },
  ub_h: {
    text: "U/B",
    src: ub_h,
  },
  u_h: {
    text: "U",
    src: u_h,
  },
  uf_h: {
    text: "U/F",
    src: uf_h,
  },
  bracket_l: {
    text: "[",
    src: bracket_l,
  },
  bracket_r: {
    text: "]",
    src: bracket_r,
  },
  next: {
    text: "->",
    src: next,
  },

  // BUTTONS
  one: {
    text: "1",
    src: one,
  },
  two: {
    text: "2",
    src: two,
  },
  three: {
    text: "3",
    src: three,
  },
  four: {
    text: "4",
    src: four,
  },
  onetwo: {
    text: "1+2",
    src: onetwo,
  },
  threefour: {
    text: "3+4",
    src: threefour,
  },
  onethree: {
    text: "1+3",
    src: onethree,
  },
  twofour: {
    text: "2+4",
    src: twofour,
  },
  onefour: {
    text: "1+4",
    src: onefour,
  },
  twothree: {
    text: "2+3",
    src: twothree,
  },
  onetwothree: {
    text: "1+2+3",
    src: onetwothree,
  },
  onetwofour: {
    text: "1+2+4",
    src: onetwofour,
  },
  onethreefour: {
    text: "1+3+4",
    src: onethreefour,
  },
  twothreefour: {
    text: "2+3+4",
    src: twothreefour,
  },
  onetwothreefour: {
    text: "1+2+3+4",
    src: onetwothreefour,
  },

  // STAGE
  balcony: {
    text: "BB!",
    src: balcony,
  },
  floorblast: {
    text: "Floorblast?",
    src: floorblast,
  },
  floorbreak: {
    text: "FB!",
    src: floorbreak,
  },
  wallblast: {
    text: "Wallblast?",
    src: wallbound,
  },
  wallbound: {
    text: "Wallbound?",
    src: wallblast,
  },
  wallbreak: {
    text: "WB!",
    src: wallbreak,
  },

  // MISC
  jf: {
    text: ":",
    src: jf,
  },
  heatdash: {
    text: "HD!",
    src: heatdash,
  },
  tornado: {
    text: "T!",
    src: tornado,
  },
  heatburst: {
    text: "HB!",
    src: heatburst,
  },
  cc: {
    text: "cc",
    src: cc,
  },
  ch: {
    text: "ch",
    src: ch,
  },
  dash: {
    text: "dash",
    src: dash,
  },
  fc: {
    text: "fc",
    src: fc,
  },
  ssl: {
    text: "ssl",
    src: ssl,
  },
  ssr: {
    text: "ssr",
    src: ssr,
  },
  swl: {
    text: "swl",
    src: swl,
  },
  swr: {
    text: "swr",
    src: swr,
  },
  ssc: {
    text: "ssc",
    src: ssc,
  },
  w: {
    text: "W!",
    src: w,
  },
  wr: {
    text: "wr",
    src: wr,
  },
  ws: {
    text: "ws",
    src: ws,
  },
  heat: {
    text: "in heat",
    src: heat,
  },
};

export const CharacterSpecificImagePaths: CharacterNotationImage = {
  alisa: {
    DES: {
      text: "DES",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  asuka: {
    install: {
      text: "IDK",
      src: "",
    },
  },
  azucena: {
    LIB: {
      text: "LIB",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  bryan: {
    SNE: {
      text: "SNE",
      src: "",
    },
  },
  claudio: {
    STB: {
      text: "STB",
      src: "",
    },
  },
  devil_jin: {
    MCR: {
      text: "MCR",
      src: "",
    },
  },
  dragunov: {
    SNK: {
      text: "SNK",
      src: "",
    },
  },
  feng: {
    STC: {
      text: "STC",
      src: "",
    },
    KNP: {
      text: "KNP",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  hwoarang: {
    LFS: {
      text: "LFS",
      src: "",
    },
    RFS: {
      text: "RFS",
      src: "",
    },
    RFF: {
      text: "RFF",
      src: "",
    },
  },
  jack_8: {
    GMH: {
      text: "GMH",
      src: "",
    },
  },
  jin: {
    ZEN: {
      text: "ZEN",
      src: "",
    },
    CDS: {
      text: "CDS",
      src: "",
    },
  },
  jun: {
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  kazuya: {
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  king: {
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  kuma: {
    HBS: {
      text: "HBS",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  lars: {
    DEN: {
      text: "DEN",
      src: "",
    },
    SEN: {
      text: "SEN",
      src: "",
    },
    LEN: {
      text: "LEN",
      src: "",
    },
  },
  law: {
    DSS: {
      text: "DSS",
      src: "",
    },
  },
  lee: {
    HMS: {
      text: "HMS",
      src: hms,
    },
  },
  leo: {
    BOK: {
      text: "BOK",
      src: "",
    },
    KNK: {
      text: "KNK",
      src: "",
    },
  },
  leroy: {
    HRM: {
      text: "HRM",
      src: "",
    },
  },
  lili: {
    DEW: {
      text: "DEW",
      src: "",
    },
    RAB: {
      text: "RAB",
      src: "",
    },
  },
  nina: {
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  panda: {
    HBS: {
      text: "HBS",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  paul: {
    SWA: {
      text: "SWA",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  raven: {
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  reina: {
    HWR: {
      text: "HWR",
      src: "",
    },
    SEN: {
      text: "SEN",
      src: "",
    },
  },
  shaheen: {
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  steve: {
    PAB: {
      text: "PAB",
      src: "",
    },
    FLK: {
      text: "FLK",
      src: "",
    },
    DCK: {
      text: "DCK",
      src: "",
    },
    EXT_DCK: {
      text: "EXT DCK",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  victor: {
    PRF: {
      text: "PRF",
      src: "",
    },
    IAI: {
      text: "IAI",
      src: "",
    },
  },
  xiaoyu: {
    AOP: {
      text: "AOP",
      src: "",
    },
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  yoshimitsu: {
    IDK: {
      text: "IDK",
      src: "",
    },
  },
  zafina: {
    SCR: {
      text: "SCR",
      src: "",
    },
    MNT: {
      text: "MNT",
      src: "",
    },
    TRT: {
      text: "TRT",
      src: "",
    },
  },
};
