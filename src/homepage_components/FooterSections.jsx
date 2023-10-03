import React from 'react'

const FooterSections = (props) => {
    // title and link name 
    const { title, link1, link2, link3, link4, } = props;

    // hrefs
    const { href1, href2, href3, href4 } = props;

     // target
     const { target1, target2, target3, target4 } = props;

      // rel
    const { rel1, rel2, rel3, rel4 } = props;

    return (
        <div className='footer-sections'>
            <h3>{title}</h3>
            <a href={href1} target={target1} rel={rel1}>{link1}</a>
            <a href={href2} target={target2} rel={rel2}>{link2}</a>
            <a href={href3} target={target3} rel={rel3}>{link3}</a>
            <a href={href4} target={target4} rel={rel4}>{link4}</a>
        </div>
    )
}

export default FooterSections;