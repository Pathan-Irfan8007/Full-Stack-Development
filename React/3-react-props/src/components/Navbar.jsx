import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav>
        <div>{props.link1}</div>
        <div>{props.link2}</div>
        <div>{props.link3}</div>
    </nav>
  )
}

export default Navbar