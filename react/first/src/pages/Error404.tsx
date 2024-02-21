import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Error404 = (props: Props) => {

  const navigate = useNavigate()

  const [counter, setCounter] = useState<number>(5)
  let handleCounter: any = null


  useEffect(() => {
    decremantCounter()
    return () => {
      clearInterval(handleCounter)
    }
  }, [])

  useEffect(() => {
    if (counter === 0) {
      //navigate('/')
    }
  }, [counter])

  const decremantCounter = () => {
   handleCounter = setInterval(() => {
      setCounter(counter => counter - 1)
    }, 1000)
  }

  // const goToHomeFunction = (value: number) => {
  //   console.log('counter', value)
  // }


  const goToHome = () => {
    navigate('/')
  }
  return (
    <div style={{ minHeight: "100vh" }} className='bg-slate-500'>
      <h1 className="text-9xl font-bold underline bg-red-900 text-yellow-400">
        This is Error Page
      </h1>
      <div className='mt-10 justify-center'>
        <h1 className='text-3xl text-white text-center'>{counter} saniye içerisinde anasayfaya yönlendiriliyorsunuz...</h1>
        <div className='flex justify-center mt-6'>
          <button className=' bg-blue-400 text-white w-1/3 hover:bg-blue-600 hover:scale-125' onClick={goToHome}>Go To Home</button>
        </div>
      </div>

    </div>
  )
}

export default Error404