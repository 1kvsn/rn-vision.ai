import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import { store } from './config/store/store';
import { context } from './config/context';

import Navigation from './routes/navigation';

const App = () => {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;