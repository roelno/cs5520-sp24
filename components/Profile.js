import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase/firebase-config'

const Profile = () => {
    console.log(auth.currentUser);
  return (
    <View>
      <Text>{auth.currentUser.uid}</Text>
      <Text>{auth.currentUser.email}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})