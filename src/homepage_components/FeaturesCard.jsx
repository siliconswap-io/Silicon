import React from 'react'

import "../homepage_styles/FeaturesContainer.css"

const FeaturesCard = (props) => {

    const {cardTitle, cardContent, btnText} = props;

  return (
    <div className='card-content'>
        <h4>{cardTitle}</h4>
        <p>{cardContent}</p>
        <button>{btnText}</button>
    </div>
   
  )
}

export default FeaturesCard