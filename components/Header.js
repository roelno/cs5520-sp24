// rnfe
// rnf
// rnfs
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({ name, version }) => {
  return (
    <View>
      <Text style={styles.header}>Welcome to {name} version {version}!</Text>

    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexi : 1,
    fontSize: 24,
    color: 'purple',
    bordercolor: 'purple',
    borderwidth: 2,
    borderradius: 5,
    padding: 5,
    fontWeight: 'bold'
  }
});

export default Header

