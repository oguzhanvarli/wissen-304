import { Button } from '@mui/material'
import React, { RefObject, useRef } from 'react'

type Props = {}

const RefSample = (props: Props) => {

  const divRef = useRef<HTMLDivElement>(null)

  console.log(divRef)

  const createNewDiv = () => {
    if(divRef.current){
      divRef.current.style.backgroundColor = 'red'
      divRef.current.textContent = 'Wiseen Elveda'
    }
  }

  return (
    <>
    <div ref={divRef} className=' text-3xl'>RefSampleRefSampleRefSampleRefSampleRefSampleRefSample</div>
    <Button variant='outlined' onClick={createNewDiv} >Div'e Background Color Ekle</Button> 
    </>
  )
}

export default RefSample