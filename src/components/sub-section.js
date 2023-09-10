import React from 'react'

function SubSections(props) {
    const { section, subsection } = props;
    
    return <div className='sub-section'>
        <h3>{section}</h3>
        <h2>{subsection}</h2>
    </div>
}

export default SubSections;