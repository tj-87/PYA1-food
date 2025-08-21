import React from "react";
import { FlatList, Pressable, Text, View, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { StackRoutesProps } from "../../routes/stackRoutes";

import { ChevronRight } from "lucide-react-native";
import { useFonts, Sen_700Bold, Sen_400Regular,  } from '@expo-google-fonts/sen';

import ImagButton from '../../assets/button.svg'
import Book from '../../assets/book.svg'
import Fish from '../../assets/fish.svg'
import HotDog from '../../assets/hotDog.svg'




const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Todas',
    imag:  Book,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hot dog',
     imag:  HotDog,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Peixes',
  imag:  Fish,
  },
];

const RESTAURANTS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
   imag: require("../../assets/restaurant1.png"),
    title: 'Restaurante Palatus',  
    subTitle: 'Hot dog - Peixes - Bebidas '
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imag: require("../../assets/restaurant2.png"), 
    title: 'Restaurante São José',
     subTitle: 'Hot dog - Peixes - Bebidas '
  },
];



export function Home({ navigation, route }: StackRoutesProps<'home'>) {

    let [fontsLoaded] = useFonts({
          Sen_700Bold,
          Sen_400Regular
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
             style={{ flex: 1}}>
        <View style={{ flex: 1, padding: 16, backgroundColor: '#E8E8E8'  }} > 
        <View style={{ flexDirection: 'row', marginTop: 54, alignItems:'center' }} >
            <ImagButton width={45} height={45}  />
            <Text  style ={{ marginLeft: 8, fontWeight: 700, fontSize: 12, fontFamily: 'Sen_400Regular', color: '#FC6E2A'   }} >
                {route.params.id}
            </Text>  
        </View> 
        <View style = {{ marginTop: 24,  }} >
            <Text style ={{ fontWeight: 400, fontSize: 16, fontFamily: 'Sen_400Regular', color: '#1E1D1D'   }} >Olá, seja bem vindo!</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 24, alignItems:'center' }} >
            <View style={{ flex: 1 }}>  
                <Text style ={{ fontWeight: 400, fontSize: 16, fontFamily: 'Sen_400Regular', color: '#32343E'   }} >Todas as categorias</Text>
            </View>
            <Text style ={{ fontWeight: 400, fontSize: 14, fontFamily: 'Sen_400Regular', color: '#333333'   }} >Ver todas</Text>
            <ChevronRight color="#A0A5BA" size={24} />
        </View>
      <View style={{ flex: 0 }}>      
      <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
        <View style={{ marginTop: 16, marginRight: 8, backgroundColor:'#ffffff', borderRadius: 50  }}  >
        <View style={{flexDirection:'row', alignItems:'center', gap: 12,  paddingVertical: 10, paddingHorizontal: 8, }}>
            <item.imag width={40} height={40} /> 
            <Text>{item.title}</Text>
        </View>
        </View>
        </Pressable>
      )}
      horizontal 
      showsHorizontalScrollIndicator={false}
    />
    </View>

       <View style={{ flexDirection: 'row', alignItems:'center', marginTop: 24 }} >
            <View style={{ flex: 1 }}>  
                <Text style ={{ fontWeight: 400, fontSize: 16, fontFamily: 'Sen_400Regular', color: '#32343E'   }} >Todas as categorias</Text>
            </View>
            <Text style ={{ fontWeight: 400, fontSize: 14, fontFamily: 'Sen_400Regular', color: '#333333'   }} >Ver todas</Text>
            <ChevronRight color="#A0A5BA" size={24} />
        </View>
   
      <FlatList
      data={RESTAURANTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
        <View style={{  marginTop: 18,}} >
            <View style={{borderRadius: 15, overflow: "hidden"   }}>
            <Image source={item.imag } style={{ width: 352, height: 191}} />
            </View>
            <Text  style ={{ marginTop: 8, fontWeight: 400, fontSize: 20, fontFamily: 'Sen_400Regular', color: '#181C2E' }}  >{item.title}</Text>
            <Text  style ={{ marginTop: 5, fontWeight: 400, fontSize: 14, fontFamily: 'Sen_400Regular', color: '#A0A5BA' }}>{item.subTitle}</Text>
        </View>
        </Pressable>
      )}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View style={{ height: 50 }} />}
    />
    </View>
    </KeyboardAvoidingView>
    )
}