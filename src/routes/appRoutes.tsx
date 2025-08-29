import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"


import { Home } from "../screens/home"


export type AppRoutes ={
   home: undefined
}

export type AppRoutesProps<T extends keyof  AppRoutes  > = NativeStackScreenProps<AppRoutes, T>

const Stack = createNativeStackNavigator<AppRoutes>()


export function AppRoutes() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    )
}