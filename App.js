import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, TurboModuleRegistry } from "react-native";
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} />
      <Button 
        title="Open Modal" 
        onPress={() => setIsModalVisible(true)} 
      />
      <Input 
        inputHandler={receiveInput} 
        modalVisible={isModalVisible}
        dissmissModal={dissmissModal}
        />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
