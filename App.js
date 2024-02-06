import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, TurboModuleRegistry, SafeAreaView, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import GoalItem from "./components/GoalItem";

export default function App() {
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topView}>
        <Header name={appName} version={2} />
        <View style={styles.buttonContainer}>
          <Button 
            title="Add a Goal" 
            onPress={() => setIsModalVisible(true)} 
          />
        </View>
        <Input style={styles.inputStyle}
        inputHandler={receiveInput} 
        modalVisible={isModalVisible}
        dissmissModal={dissmissModal}
        />
      </View>

      {/* <View style={styles.bottomView}>
      <ScrollView>
        {goals.map((goal) => (
          <View key={goal.id} style={styles.textContainer}>
            <Text style={styles.goalText}>{goal.value}</Text>
          </View>
        ))}
      </ScrollView>
      </View> */}
      
      <View style={styles.bottomView}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem item = {item} goalDeleteFunction = {goalDeleteHandler}/>
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

});
