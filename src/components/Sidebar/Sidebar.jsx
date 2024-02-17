import React from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.png'

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="Logo">
            <img src={logo} alt='' />
            <span>TeachEase</span>
        </div>
    </div>
  )
}

export default Sidebar