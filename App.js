import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from './screens/registerForm';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
