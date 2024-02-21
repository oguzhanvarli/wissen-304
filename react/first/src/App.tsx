import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import Error404 from './pages/Error404'
import GridExample from './pages/GridExample'
import Products from './pages/Products'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/grid' element={<GridExample />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
