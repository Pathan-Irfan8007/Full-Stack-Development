import React from 'react'
import { useState } from 'react'


const UseStates = () => {

    const [count, setCount] = useState(0)

    const onclick = () => {
        setCount(count + 1)
    }

    const double = () => {
        setCount(count*2)
    }

  return (
    <>
        <br /><br />
        <div>Count = {count}</div><br />
        <button onClick={onclick}> Count + 1</button>&emsp;&emsp;
        <button onClick={double}> Count x 2</button><br />
    </>
  )
}

export default UseStates