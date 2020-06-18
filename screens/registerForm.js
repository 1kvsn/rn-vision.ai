import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global.js';

import Input from '../reusableComponents/Input';
import Loading from '../reusableComponents/Loading';
import Heading from '../reusableComponents/Heading';
import TextButton from '../reusableComponents/TextButton';
import FlatButton from '../reusableComponents/FlatButton';


export default function RegisterForm() {
	const [loading, setLoading] = useState(false);

	return (
		<View style={globalStyles.container}>
			<Heading style={styles.title}>REGISTRATION</Heading>
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
						<FlatButton text='register' />
						<TextButton
        			title='Have an account? Login here'
							onPress={() => {
								navigation.navigate('Registration');
							}}
      			/>
					</View>
				)}
			</Formik>
			<Loading loading={loading} />
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