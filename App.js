import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: styles.headerStyle, headerTintColor: 'white'}}>
        <Stack.Screen 
          options={{title: 'My Home Screen'}} 
          name="Home" 
          component={Home} />
        <Stack.Screen name="GoalDetails" component={GoalDetails} />
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