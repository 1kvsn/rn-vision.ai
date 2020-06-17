import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../reusableComponents/FlatButton.js';
import Input from '../reusableComponents/Input';
import Heading from '../reusableComponents/Heading';


export default function RegisterForm() {
	return (
		<View>
			<Heading style={styles.title}>REGISTER</Heading>
			<Formik>

				{props => (
					<View>
						<Input 
							style={styles.input}
							placeholder='Enter Your Name'
						/>
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
						<Input 
							style={styles.input}
							placeholder='Confirm password'
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
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});