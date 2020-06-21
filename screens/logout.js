import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function LogOut() {
	const clearAsyncStorage = async() => AsyncStorage.clear();

	return (
		<View style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
			}}>
			<Button title="Log Out" onPress={() => clearAsyncStorage} />
		</View>
	)
}
