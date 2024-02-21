import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
      </div>
    </div>

  )
}

export default Card