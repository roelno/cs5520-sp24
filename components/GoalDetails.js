import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const GoalDetails = ({navigation, route}) => {
    const [warning, setWarning] = useState(false); 
    const warningHandler = () => { 
      alert('This is a warning message');
      setWarning(true);
    }

    useEffect(() => {
        navigation.setOptions({headerRight: () => {return <Button title='Warning' onPress={warningHandler} icon="alert" color="green" />}});
        }, [warning]);

    const {goalData} = route.params;
    return (
        <View>
            <Text>GoalDetails:</Text>
            <Text>Goal ID: {JSON.stringify(goalData.id)}</Text>
            <Text>Goal Value: {JSON.stringify(goalData.value)}</Text>
            {warning && <Text>Warning: This is a warning message</Text>}
        </View>
    )
}

export default GoalDetails

const styles = StyleSheet.create({})