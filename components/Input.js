import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native';

const Input = ({ inputHandler, modalVisible, dissmissModal }) => {
  const [text, setText] = useState("");

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container} >
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/en/0/0f/Space_Invaders_flyer%2C_1978.jpg",}} style={styles.image} />
        <Image source={require('./../assets/enemy.bmp')} style={styles.image} />
        <TextInput
          placeholder="Type something here"
          style={styles.input}
          value={text}
          onChangeText={(newText) => setText(newText)} 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView} >
            <Button
              title='Cancel'
              onPress={() => dissmissModal()}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title='Confirm'
              onPress={() => inputHandler(text)}
            />
          </View>
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
    width: 100,
    height: 100
  },
  buttonContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    // marginTop: 10
  },
  buttonView: {
    width: '40%',
    margin: 5
  }
});

export default Input;
