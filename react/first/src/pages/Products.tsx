import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Products, initialProducts } from '../models/response/GetAllProducts'
import { Button, Rating, TextField, Typography } from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MemoSample from '../components/MemoSample';
import RefSample from '../components/RefSample';

type Props = {}

const Products = (props: Props) => {

  const [products, setProducts] = useState<Products[]>([initialProducts])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    getProduct()
  }, [])

  let getProduct = async () => {
    let response: Products[] = await axios.get('https://dummyjson.com/products').then(res => res.data.products)
    setProducts(response)
  }



  return (
    <div>
      <Button sx={{ backgroundColor: 'red', color: 'white' }} variant="outlined" color="success" className='mx-4'
       startIcon={<GetAppIcon />}
       onClick={() => setCounter(counter + 1)}
       >Get Data</Button>
      <Button variant="contained" color='success' endIcon={<CloudDownloadIcon />}>Get Data</Button>
      <Button variant="text">Get Data</Button>
      <input type='file' className='btn btn-success' onChange={(e) => console.log(e)} />
      <Rating value={4.5} readOnly />

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Typography variant='h3'>{counter}</Typography>
      <MemoSample counter={counter} />
      <RefSample />
      {/* {
      products && products.map((product) => (
          <>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h2>{product.category}</h2>
          </>
        ))
      } */}
    </div>
  )
}

export default Products