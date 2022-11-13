import React from 'react'

const SmallCard = ({ image }) => {
  return (
    <div className="card-small">
      <img key={image.id} src={' images/' + image.src} alt={image.src} />
    </div>
  )
}

export default SmallCard
