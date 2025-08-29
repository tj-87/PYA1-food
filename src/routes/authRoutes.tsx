import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"


import { Home } from "../screens/home"
import { SignUp } from "../screens/signup"



export type AuthRotes ={
    signup: undefined
     home: undefined
}

export type AuthRoutesProps<T extends keyof AuthRotes  > = NativeStackScreenProps<AuthRotes, T>

const Stack = createNativeStackNavigator<AuthRotes>()


export function AuthRoutes() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="signup" component={SignUp} />
              <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    )
}