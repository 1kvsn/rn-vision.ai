import React from 'react';
import { TextInput, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Input({ style, ...props }) {
  return (
    <TextInput
      {...props}
      style={[globalStyles.input, style]}
      placeholderTextColor={'darkgray'}
    />
  );
}

const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View>
    {label && <Text>{label}</Text>}
    {children}
    <Text style={{ color: 'red', marginBottom: 4, textAlign: 'right' }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

export const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    marginTop: 3,
    marginBottom: 3,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderWidth = 1,
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        style={[globalStyles.input, inputStyles]}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};