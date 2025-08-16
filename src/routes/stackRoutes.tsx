import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"


import { Home } from "../screens/home"
import { SignUp } from "../screens/signup"



export type StackRoutesList ={
    signup: undefined
    home: {
        id: string
    }
}

export type StackRoutesProps<T extends keyof StackRoutesList  > = NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()


export function StackRoutes() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    )
}