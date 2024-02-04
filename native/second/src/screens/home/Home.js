import { View, Text, Button, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styles } from './home.style'
import { Card } from '@rneui/themed';

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
      <ScrollView>
        <Button title='Get Products' onPress={getProducts} color={'indianred'} />
        {
          products.map((product, key) => (
            <View key={key} style={styles.container}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Divider />
              <View style={{ position: "relative", alignItems: "center" }}>
                <Image
                  style={{ width: "100%", height: 100 }}
                  resizeMode="contain"
                  source={{ uri: product.image }}
                />
                <Text >{product.price}</Text>
              </View>
            </View>
          ))
        }
        {/* <Button title='Go To Category' onPress={goCategory} color={'indianred'}/> */}
      </ScrollView>

    </>
  )
}

export default Home