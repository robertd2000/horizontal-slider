import React from 'react'
import logo from '../assets/Vector.svg'
import circeya from '../assets/Circeya.svg'
import phone from '../assets/Phone.svg'

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo" />
          <img className="logo-title" src={circeya} alt="circeya" />

          {/* <h2>CIRCEYA</h2> */}
        </div>

        <div className="phone">
          <p className="phone-full">+7 (495) 495-49-54</p>
          <img className="phone-short" src={phone} alt="phone" />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
