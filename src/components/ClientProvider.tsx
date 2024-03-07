"use client";

import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../assets/theme";

interface ClientProviderProps {
    children: React.ReactNode;
}
export default function ClientProvider({ children }: ClientProviderProps) {
    return (
        <ChakraProvider theme={theme} disableGlobalStyle>
            {children}
        </ChakraProvider>
    );
}
