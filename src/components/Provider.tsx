'use client'

import { ContextProvider } from "@/contexts/ContextProvider"
import { SessionProvider } from "next-auth/react"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { classNames } from "primereact/utils";

import { FC } from "react"
interface ProviderProps {
    children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {

    return (
        <SessionProvider>
            <PrimeReactProvider>
                <ContextProvider>
                    {children}
                </ContextProvider>
            </PrimeReactProvider>
        </SessionProvider>
    )
}

export default Provider
