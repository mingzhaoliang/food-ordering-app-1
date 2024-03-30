"use client";

import store from "@/store/index";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider store={store}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ReduxProvider>
    )
}