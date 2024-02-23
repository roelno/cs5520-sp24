import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, TurboModuleRegistry, SafeAreaView, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { db } from "../firebase/firebase-config";

export default function Home({navigation}) {
  console.log(db);
  const appName = "My First App";
  // const [text, setText] = useState("");
  const [goals, setGoals] = useState([]); // [goal1, goal2, goal3]
  const [isModalVisible, setIsModalVisible] = useState(false);

  const receiveInput = (newText) => {
    // define an object to hold the new goal
    const newGoal = {
      id: Math.random().toString(),
      value: newText,
    };

    // add the new goal to the goals array
    setGoals((currentGoals) => [...currentGoals, newGoal]);

    // close the modal  
    setIsModalVisible(false);
  };

  const dissmissModal = () => {
    setIsModalVisible(false);
  }

  const goalDeleteHandler = (goalId) => {
    const updatedGoals = goals.filter((goal) => goal.id !== goalId);
    setGoals(updatedGoals);
  }

  const goalDetailsHandler = (goal) => {
    console.log(goal.id);
    navigation.navigate("GoalDetails", {goalData: goal});
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topView}>
        <Header name={appName} version={2} />

        <PressableButton customStyle={styles.addButton} onPressFunction={() => setIsModalVisible(true)}>
          <Text style={{color: 'white', fontSize: 20}}>Add a Goal</Text>
        </PressableButton>

        <Input style={styles.inputStyle}
        inputHandler={receiveInput} 
        modalVisible={isModalVisible}
        dissmissModal={dissmissModal}
        />
      </View>
      
      <View style={styles.bottomView}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem item = {item} 
            goalDeleteFunction = {goalDeleteHandler}
            goalDetailsFunction = {goalDetailsHandler}/>
          )}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  topView: {  
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 20, 
  },
  bottomView: {
    flex: 4,
    backgroundColor: "lavender",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    // marginTop: 10,
  },
  inputStyle: {
    marginTop: 10, 
  },
  addButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
