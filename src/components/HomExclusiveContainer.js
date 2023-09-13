import React from 'react'

/* ////// IMAGES ////// */
import IdoLogo from "../assets/images/Ido-logo.png";
import IdoCoin from "../assets/images/coin.png";

/* ////// PAGES ////// */
import HomeSection from './HomeSection';
import HomeSubSections from './HomeSubSections';
import Line from './HomeLine';
import HomeSectionLink from './HomeSectionLink';
import HomeIdo from './HomeIdo';



const HomeExclusiveContainer = () => {
  return (
    <div className='exclusive-container'>
      <div>
        <div>
          <HomeSection section="EXCLUSIVE" />
          <Line />
        </div>
        <HomeSubSections SubSection="Ongoing IDOs" />
      </div>

      <HomeSectionLink linkText="View Leaderboard" />
      
      <div className='ido-container'>
        <HomeIdo Logo ={IdoLogo} Name="Ancient Kingdom" 
          Price="Price (GAC) = 0.83 BUSD" Coin={IdoCoin} 
          Hour="9 hours ago" X="x84" Ath="ATH $1,024.24"
        />

        <HomeIdo Logo ={IdoLogo} Name="Ancient Kingdom" 
          Price="Price (GAC) = 0.83 BUSD" Coin={IdoCoin} 
          Hour="9 hours ago" X="x84" Ath="ATH $1,024.24"
        />

        <HomeIdo Logo ={IdoLogo} Name="Ancient Kingdom" 
          Price="Price (GAC) = 0.83 BUSD" Coin={IdoCoin} 
          Hour="9 hours ago" X="x84" Ath="ATH $1,024.24"
        />
      </div>


    </div>

  )
}

export default HomeExclusiveContainer;