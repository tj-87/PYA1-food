import { NavigationContainer} from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth/useAuth";

import { AuthRoutes } from "./authRoutes";

import { Home } from "../screens/home"
import { AppRoutes } from "./appRoutes";
import { ActivityIndicator, View } from "react-native";


export function Routes() {

    const { user, isLoadingUser } = useAuth()

    if(isLoadingUser)
    return(
         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#FF7622" />
         </View>
    
    )
    return(
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
    )
} 