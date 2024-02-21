import { View, Text, ScrollView, Image, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styles } from './home.style'
import ProductCartComponent from '../../components/ProductCartComponent'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, handleValue } from '../../store/features/cartSlice'


const Home = ({ navigation }) => {

  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    getProducts()
    getValueCart()
  }, [])

  const goCategory = () => {
    navigation.navigate('Category')
  }

  const getProducts = async () => {
    try {
      let product = await axios.get('/product/getAll')
      setProducts(product.data.products)
    } catch (error) {
      // console.log('Get All Products Error', error)
      console.log(error)
    }
  }

  const getValueCart = async() => {
    try {
      let value = await axios.get('/cart/cartNumber').then(res => res.data.number)
      console.log(value)
      dispatch(handleValue(value))
    } catch (error) {
      console.log('Get Cart Value Error', error)
    }
  }

  const handleAddToCart = async (item) => {
    try {
      let cartObj = {
        name: item.name,
        image: item.image,
        quantity: 1,
        price: item.price,
        productId : item._id
      }
      let response = await axios.post('/cart/addToCart', cartObj)
      if (response.data.message) {
        dispatch(addToCart(item))
      }
    } catch (error) {
      console.log('Add to Cart Error', error)
    }

  }



  return (
    <View style={styles.container}>
      {/* {
          products.map((product, key) => (
            <ProductCartComponent key={key} product={product} />
          ))
        } */}
      <View style={styles.cartContainer}>
        <Button
          title={`${cart}`}
          onPress={() => navigation.navigate('Cart')}
          style={styles.cartButton} />
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCartComponent product={item}
          onPress={() => handleAddToCart(item)} />}
        keyExtractor={item => item._id}
      />
      {/* <Button title='Go To Category' onPress={goCategory} color={'indianred'}/> */}
    </View>
  )
}

export default Home