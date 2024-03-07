import "../assets/style.scss";

import React from "react";
import ClientProvider from "../components/ClientProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { WARNING } from "@assets/constants";
export const metadata: Metadata = {
    title: "Shadow test",
    description: "Shadow description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ClientProvider>{children}</ClientProvider>
                <Toaster
                    toastOptions={{
                        style: {
                            background: WARNING,
                        },
                    }}
                />
            </body>
        </html>
    );
}
