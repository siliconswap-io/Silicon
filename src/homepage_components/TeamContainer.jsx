import React from 'react'

import "../homepage_styles/TeamContainer.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* ////// PAGES ////// */
import TeamCard from './TeamCard';
import Line from './Line';
import Sections from './Sections';
import SubSections from './SubSections';

/* ////// IMAGES ////// */
import ImageExample from "../assets/images/img-example.png";




const TeamContainer = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1440 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1440, min: 930 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 930, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <div className='team-container'>
            <div className='title'>
                <div className='title-flex'>
                    <Line />
                    <Sections section="WHO WE ARE" />
                </div>
                <SubSections SubSection="Our Team" />
            </div>

            <div className="carousel-container">
                <Carousel responsive={responsive} showDots={true} dotListClass="custom-dot-list-style"
                >
                    <TeamCard memberImg={ImageExample} memberName="John Doe" memberPosition="CEO"
                        facebookHref="https://example.com" linkdinHref="https://example.com"
                        xHref="https://example.com"
                    />

                    <TeamCard memberImg={ImageExample} memberName="John Doe" memberPosition="CEO"
                        facebookHref="https://example.com" linkdinHref="https://example.com"
                        xHref="https://example.com"
                    />

                    <TeamCard memberImg={ImageExample} memberName="John Doe" memberPosition="CEO"
                        facebookHref="https://example.com" linkdinHref="https://example.com"
                        xHref="https://example.com"
                    />

                    <TeamCard memberImg={ImageExample} memberName="John Doe" memberPosition="CEO"
                        facebookHref="https://example.com" linkdinHref="https://example.com"
                        xHref="https://example.com"
                    />

                    <TeamCard memberImg={ImageExample} memberName="John Doe" memberPosition="CEO"
                        facebookHref="https://example.com" linkdinHref="https://example.com"
                        xHref="https://example.com"
                    />

                    <TeamCard memberImg={ImageExample} memberName="John Doe" memberPosition="CEO"
                        facebookHref="https://example.com" linkdinHref="https://example.com"
                        xHref="https://example.com"
                    />
                </Carousel>

            </div>



        </div>
    )
}

export default TeamContainer;