import { View, Text, Button } from 'react-native'
import React from 'react'

const Product = ({navigation}) => {
  return (
    <View>
      <Text>Product</Text>
      <Button onPress={() => navigation.goBack()}
        title={'Go Back'}
      />
    </View>
  )
}

export default Product