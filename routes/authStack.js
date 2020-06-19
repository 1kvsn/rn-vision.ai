import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Header from '../reusableComponents/Header';
import LoginForm from '../screens/loginForm';
import RegisterForm from '../screens/registerForm';

// order of screen matters
const screens = {
  Login: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Vision.ai' navigation={navigation} />
      }
    },
	},
	Register: {
    screen: RegisterForm,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Vision.ai' navigation={navigation} />
      }
    },
  },
};

// home stack navigator screens
const AuthStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default AuthStack;


