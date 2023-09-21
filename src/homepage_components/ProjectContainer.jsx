import React from 'react'

import "../homepage_styles/ProjectContainer.css"


/* ////// PAGES ////// */
import Sections from './Sections';
import SubSections from './SubSections';
import Line from './Line';
import SectionLink from './SectionLink';
import ProjectCard from './ProjectCard';

/* ////// IMAGES ////// */
import ProjectLogo from "../assets/images/Ido-logo.png"
import ProjectCoin from "../assets/images/coin.png"

const ProjectContainer = () => {
    return (
        <div className='project-container'>
            <div>
                <div className='title-flex'>
                    <Sections section="PROJECT" />
                    <Line />
                </div>
                <SubSections SubSection="Upcoming IDOs" />
            </div>

            <SectionLink linkText="View More" />

            <div className='project-card-cont'>
                <ProjectCard cardLogo={ProjectLogo} cardName="BitHotel" 
                cardDesc="Registration" cardCoin={ProjectCoin} 
                raisedAsset="0/299,015 MECHA" baseCurrency="BUSD" />
                <ProjectCard cardLogo={ProjectLogo} cardName="BitHotel" 
                cardDesc="Registration" cardCoin={ProjectCoin} 
                raisedAsset="0/299,015 MECHA" baseCurrency="BUSD" />
                <ProjectCard cardLogo={ProjectLogo} cardName="BitHotel" 
                cardDesc="Registration" cardCoin={ProjectCoin} 
                raisedAsset="0/299,015 MECHA" baseCurrency="BUSD" />
            </div>
        </div>
    )
}

export default ProjectContainer