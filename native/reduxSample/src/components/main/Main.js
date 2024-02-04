import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { arttir, azalt, sayiyaGoreArttır } from '../../store/features/counterSlice'

const Main = () => {

  const [counterNumber, setCounterNumber] = useState(0)

  const dispatch = useDispatch()

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <TextInput 
        value={counterNumber}
        onChangeText={setCounterNumber}
        keyboardType='numeric'
        style={style.input} />
        <Button title={'arttır'} onPress={() => dispatch(sayiyaGoreArttır(counterNumber))}/>
      </View>
      <Button title="arttır" onPress={() => dispatch(arttir())} />
      <Button title="azalt" onPress={() => dispatch(azalt())} />

    </View>
  )
}

export default Main

const style = StyleSheet.create({
  container: {
    backgroundColor: 'indianred',
    height: '70%'
  },
  innerContainer: {
    flexDirection: 'row',
    margin: 25
  },
  input: {
    backgroundColor: 'white',
    width: '80%'
  }
})