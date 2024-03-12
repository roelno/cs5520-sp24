// rnfe
// rnf
// rnfs
import { Dimensions, useWindowDimensions, View, Text, StyleSheet } from 'react-native'
import React from 'react'

const { windowWidth, windowHeight } = Dimensions.get('window');

const Header = ({ name, version }) => {
  const { width, height } = useWindowDimensions();
  const paddingVerticalDynamic = height < width ? 0 : 5;
  return (
    <View>
      <Text style={[styles.header, {paddingVertical : paddingVerticalDynamic}]}>Welcome to {name} version {version}!</Text>
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
    borderColor: 'darkmagenta',
    borderWidth: 2,
    borderRadius: 5,
    padding: windowWidth < 400 ? 5 : 10,
    fontWeight: 'bold',
    marginTop: 20,
  }
});

export default Header

