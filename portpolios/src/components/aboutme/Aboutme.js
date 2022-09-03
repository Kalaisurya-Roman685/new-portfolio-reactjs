import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4';

import './styles/Aboutme.scss';


function Aboutme() {
    return (
        <div className='mains' id="about">

            <div className='inside'>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>



        </div>
    )
}

export default Aboutme