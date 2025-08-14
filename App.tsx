import { useFonts, Sen_700Bold, Sen_400Regular } from '@expo-google-fonts/sen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

    let [fontsLoaded] = useFonts({
      Sen_700Bold,
      Sen_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text  style={{ fontFamily: 'Sen_400Regular', fontSize: 20 }}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
