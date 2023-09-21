import React from 'react'

import "../homepage_styles/FeaturesContainer.css"

function Sections(props) {
    const { section} = props;

    return <h3 className='section'>{section}</h3>
}

export default Sections;