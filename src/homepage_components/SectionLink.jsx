import ArrowRight from "../assets/icons/arrow-right.png"

import React from 'react'

const SectionLink = (props) => {
    const {linkText} = props;

    return (
      <div className='section-link'>
        <a href="https://example.com">
          <p>{linkText}</p>
          <img src={ArrowRight} alt=""/>
        </a>
        
      </div>
  )
}

export default SectionLink