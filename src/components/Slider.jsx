import React from 'react'
import { useScroll } from '../hooks/useScroll'
import SmallCard from './SmallCard'

const Slider = ({ images }) => {
  const { scroll } = useScroll()

  return (
    <>
      <h2 className="title">Lorem ipsum dolor sit amet</h2>

      <div className="container">
        <div className="box-scroll container-wrapper" ref={scroll}>
          {images.map((image) => (
            <SmallCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Slider
