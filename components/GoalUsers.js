import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addDocument, getAllDocs } from '../firebase/firestoreHelper';
import { db } from '../firebase/firebase-config';

const GoalUsers = ( { id } ) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const usersfromDB = await getAllDocs(`goals/${id}/users`);
        if (usersfromDB.length) {
          setUsers(usersfromDB);
          return;
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response.status); 
        // if the status is 200, then the response is ok
        // if the status is 404, then the response is not ok

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        topLevelUsers = await response.json();
        setUsers(topLevelUsers);

        topLevelUsers.forEach((user) => {
          // write to subcollection
          // addDocument(db, user, "goals", id, "users");
          // Or use (database, data, path) as below
          addDocument(db, user, `goals/${id}/users`);
        });
        
        

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
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

    </View>
  )
}

export default GoalUsers

const styles = StyleSheet.create({})