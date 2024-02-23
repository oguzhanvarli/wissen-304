import React, { memo } from 'react'

type Props = {
  counter: number
}

const MemoSample = (props: Props) => {

  const {counter } = props

  console.log('hello i worked')

  return (
    <div>MemoSample {counter}</div>
  )
}

export default  memo(MemoSample)