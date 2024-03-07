import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
    mobile: "576px",
    tablet: "760px",
    desktop: "1200px",
};

const theme = extendTheme({
    breakpoints,
    sizes: {
        1: "100%",
        2: "50%",
        3: "33.333333%",
        4: "25%",
    },
    space: {
        px: "1px",
        rem: "1rem",
        0: "0rem",
        1: "0.5rem",
        2: "1rem",
        3: "2rem",
        4: "4rem",
    },
    fontSize: {
        text: "1.06rem",
        medium: "1.2rem",
        subtitle: "1.4rem",
        title: "2.2rem",
    },
    fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    Flex: {
        width: "100%",
    },
    Box: {
        width: "100%",
    },
    Link: {
        width: "100%",
    },
});

export default theme;
