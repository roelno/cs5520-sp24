import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';
import React from 'react'
import { auth } from '../firebase/firebase-config'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ( {navigation} ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async() => {
    try {
      if (!email || !password) {
        Alert.alert('Please fill in all the fields');
        return;
      }
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  }

  const signUpHandler = () => {
    navigation.replace('SignUp');
  }


  return (
    <View>
      <Text>Email</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text>Password</Text>
      <TextInput
        label="Password"
        secureTextEntry = {true}
        placeholder='Password'
        value={password}
        onChangeText={ text => setPassword(text)}
      />

      <Button
        title="OK"
        onPress={ loginHandler }
      />

      <Button
        title="Go to Sign Up"
        onPress={ signUpHandler }
      />

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})