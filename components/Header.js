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
    fontSize: 20,
    color: 'darkmagenta',
    bordercolor: 'darkmagenta',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    fontWeight: 'bold'
  }
});

export default Header

