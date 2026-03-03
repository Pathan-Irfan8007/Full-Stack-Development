import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <>
        <nav>
            <div className="page" id="logo">{props.logo}</div>
            <div className="page border">Page 2</div>
            <div className="page border">Page 3</div>
            <div className="page border">Page 4</div>
            <div className="page border">Page 5</div>
        </nav>
    </>
  )
}

export default Navbar