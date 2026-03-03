import React from 'react'

export const Footer = (props) => {
  return (
    <>
      <div>Footer Works</div>
      { props.value? <div>This div has value True</div>: <div>This div has value False</div>}

    </>
  )
}

Footer.defaultProps = {
  value : false
}