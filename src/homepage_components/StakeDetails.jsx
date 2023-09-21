import React from 'react';
// import { useState } from "react";

// import "../homepage_styles/IdoStakeContainer.css"


const StakeDetails = (props) => {
    // const [stakeValue, setStakeValue] = useState(0)
    const {detail, name} = props;


  return (
    <div className='stake-details'>
        <p>{detail}</p>
        <p>{name}</p>
    </div>
  )
}

export default StakeDetails;