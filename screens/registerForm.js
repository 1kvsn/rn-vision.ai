import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';

import { globalStyles } from '../styles/global.js';

import { StyledInput } from '../reusableComponents/Input';
import Loading from '../reusableComponents/Loading';
import Heading from '../reusableComponents/Heading';
import TextButton from '../reusableComponents/TextButton';
import FlatButton from '../reusableComponents/FlatButton';

import { registerSchema } from '../utils/validations';
import { registerUserAction } from '../actions'; 

function RegisterForm({ navigation, registerUser, user: { isRegistrationSuccess, isLoading } }) {

	useEffect(() => {
		if (isRegistrationSuccess) {
			navigation.navigate('Login');
		}
	})

	return (
		<View style={globalStyles.container}>
			<Heading style={styles.title}>REGISTRATION</Heading>
			<Formik
				initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
				validationSchema={registerSchema}
				onSubmit={(values, actions) => {
					actions.resetForm();
          registerUser(values.email, values.password);
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
						<FlatButton text='register' style={styles.registerButton} onPress={props.handleSubmit} />
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
			<Loading loading={isLoading} />
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

const mapStateToProps = state => {
	return {
		user: state.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		registerUser: (email, password) => dispatch(registerUserAction({email, password})),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

