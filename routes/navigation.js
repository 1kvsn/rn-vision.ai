import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from '../screens/loginForm';
import Register from '../screens/registerForm';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import Home from '../screens/Home/home';
import StackChangeExampleComponent from '../screens/stackChangeExampleComponent';
import LogOut from '../screens/logout';



const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
		<AuthStack.Screen name='Register' component={Register} options={{ title: 'Register' }} />
	</AuthStack.Navigator>
)

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
)

const SettingStack = createStackNavigator();
const SettingStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen name="Settings" component={Settings} />
    <SettingStack.Screen name="StackChangeExampleComponent" component={StackChangeExampleComponent} />
  </SettingStack.Navigator>
)

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name='Home' component={HomeStackScreen}/>
    <Tabs.Screen name='Settings' component={SettingStackScreen} />
  </Tabs.Navigator>
)

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
	<Drawer.Navigator>
		<Drawer.Screen name="Home" component={TabsScreen} />
		<Drawer.Screen name="Settings" component={SettingStackScreen} />
		<Drawer.Screen name="Log Out" component={LogOut} />
	</Drawer.Navigator>
)

const RootStack = createStackNavigator();
const RootStackScreen = ({ auth }) => (
  <RootStack.Navigator headerMode="none">
    {auth.user && auth.user.email ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

const dummyData = {
	isLoading: false,
	isRegistrationSuccess: false,
	user: {
		email: "s@s.com",
		lastLoginAt: undefined,
		name: null,
		uid: "3odWtaMBaTfuArGvXNSqjin6ml73",
	}
}

const storeToken = async (authData) => {
	try {
		console.log('storring dummy data')
		 await AsyncStorage.setItem("authData", JSON.stringify(authData));
	} catch (error) {
		console.log("Something went wrong", error);
	}
}

const getToken = async () => {
	const authData = await AsyncStorage.getItem("authData");
	console.log(JSON.parse(authData), 'getting parsed data')
	return JSON.parse(authData);
}


const Navigation = ({ auth }) => {
	const [isLoading] = React.useState(false);
	const [authData, setAuthData] = React.useState();

  if (isLoading) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Loading...</Text></View>
	}
	// storeToken(dummyData);
	
	// React.useEffect(() => {
	// 	const checkToken = async () => {
	// 		const data = await getToken();
	// 		console.log(data, 'useEffect data');
	// 		if (data !== null) {
	// 			setAuthData(data)
	// 		} else if (auth.user && auth.user.email) {
	// 			storeToken(auth);
	// 		}
	// 	}
	// 	checkToken();
	// }, [])
	

  return (
		<NavigationContainer>
			<RootStackScreen auth={auth} />
		</NavigationContainer>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.user,
  }
}
export default connect(mapStateToProps)(Navigation);