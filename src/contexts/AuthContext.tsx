import { createContext, useEffect, useState } from "react";
import { AuthContextDataProps, AuthContextProviderProps, contextsProps } from "./contexts.types";
import { getUserName, logoutUser, saveUserName } from "../services/userService/userService";


export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser ] = useState<null|contextsProps>({
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

  async function logout() {
    setUser(null)
    logoutUser()
  }



  useEffect(() => {
    loadUserData()
  }, [])


  return (
    <AuthContext.Provider
      value={{ user, signUp, logout, isLoadingUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
