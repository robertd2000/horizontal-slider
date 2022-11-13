import React from 'react'
import logo from '../assets/Vector.svg'

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>CIRCEYA</h2>
        </div>

        <div>
          <p>+7 (495) 495-49-54</p>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
