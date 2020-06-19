import * as yup from 'yup';


export const registerSchema = yup.object({
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
		.min(6, 'Password is too short - should be 6 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain letters a-z.'),
	confirmPassword: yup
    .string()
    .required('Confirm your password!')
    .test('passwords-match', 'Passwords must match!', function(value) {
      return this.parent.password === value;
    }),
});

export const loginSchema = yup.object({
	email: yup
		.string()
		.email('Invalid email')
		.required('Email is required!'),
	password: yup
		.string()
		.required('Password is required!') 
		.min(6, 'Password is too short - should be 6 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain letters a-z.'),
});