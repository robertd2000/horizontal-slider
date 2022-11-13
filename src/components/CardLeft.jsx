import React from 'react'

const CardLeft = ({ image }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={' images/' + image} alt={image} />
      </div>
      <div className="content">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  )
}

export default CardLeft
