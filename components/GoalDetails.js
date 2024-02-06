import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalDetails = ({route}) => {
    const {goalData} = route.params;
    return (
        <View>
            <Text>GoalDetails:</Text>
            <Text>Goal ID: {JSON.stringify(goalData.id)}</Text>
            <Text>Goal Value: {JSON.stringify(goalData.value)}</Text>
        </View>
    )
}

export default GoalDetails

const styles = StyleSheet.create({})