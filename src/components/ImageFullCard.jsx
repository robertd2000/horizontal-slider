import React from 'react'
import CardLeft from './CardLeft'
import CardRight from './CardRight'

const ImageFullCard = ({ image1, image2 }) => {
  return (
    <div className="full">
      <h2 className="title">ut aliquip ex ea commodo consequat</h2>
      <CardLeft image={image1} />
      <CardRight image={image2} />
    </div>
  )
}

export default ImageFullCard
