import { ReactNode } from "react"


export type contextsProps = {
    name: string
}

export type AuthContextDataProps ={
    user: contextsProps | null
    signUp: (name: string) => void
    isLoadingUser: boolean
    logout:() => void
}

export type AuthContextProviderProps ={
    children: ReactNode
}