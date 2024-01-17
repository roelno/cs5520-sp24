import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({ text, setText }) => {

  return (
    <View>
      <TextInput
        placeholder="Type something here"
        style={styles.input}
        value={text}
        onChangeText={setText}
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
