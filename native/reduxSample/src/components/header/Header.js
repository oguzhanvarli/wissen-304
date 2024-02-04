import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const counter = useSelector((state) => state.counter.value)

  return (
    <View style={style.container}>
      <Text style={style.text}>{counter}</Text>
    </View>
  )
}

export default Header


const style = StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    height: '20%'
  },
  text: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center'
  }
})