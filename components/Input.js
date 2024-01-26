import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native';

const Input = ({ inputHandler, modalVisible, dissmissModal }) => {
  const [text, setText] = useState("");

  return (
    <Modal style={styles.container} visible={modalVisible}>
      <View>
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/en/0/0f/Space_Invaders_flyer%2C_1978.jpg",}} style={styles.image} />
        <TextInput
          placeholder="Type something here"
          style={styles.input}
          value={text}
          onChangeText={(newText) => setText(newText)} 
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Cancel'
            onPress={() => dissmissModal()}
          />
          <Button 
            title="Confirm"
            onPress={() => inputHandler(text)}
            />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: "50%"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200
  },
  buttonContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 10
  }
});

export default Input;
