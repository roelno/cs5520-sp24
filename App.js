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
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    )
  }
  
  const AppStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          options={{title: "My Home Screen"}} 
          name="Home" 
          component={Home} />
        <Stack.Screen 
          options={({route}) => {
            return  {
              title: route.params.goalData.value, 
              headerTitleAlign: 'center',
            }
          }} 
          name="GoalDetails" 
          component={GoalDetails} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: styles.headerStyle, headerTintColor: 'white'}}>
        
        {userLoggedIn ? (
          <Stack.Screen name="AppStack" component={AppStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}

        
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