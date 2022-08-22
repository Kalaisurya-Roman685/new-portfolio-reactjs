import React from 'react'
import './styles/BottomNavbars.scss';
import { useState } from 'react';


import HomeMobilesection1 from '../section1/HomeMobilesection1';
import SkillsMobileSection from '../section2/SkillsMobileSection';

function BottomNavbar() {

    const [index, setIndex] = useState(0);
    return (
        <div class="phone">
            <div className='mobile-inside-kalai'>

                <div className='section-lists'>
                    <div className="" hidden={index !== 0}>
                        <HomeMobilesection1 />
                    </div>
                    <div hidden={index !== 1}>
                        <SkillsMobileSection />
                    </div>
                    <div hidden={index !== 2}>
                        section3
                    </div>
                    <div hidden={index !== 3}>
                        section4
                    </div>
                    <div hidden={index !== 4}>
                        section5
                    </div>
                </div>
                <div className='phone-mobile'>
                    <div className='inside-phone'>
                        <div >
                            <span onClick={() => setIndex(0)}>
                                <div className="icons-section active">
                                    <i class="fa-solid fa-house-heart"></i>
                                    home
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(1)}>
                                <div>
                                    <i class="fa-solid fa-book-open-cover"></i>
                                    skill
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(2)}>
                                <div>
                                    <i class="fa-solid fa-user-plus"></i>
                                    adduser
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(3)}>
                                <div>
                                    <i class="fa-solid fa-book-bookmark"></i>
                                    projects
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(4)}>section5</span>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default BottomNavbar