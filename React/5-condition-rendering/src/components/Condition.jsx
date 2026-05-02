import React from 'react'

const Condition = (props) => {
    // const isTrue = false

  return (
    <div>condition <br />

        {props.isTrue ? <button onClick={() => alert("View Course")}>View Course</button> : <button onClick={() => alert("Enroll Now")}>Enroll Now</button>}
    </div>
  )
}

export default Condition