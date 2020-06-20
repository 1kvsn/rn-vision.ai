import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';

import { globalStyles } from '../../styles/global.js';

import { StyledInput } from '../../reusableComponents/Input';
import Heading from '../../reusableComponents/Heading';
import Loading from '../../reusableComponents/Loading';
import TextButton from '../../reusableComponents/TextButton';
import FlatButton from '../../reusableComponents/FlatButton';

import { loginSchema } from '../../utils/validations';
import { loginUserAction } from '../../actions';

function LoginForm({ navigation, loginUser, isLoading, user }) {
	console.log(user, 'this is user in state');
	useEffect(() => {
		if (user && user.email) {
			navigation.navigate('Home');
		}
	})
	return (
		<View style={globalStyles.container}>
			<Heading style={styles.title}>LOGIN</Heading>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={loginSchema}
				onSubmit={(values, actions) => {
					actions.resetForm();
          loginUser(values.email, values.password);
        }}
			>
				{props => (
					<View>
						<StyledInput
							formikProps={props}
							formikKey="email"
							placeholder="johndoe@example.com"
							keyboardType={'email-address'}
							autoFocus
						/>
						<StyledInput
							formikProps={props}
							formikKey="password"
							placeholder="Password"
							secureTextEntry
						/>
						<FlatButton text='Login' style={styles.loginButton} onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
			<TextButton
				title="Don't have an account? Create here"
				onPress={() => {
					navigation.navigate('Register');
				}}
			/>
			<Loading loading={isLoading} />
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

const mapStateToProps = state => {
	return {
		user: state.user.user,
		isLoading: state.user.isLoading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		loginUser: (email, password) => dispatch(loginUserAction({email, password})),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);