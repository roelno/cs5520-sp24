import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, TurboModuleRegistry, SafeAreaView } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const appName = "My First App";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const receiveInput = (newText) => {
    setText(newText);
    setIsModalVisible(false);
  };

  const dissmissModal = () => {
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topView}>
        <Header name={appName} version={2} />
        <View style={styles.buttonContainer}>
          <Button 
            title="Open Modal" 
            onPress={() => setIsModalVisible(true)} 
          />
        </View>
        <Input style={styles.inputStyle}
        inputHandler={receiveInput} 
        modalVisible={isModalVisible}
        dissmissModal={dissmissModal}
        />
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.textStyle}>{text}</Text>
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
  },
  buttonContainer: {
    // marginTop: 10,
  },
  inputStyle: {
    marginTop: 10, 
  },
  textStyle: {
    textAlign: "center",
    marginTop: 20,
  },
  

});
