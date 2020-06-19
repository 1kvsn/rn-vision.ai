import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global.js';

import Input from '../reusableComponents/Input';
import Heading from '../reusableComponents/Heading';
import TextButton from '../reusableComponents/TextButton';
import FlatButton from '../reusableComponents/FlatButton';

export default function LoginForm({ navigation }) {
	return (
		<View style={globalStyles.container}>
			<Heading style={styles.title}>LOGIN</Heading>
			<Formik>
				{props => (
					<View>
						<Input 
							style={styles.input}
							placeholder='Email address'
							keyboardType={'email-address'}

						/>
						<Input 
							style={styles.input}
							placeholder='Password'
							secureTextEntry
						/>
						<FlatButton text='Login' style={styles.loginButton} />
					</View>
				)}
			</Formik>
			<TextButton
				title="Don't have an account? Create here"
				onPress={() => {
					navigation.navigate('Register');
				}}
			/>
		</View>
	)
}

// can be gloBalStyles ?
const styles = StyleSheet.create({
  title: {
		marginTop: 48,
		marginBottom: 48,
		textAlign: 'center'
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});