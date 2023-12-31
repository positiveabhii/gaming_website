export type PopupContent = {
  [key: string]: {
    speed: number;
    noOfGhost: number;
    noOfPopup: number;
    levelTitle: string;
    popup1: string;
    popup3?: string;
    popup2: string;
    actions: Action[];
  }[];
};

export type GameBelowContent = {
  [key: string]: {
    h1: string;
    header: string;
    bulletins: { title: string; img: string }[];
  };
};

export type Action = {
  title: string;
  ghostMsg: string;
  subTitle: string;
  icon: string;
  msgOnPopup: string;
};

export type TopContent = {
  [key: string]: {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
};

export type LastCongratsMsg = {
  [key: string]: string[];
};
