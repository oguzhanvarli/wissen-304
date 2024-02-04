import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styles } from './home.style'
import ProductCartComponent from '../../components/ProductCartComponent'


const Home = ({ navigation }) => {

  const [products, setProducts] = useState([])
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    getProducts()
  }, [])

  const goCategory = () => {
    navigation.navigate('Category')
  }

  const getProducts = async () => {
    try {
      let product = await axios.get('http://localhost:9000/product/getAll')
      setProducts(product.data.products)
    } catch (error) {
      // console.log('Get All Products Error', error)
      console.log(error)
    }
  }



  return (
    <>
        {/* {
          products.map((product, key) => (
            <ProductCartComponent key={key} product={product} />
          ))
        } */}
        <FlatList 
          data={products}
          renderItem={({item}) => <ProductCartComponent product={item} />}
          keyExtractor={item => item._id}
        />
        {/* <Button title='Go To Category' onPress={goCategory} color={'indianred'}/> */}
    </>
  )
}

export default Home