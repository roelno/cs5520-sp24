import React from 'react'
import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/firebase-config';


const SignUp = ( {navigation} ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');


  const signInHandler = () => {
    navigation.replace('Login');
  }
  const signUpHandler = async () => {
    if (!email || !password || !confrimPassword) {
      Alert.alert('Please fill in all the fields');
      return;
    }

    if (password !== confrimPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      console.log(user);
    } catch (error) {
      console.log(error);
    }
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

      <Text>Confirm Password</Text>
      <TextInput
        label="Password"
        secureTextEntry = {true}
        placeholder='Confirm Password'
        value={confrimPassword}
        onChangeText={text => setConfrimPassword(text)}
      />

      <Button
        title="OK"
        onPress={ signUpHandler}
      />

      <Button
        title="Go to Login"
        onPress={ signInHandler}
      />


    </View>
    

  )
}
export default SignUp

const styles = StyleSheet.create({})