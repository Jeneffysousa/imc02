import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View>
      <Text style={styles.fontBlue}>IMC</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
    fontBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,

  },
})