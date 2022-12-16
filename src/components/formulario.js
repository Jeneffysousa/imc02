import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import Resultado from './resultado'

const Formulario = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagemIMC, setMensagemIMC] = useState('Informe os dados')
  const [IMC, setIMC] = useState (0)
  const [textoBotao, setTextoBotao] = useState('Calcular')

  function calcularIMC() {
    const imc = (peso / altura)
  }
  setMensagemIMC('Abaixo do peso')
 } else if (imc >= 18.5 && imc < 24.9) {
  setMensagemIMC('Peso normal')
 } else if (imc >= 25 && imc < 29.9) {
  setMensagemIMC('Sobrepeso')
 } else if (imc >= 30 && < 34.9) {
  setMensagemIMC('Obesidade grau 1')
 } else if (imc >= 35 && imc < 39.9) {
  setMensagemIMC('Obesidade grau 2')
 } else if (imc >= 40) {
  setMensagemIMC('Obesidade grau 3')
}  
  return (
    <View>
      <Text>Altura (cm)</Text>
      <TextInput
      placeholder='Ex: 172'
      keyboardType='numeric'
      ButtonChangeText={}
      />
      <Text>Peso (kg)</Text>
      <TextInput
      placeholder='Ex: 80.5'
      keyboardType='numeric'
      ButtonChangeText={(peso) => setPeso(peso)}
      value = {peso}
      />
      <Button title="Calcular" onPress={() => { calcularIMC()}}/>
    </View>
      <Resultado mensagemResultadoIMC={mensagemIMC} resultadoIMC= {IMC}
    </View>

  )
}

export default Formulario

const styles = StyleSheet.create({})


