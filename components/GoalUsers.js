import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const GoalUsers = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response.status); 
        // if the status is 200, then the response is ok
        // if the status is 404, then the response is not ok

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

      }
      catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <View>
      <Text>GoalUsers</Text>
    </View>
  )
}

export default GoalUsers

const styles = StyleSheet.create({})