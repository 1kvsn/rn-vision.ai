import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global.js';

import Input, { StyledInput } from '../reusableComponents/Input';
import Loading from '../reusableComponents/Loading';
import Heading from '../reusableComponents/Heading';
import TextButton from '../reusableComponents/TextButton';
import FlatButton from '../reusableComponents/FlatButton';

// can be moved to another file exclusively for validation schemas
const registerSchema = yup.object({
	name: yup
		.string()
    .required('Name is required!')
    .min(4),
	email: yup
		.string()
		.email('Invalid email')
		.required('Email is required!'),
	password: yup
		.string()
		.required('Password is required!') 
		.min(4, 'Password is too short - should be 4 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain letters a-z.'),
	confirmPassword: yup
    .string()
    .required('Confirm your password!')
    .test('passwords-match', 'Passwords must match!', function(value) {
      return this.parent.password === value;
    }),
});

export default function RegisterForm({ navigation }) {
	const [loading, setLoading] = useState(false);

	return (
		<View style={globalStyles.container}>
			<Heading style={styles.title}>REGISTRATION</Heading>
			<Formik
			initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
			validationSchema={registerSchema}
				onSubmit={(values, actions) => {
          actions.resetForm();
          // addReview(values);
        }}
			>
				{props => (
					<View>
						<StyledInput
							formikProps={props}
							formikKey="name"
							placeholder="Enter Your Name"
							autoFocus
						/>
						<StyledInput
							formikProps={props}
							formikKey="email"
							placeholder="johndoe@example.com"
						/>
						<StyledInput
							formikProps={props}
							formikKey="password"
							placeholder="Password"
							secureTextEntry
						/>
						<StyledInput
							formikProps={props}
							formikKey="confirmPassword"
							placeholder="Confirm Password"
							secureTextEntry
						/>
						<FlatButton text='register' style={styles.registerButton} />
						<TextButton
        			title='Have an account? Login here'
							onPress={() => {
								// must match the key name in Stack
								navigation.navigate('Login');
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
		marginTop: 32,
		marginBottom: 32,
		textAlign: 'center'
  },
	registerButton: {
		marginTop: 8,
	}
});