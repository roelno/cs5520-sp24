import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const GoalItem = ({item, goalDeleteFunction, goalDetailsFunction}) => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.goalText}>{item.value}</Text>

        <Button
        title='Delete'
        onPress={() => {goalDeleteFunction(item.id)}}
        />
        <Button
        title='Details'
        onPress={() => {goalDetailsFunction(item)}}
        />

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
    },
})