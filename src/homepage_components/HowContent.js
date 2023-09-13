import React from 'react'

const HowContent = (props) => {
    const {howH4, howP} = props;
  return (
    <div className='how-content'>
        <h4>{howH4}</h4>
        <p>{howP}</p>
    </div>
  )
}

export default HowContent;