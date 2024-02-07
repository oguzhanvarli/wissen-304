import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, ListItem } from '@rneui/themed'
import axios from 'axios'
import Toast from 'react-native-toast-message'

const Cart = () => {
  // const products = useSelector(state => state.cart.products)
  // console.log(products)

  const cart = useSelector(state => state.cart.value)

  const [products, setProducts] = useState([])

  useEffect(() => {
    if (cart > 0) {
      getCartValue()
    }
  }, [])

  const getCartValue = async () => {
    const products = await axios.get('/cart/getAll')
    setProducts(products.data.carts)
  }

  const deleteAllCart = async () => {
    const response = await axios.get('/cart/deleteAll')
    if(response.data.status){
      Toast.show({
        type: 'info',
        text1: 'Cart Deleted'
      })
      setProducts([])
    }
  }


  return (
    <View>

      <FlatList data={products}
        renderItem={({ item }) =>
          <ListItem bottomDivider>
            <Avatar
              source={{ uri: item.image }}
            />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>Adet : {item.quantity}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              <ListItem.Title>{item.price}$</ListItem.Title>
              {/* <ListItem.Subtitle>President</ListItem.Subtitle> */}
            </ListItem.Content>
          </ListItem>
        }
        ListFooterComponent={
          <View>
            <Button title='delete all' onPress={deleteAllCart} color={'indianred'} />
          </View>
        }

      />

    </View>
  )
}

export default Cart