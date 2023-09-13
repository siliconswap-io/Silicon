import React from 'react'

/* ////// PAGES ////// */
import HomeSection from './HomeSection';
import HomeSubSections from './HomeSubSections';
import Line from './HomeLine';
import HomeSectionLink from './HomeSectionLink';


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
    </div>

  )
}

export default HomeExclusiveContainer;