import React from 'react'

const HomeFeaturesCard = (props) => {

    const {cardTitle, cardContent, btnText} = props;

  return (
    <div className='card-content'>
        <h4>{cardTitle}</h4>
        <p>{cardContent}</p>
        <button>{btnText}</button>
    </div>
   
  )
}

export default HomeFeaturesCard