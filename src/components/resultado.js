import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Resultadeo = (valores) => {
  return (
    <View>
      <Text>{valores.menssagemResultadoIMC}</Text>
      <Text>{valores.resultadoIMC}</Text>
    </View>
  )
}

export default Resultado

const styles = StyleSheet.create({})
