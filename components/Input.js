import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const Input = ({ inputHandler }) => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Type something here"
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)} 
      />
      <Button 
        title="Confirm"
        onPress={() => inputHandler(text)}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: "50%"
  }
});

export default Input;
