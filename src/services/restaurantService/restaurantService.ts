import { api } from "../api/api";


export async function getRestaurants() {
    try {
    const response = await api.get('/restaurants')
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar restaurantes:", error);
  }
}
