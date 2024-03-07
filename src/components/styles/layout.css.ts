import { style } from "@vanilla-extract/css";

export const nav = style({
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    fontSize: "1.2rem",
});

export const StyledLink = style({
    cursor: "pointer",
    alignItems: "center",
    width: "auto",
    fontSize: "1.2rem",
    borderRadius: "9px",
    transition: "all 0.2s",
    userSelect: "none",

    selectors: {
        "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
            transform: "scale(1.05)",
        },
        "&:active": {
            transform: "scale(0.99)",
        },
        "&.active": {
            background: "rgba(255, 255, 255, 0.1)",
        },
    },
});
