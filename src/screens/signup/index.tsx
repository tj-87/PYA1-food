import React, { useState } from 'react';
import { useFonts, Sen_700Bold, Sen_400Regular,  } from '@expo-google-fonts/sen';

import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';


import { useAuth } from '../../hooks/useAuth/useAuth';
import { AuthRoutesProps } from '../../routes/authRoutes';



export function SignUp({ navigation }: AuthRoutesProps<'signup'> ) {
   const [text, setText] = useState('');

   const { signUp } = useAuth()

   function handledeSignup(name: string){
      signUp(name)
   }

    let [fontsLoaded] = useFonts({
      Sen_700Bold,
      Sen_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps="handled" 
         contentContainerStyle={{ flexGrow: 1 }} 
      >
    <View style={{  flex: 1, backgroundColor:'#121223' }} >
        <View style={{ marginTop: 260, justifyContent:'center', alignContent:'center', alignItems:'center' }} >
        <Text  style={{ fontWeight:'700', fontFamily: 'Sen_400Regular', fontSize: 30, color:'#ffffff' }}>Criar conta</Text>
       <Text  style={{  marginTop: 3, fontFamily: 'Sen_400Regular', fontSize: 16, color:'#ffffff' }}>Cadastro simplificado</Text>
       </View>
        <View style={{ flex: 1, padding: 16, marginTop: 175, backgroundColor: '#ffff', borderTopEndRadius: 24, borderTopLeftRadius : 24  }} >
        <Text style={{  marginTop: 24, fontSize: 12, fontFamily: 'Sen_400Regular', color: '#3e3e3e'}} >Nome </Text>
        <View style={{  flex: 1,   marginTop: 2 }} >
        <TextInput
            style={{ height: 48, borderRadius: 8, borderWidth: 1, backgroundColor:'#F0F5FA', borderColor: '#D9D9D9', paddingHorizontal: 16}}
            placeholder ="Digite seu nome"
            placeholderTextColor='#D3D3D3'
            value={text}
            onChangeText={setText}  
        />
        </View>
        <View style={{ marginTop: 134, marginBottom: 24 }}  >
       <Pressable disabled={!text}
        onPress={() => {                 
        handledeSignup(text) 
        navigation.navigate("home") 
  }}
        style={{ backgroundColor: text ? '#FF7622' : '#DBDBDB' , height: 54, justifyContent:'center', alignContent:'center', alignItems:'center', borderRadius: 8 }} >
        <Text style={{color: text ? "#ffffff"  : "#98A8B8", fontFamily: 'Sen_400Regular'}}  >Criar</Text>
        </Pressable>
        </View>
        
        </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

