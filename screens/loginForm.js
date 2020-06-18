import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../reusableComponents/FlatButton.js';
import Input from '../reusableComponents/Input';
import Heading from '../reusableComponents/Heading';


export default function LoginForm() {
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
						<FlatButton text='submit' />
					</View>
				)}
			</Formik>
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