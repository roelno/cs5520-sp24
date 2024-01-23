import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const appName = "My First App";
  const [text, setText] = useState("");

  const receiveInput = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} />
      <Input inputHandler={receiveInput} />
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
