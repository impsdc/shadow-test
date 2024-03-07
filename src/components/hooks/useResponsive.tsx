import { useState, useLayoutEffect } from "react";
import { useMediaQuery, type MediaQueryAllQueryable } from "react-responsive";

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

function useResponsive() {
    const [isClient, setIsClient] = useState(false);

    const isMobile = useMediaQuery(sm);

    const isTablet = useMediaQuery(md);

    const isDesktop = useMediaQuery(lg);

    useLayoutEffect(() => {
        if (typeof window !== "undefined") setIsClient(true);
    }, []);

    return {
        isDesktop: isClient ? isDesktop : true,
        isTablet: isClient ? isTablet : false,
        isMobile: isClient ? isMobile : false,
    };
}

export default useResponsive;
