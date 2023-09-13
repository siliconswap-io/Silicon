import React from 'react'

import '../homepage_styles/ExclusiveContainer.css'

/* ////// IMAGES ////// */
import IdoLogo from "../assets/images/Ido-logo.png";
import IdoCoin from "../assets/images/coin.png";

/* ////// PAGES ////// */
import Sections from './Sections';
import SubSections from './SubSections';
import Line from './Line';
import SectionLink from './SectionLink';
import Ido from './Ido';



const HomeExclusiveContainer = () => {
  return (
    <div className='exclusive-container'>
      <div>
        <div className='title-flex'> 
          <Sections section="EXCLUSIVE" />
          <Line />
        </div>
        <SubSections SubSection="Ongoing IDOs" />
      </div>

      <SectionLink linkText="View Leaderboard" />
      
      <div className='ido-container'>
        <Ido Logo ={IdoLogo} Name="Ancient Kingdom" 
          Price="Price (GAC) = 0.83 BUSD" Coin={IdoCoin} 
          Hour="9 hours ago" X="x84" Ath="ATH $1,024.24"
        />

        <Ido Logo ={IdoLogo} Name="Ancient Kingdom" 
          Price="Price (GAC) = 0.83 BUSD" Coin={IdoCoin} 
          Hour="9 hours ago" X="x84" Ath="ATH $1,024.24"
        />

        <Ido Logo ={IdoLogo} Name="Ancient Kingdom" 
          Price="Price (GAC) = 0.83 BUSD" Coin={IdoCoin} 
          Hour="9 hours ago" X="x84" Ath="ATH $1,024.24"
        />
      </div>


    </div>

  )
}

export default HomeExclusiveContainer;