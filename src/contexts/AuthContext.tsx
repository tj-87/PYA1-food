import { createContext, useEffect, useState } from "react";
import { AuthContextDataProps, AuthContextProviderProps } from "./contexts.types";
import { getUserName, saveUserName } from "../services/userService/userService";

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser ] = useState({
       name: "",
  })

  const [ isLoadingUser, setIsLoadingUser ] = useState(true)

  function signUp(name: string){
    try {
    const newUser = { name }
    setUser(newUser)
    saveUserName({ name })
    } catch (error) {
      throw error
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await getUserName()
      if (userLogged) {
      setUser(userLogged)
    }
    } catch (error) {
      throw error
    } finally{
      setIsLoadingUser(false)
    }
 
   
  }

  useEffect(() => {
    loadUserData()
  }, [])


  return (
    <AuthContext.Provider
      value={{ user, signUp, isLoadingUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
