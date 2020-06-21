import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import StackChangeExampleComponent from '../screens/stackChangeExampleComponent';

export default function Settings({ navigation }) {
	return (
		<View>
			<Text>This is Settings Screen</Text>
			<Button title="Example Component" onPress={() => {
				navigation.push('StackChangeExampleComponent')
			}} />
		</View>
	)
}