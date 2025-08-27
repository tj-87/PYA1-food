import { createContext, useEffect, useState } from "react";
import { AuthContextDataProps, AuthContextProviderProps } from "./contexts.types";
import { getUserName, saveUserName } from "../services/userService/userService";

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser ] = useState({
       name: "",
  })

  function signUp(name: string){
    saveUserName({ name })
  }

  async function loadUserData() {
    const userLogged = await getUserName()

    if (userLogged) {
      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])


  return (
    <AuthContext.Provider
      value={{ user, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
