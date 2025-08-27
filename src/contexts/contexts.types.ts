import { ReactNode } from "react"


export type contextsProps = {
    name: string
}

export type AuthContextDataProps ={
    user: contextsProps
    signUp: (name: string) => void
}

export type AuthContextProviderProps ={
    children: ReactNode
}