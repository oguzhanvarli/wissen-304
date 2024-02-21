import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, ButtonGroup, ListItem } from '@rneui/themed'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import { handleValue } from '../../store/features/cartSlice'
import { styles } from './cart.style'

const Cart = () => {
  // const products = useSelector(state => state.cart.products)
  // console.log(products)

  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    if (cart > 0) {
      getCartValue()
      handleTotalPrice()
    }

  }, [])

  useEffect(() => {
    if (cart > 0) {
      handleTotalPrice()
    }
  }, [products])

  useEffect(() => {
    return () => {
      isChanged ? handleLeftCart() : null
    }
  }, [isChanged])
  
  const handleLeftCart = async() => {
    try {
      console.log('worked')
      let response = await axios.post('/cart/updateCart', products)
      console.log(response.data)
    } catch (error) {
      console.log('Cart Update Error', error)
    }
  }

  console.log(products)
  


  const getCartValue = async () => {
    const products = await axios.get('/cart/getAll')
    setProducts(products.data.carts)
  }

  const deleteAllCart = async () => {
    const response = await axios.get('/cart/deleteAll')
    if (response.data.status) {
      Toast.show({
        type: 'info',
        text1: 'Cart Deleted'
      })
      setProducts([])
      dispatch(handleValue(0))
    }
  }


  const handleQuantity = (item, type) => {
    //item.quantity = item.quantity + 1
    // if(element._id === item._id){
    //   element.quantity = element.quantity + 1
    // }
    // newArray.push(element) 
    let newData;
    if (type === 'plus') {
      newData = products.map((element) => element._id === item._id ? { ...element, quantity: element.quantity + 1 } : element)
    } else if (type === 'minus') {
      newData = products.map((element) => element._id === item._id ? { ...element, quantity: element.quantity - 1 } : element)
    }
    setProducts(newData)
    setIsChanged(true)
  }

  const handleTotalPrice = () => {
    let innerTotalPrice = 0
    products.forEach(element => {
      innerTotalPrice = innerTotalPrice + (element.quantity * element.price)
    });
    setTotalPrice(innerTotalPrice)
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
              <ListItem>
                <Button
                  title='-'
                  onPress={() => handleQuantity(item, 'minus')}
                  style={styles.quantityButton}
                  disabled={item.quantity === 1 ? true : false }
                />
                <Text>{item.quantity} </Text>
                <Button title='+' onPress={() => handleQuantity(item, 'plus')} style={styles.quantityButton} />
              </ListItem>
            </ListItem.Content>

            <ListItem.Content right>
              <ListItem.Title>{item.price * item.quantity}$</ListItem.Title>
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
      <View>
        <Text>Toplam = {totalPrice}</Text>
      </View>

    </View>
  )
}

export default Cart