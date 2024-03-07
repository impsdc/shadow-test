import { MediaQueryAllQueryable } from "react-responsive";

export const PRIMARY_1 = "#2fc967";
export const PRIMARY_2 = "#23d76b";
export const DANGER = "rgb(231,15,80)";
export const WARNING = "#dfad07";
export const BACKGROUND = "#1B1C21";
export const TRANSPARENT = "rgba(255, 255, 255, 0.1);";
export const GRAY = "rgba(49, 50, 56, 0.9)";
export const SHADOW = "0 2px 20px 0 rgb(37, 38, 44, 80%)";
export const SMALLBORDER = "12px";
export const BIGBORDER = "12px";

// membres
export const COLORISTE = "#fcd278";
export const DEVELOPPEUR = "#6ee89a";
export const TRADUCTEUR = "#85d2f7";
export const CORRECTEUR = "#f976a3";
export const RETOUCHEUR = "#c5b1ff";

export type Query = Partial<
    MediaQueryAllQueryable & {
        query?: string | undefined;
    }
>;

// Small devices (landscape phones, 576px and up)
export const sm: Query = {
    query: "(min-width: 576px)",
};

// Medium devices (tablets, 768px and up)
export const md: Query = {
    query: "(min-width: 768px)",
};

// Large devices (desktops, 992px and up)
export const lg: Query = {
    query: "(min-width: 992px)",
};

// Extra large devices (large desktops, 1200px and up)
export const xl: Query = {
    query: "(min-width: 1200px)",
};
