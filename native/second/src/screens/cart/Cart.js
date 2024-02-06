import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, ListItem } from '@rneui/themed'

const Cart = () => {
  const products = useSelector(state => state.cart.products)
  console.log(products)
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
                {/* <ListItem.Subtitle>President</ListItem.Subtitle> */}
              </ListItem.Content>
              <ListItem.Content right>
                <ListItem.Title>{item.price}$</ListItem.Title>
                {/* <ListItem.Subtitle>President</ListItem.Subtitle> */}
              </ListItem.Content>
            </ListItem>
          }
        />
    </View>
  )
}

export default Cart