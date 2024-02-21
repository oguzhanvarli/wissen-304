import React from 'react'
import Card from '../components/Card'

type Props = {}

const Detail = (props: Props) => {
  return (

    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active d-flex">
          <Card />
          <Card />

        </div>
        <div className="carousel-item">
        <Card />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  )
}

export default Detail