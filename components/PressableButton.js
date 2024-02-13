import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PressableButton = ({customStyle, onPressFunction, children}) => {
  return (
    <Pressable style={ ({pressed}) => [
        styles.defaultStyle,
        customStyle,
        pressed && styles.pressed
    ]}
        onPress={onPressFunction}
        android_ripple={ {color: 'white'} }>

      {children}
    </Pressable>
  )
}

export default PressableButton

const styles = StyleSheet.create({
    defaultStyle: {
        backgroundColor: "purple",
        padding: 10,
        borderRadius: 10,
        
    },
    pressed: {
        backgroundColor: "green",
    }
})