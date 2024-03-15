import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { auth } from './firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import PressableButton from './components/PressableButton';
import {AntDesign} from '@expo/vector-icons'
import Profile from './components/Profile'
import { signOut } from 'firebase/auth';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const AuthStack = () => {
    return (
      <>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </>
    )
  }
  
  const AppStack = () => {
    return (
      <>
        <Stack.Screen 
          options={({navigation}) => {
            return {
              headerRight: () => {
                return (
                  <PressableButton onPressFunction={ () => {navigation.navigate("Profile")}}>
                    <AntDesign name="user" size={24} color="white" />
                  </PressableButton>
                )}
            }
          }} 
          name="All My Goals" 
          component={Home} />
        <Stack.Screen 
          name = "Profile"
          component={Profile}
          options={{
            headerRight: () => {
              return (
                <PressableButton onPressFunction={ 
                  async () => {
                    try {
                      await signOut(auth);
                      console.log('Signed out');
                    } catch (error) {
                      console.log(error);
                    }
                  }
                 }>
                  <AntDesign name="logout" size={24} color="white" />
                </PressableButton>
              )}
          }}
        />
        <Stack.Screen 
          options={({route}) => {
            return  {
              title: route.params.goalData.value, 
              headerTitleAlign: 'center',
            }
          }} 
          name="GoalDetails" 
          component={GoalDetails} />
      </>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SignUp'
        screenOptions={{headerStyle: styles.headerStyle, headerTintColor: 'white'}}>
        
        {userLoggedIn ? AppStack() : AuthStack()}

        
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'purple', 
  },
})