// rnfe
// rnf
// rnfs
import { View, Text } from 'react-native'
import React from 'react'

const Header = ({ name, version }) => {
  return (
    <View>
      <Text>Welcome to {name} version {version}!</Text>

    </View>
  )
}

export default Header