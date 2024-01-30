import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const GoalItem = ({item, goalDeleteFunction}) => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.goalText}>{item.value}</Text>

        <Button
        title='Delete'
        onPress={() => {goalDeleteFunction(item.id)}}
        />

    </View>
    

  )
}

export default GoalItem

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row",
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