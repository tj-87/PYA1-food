import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER } from "./userServiceConfig";
import { User, userServiceProps } from "./userService.types";
import { api } from "../api/api";

export async function saveUserName( { name }: userServiceProps  ){
    try {
    await api.post<User>("/users", { name })
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    throw error; 
  }
}


export async function getUserName() {
    try {

      const response = await api.get<User>('/users')

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
}

export async function logoutUser() {
  try {
   await AsyncStorage.removeItem(USER)
  } catch (error) {
    console.log('Erro ao fazer logout', error)
  }
} 

