import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import RegisterForm from './screens/registerForm';
import Input from './reusableComponents/Input';
import Navigator from './routes/drawer';



const getFonts = () => Font.loadAsync({
  'cabinsketch-regular': require('./assets/fonts/CabinSketch-Regular.ttf'),
  'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // return (
  //   <View style={styles.container}>
  //     <RegisterForm />
  //   </View>
  // );

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
