import { NavigationContainer} from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth/useAuth";

import { AuthRoutes } from "./authRoutes";


export function Routes() {

    const { user } = useAuth()

    console.log("Usuário Logado =>", user  )

    return(
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
} 