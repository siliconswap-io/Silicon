import ArrowRight from "../assets/icons/arrow-right.png"

import React from 'react'

const SectionLink = (props) => {
    const {linkText} = props;

    return (
      <div className='section-link'>
        <a href="">
          <p>{linkText}</p>
          <img src={ArrowRight} />
        </a>
        
      </div>
  )
}

export default SectionLink