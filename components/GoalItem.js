import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalItem = ({item}) => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.goalText}>{item.value}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    textContainer: {
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