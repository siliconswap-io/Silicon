import React from 'react'

/* ////// IMAGES ////// */
import LinkdinIcon from "../assets/icons/linkdin-icon.png";
import XIcon from "../assets/icons/x-icon.png";
import FacebookIcon from "../assets/icons/facebook-icon.png";

const TeamCard = (props) => {
    // member details 
    const {memberImg, memberName, memberPosition} = props;

    // member socials 
    const {facebookHref, linkdinHref, xHref} = props;

  return (
    <div className='team-card'>
        <img src={memberImg} alt="" />
        <h4>{memberName}</h4>
        <p>{memberPosition}</p>

        <div className="team-socials">
            <a href={facebookHref} target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="" />
            </a>
            <a href={linkdinHref} target="_blank" rel="noopener noreferrer">
                <img src={LinkdinIcon} alt="" />
            </a>
            <a href={xHref} target="_blank" rel="noopener noreferrer">
                <img src={XIcon} alt="" />
            </a>
        </div>
    </div>
    
  )
}

export default TeamCard