import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Products, initialProducts } from '../models/response/GetAllProducts'

type Props = {}



let initial

const Products = (props: Props) => {

  const [products, setProducts] = useState<Products[]>([initialProducts])

  useEffect(() => {
    getProduct()
  }, [])

  let getProduct = async () => {
    let response: Products[] = await axios.get('https://dummyjson.com/products').then(res => res.data.products)
    setProducts(response)
  }


  return (
    <div>
      {
      products && products.map((product) => (
          <>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h2>{product.category}</h2>
          </>
        ))
      }
    </div>
  )
}

export default Products