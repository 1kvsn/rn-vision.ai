import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import { store } from './config/store/store';
import Navigator from './routes/drawer';


const getFonts = () => Font.loadAsync({
  'cabinsketch-regular': require('./assets/fonts/CabinSketch-Regular.ttf'),
  'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
          <Navigator />
      </Provider>
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
