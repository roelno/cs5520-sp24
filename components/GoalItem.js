import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton';
import { MaterialIcons } from '@expo/vector-icons';


const GoalItem = ({item, goalDeleteFunction, goalDetailsFunction}) => {
  const onTap = () => {
    goalDetailsFunction(item);
  }

  return (
    <View style={styles.textContainer}>
      <Pressable
        onPress={onTap}
        android_ripple={{ color: 'white' }}
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed
              ? 0.5
              : 1,
            backgroundColor: pressed ? 'pink' : 'purple',
          }
        ]}>
          <Text style={styles.goalText}>{item.value}</Text>

          <PressableButton customStyle = {styles.deleteButton} onPressFunction={() => {goalDeleteFunction(item.id)}}>
            <MaterialIcons name="delete" size={24} color="white" />
          </PressableButton>

      </Pressable>
    </View>
    
        

    

  )
}

export default GoalItem

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "purple",
        margin: 10,
        borderRadius: 10,
        padding: 30,
        
      },
      goalText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      width: 300,
      borderRadius: 10,
    },
    deleteButton: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 10,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
    }
})