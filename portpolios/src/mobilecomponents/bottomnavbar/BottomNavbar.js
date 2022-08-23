import React from 'react'
import './styles/BottomNavbars.scss';
import { useState } from 'react';


import HomeMobilesection1 from '../section1/HomeMobilesection1';
import SkillsMobileSection from '../section2/SkillsMobileSection';

import kalai from '../../assests/whatsappkalai.jpeg';
import MobileProfileSection from '../mobileprofilesewction/MobileProfileSection';

function BottomNavbar({ dark, setdark }) {

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
                        <MobileProfileSection dark={dark} setdark={setdark} />
                    </div>
                </div>
                <div className='phone-mobile'>
                    <div className='inside-phone'>
                        <div >
                            <span onClick={() => setIndex(0)}>
                                <div className={`icons-section ${index === 0 ? "actives" : "null"} `}>
                                    <i class="fa-solid fa-house-heart"></i>
                                    Home
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(1)}>
                                <div className={`icons-section ${index === 1 ? "actives" : "null"} `}>
                                    <i class="fa-solid fa-book-open-cover"></i>
                                    Skill
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(2)}>
                                <div className={`icons-section ${index === 2 ? "actives" : "null"} `}>
                                    <i class="fa-solid fa-user-plus"></i>
                                    Adduser
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(3)}>
                                <div className={`icons-section ${index === 3 ? "actives" : "null"} `}>
                                    <i class="fa-solid fa-book-bookmark"></i>
                                    Projects
                                </div>
                            </span>
                        </div>
                        <div>
                            <span onClick={() => setIndex(4)} >
                                <img src={kalai} className={`kalai-circle ${index === 4 ? "greencircle" : "redcircle"} `} />
                            </span>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default BottomNavbar