import './Counter.css'
import { useState } from 'react'
import React from 'react'

const counter = () => {
    const [text, setText] = useState("This is Primary Text")
  return (
    <>
        <p>{text}</p>

        <button onClick={() => {
            setText("This is Button : 1")
        }}>Button 1</button>&nbsp; &nbsp; 

        <button onClick={() => {
            setText("This is Button : 2")
        }}>Button-2</button>
    </>
)
}

export default counter
