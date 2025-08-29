import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER } from "./userServiceConfig";
import { userServiceProps } from "./userService.types";

export async function saveUserName( name: userServiceProps  ){
    try {
    await AsyncStorage.setItem(USER, JSON.stringify(name));
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    throw error; 
  }
}


export async function getUserName() {
    try {
    const storage = await AsyncStorage.getItem(USER);

    const user: userServiceProps = storage ? JSON.parse(storage) : {} as userServiceProps;

    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return {} as userServiceProps;
  }
}