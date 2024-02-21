import React from 'react'

type Props = {}

const GridExample = (props: Props) => {
  return (
    <div className='grid grid-cols-8 gap-2'>
      <div className='bg-red-100 col-start-3 hover:col-span-3'>1</div>
      <div className='bg-red-200'>2</div>
      <div className='bg-red-300 col-span-3'>3</div>
      <div className='bg-red-400 col-span-3'>4</div>
      <div className='bg-red-500'>5</div>
    </div>
  )
}

export default GridExample