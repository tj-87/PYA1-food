import { Text, View } from "react-native";
import { StackRoutesProps } from "../../routes/stackRoutes";

export function Home({ navigation, route }: StackRoutesProps<'home'>) {
    return(
        <View style={{ flex: 1, justifyContent:'center', alignContent:'center', alignItems:'center' }} > 
            <Text>Olá Home {route.params.id}</Text>  
        </View>
    )
}