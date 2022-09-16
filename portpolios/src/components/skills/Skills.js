import React, { useState } from 'react'
import './styles/Skills.scss';
import ReactPlayer from 'react-player';


import Section1skill from './compnents/section1/Section1skill';
import Section2Skill from './compnents/section2/Section2Skill';
import Section3Skill from './compnents/section3/Section3Skill';
import Section4Skill from './compnents/section4/Section4Skill';
import Section5Skill from './compnents/section5/Section5Skill';
import Section6Skill from './compnents/section6/Section6Skill';
import Section7Skill from './compnents/section7/Section7Skill';
import Section8Skill from './compnents/section8/Section8Skill';
import Section9Skill from './compnents/section9/Section9Skill';
import Section10Skill from './compnents/section10/Section10Skill';
import Section11Skill from './compnents/section11/Section11Skill';
import Section12Skill from './compnents/section12/Section12Skill';
import Section13Skill from './compnents/section13/Section13Skill';
import Section14Skill from './compnents/section14/Section14Skill';
import Section15Skill from './compnents/section15/Section15Skill';
import Section16Skill from './compnents/section16/Section16Skill';
import MobileSection1 from './mobilecomponents/mobilesection1/MobileSection1';

function Skills() {

  const [datas, SetDatas] = useState([
    {
      id: 1,
      name: "Reactjs",
      color: "red",

      url: 'https://www.youtube.com/watch?v=0lbzmZeS-BY'
    },
    {
      id: 2,
      name: "ReactNative",
      color: "blue",
      url: 'https://www.youtube.com/watch?v=ynUHE4OFg9E',
    },
    {
      id: 3,
      name: "Javscript",
      color: "orange"
    },
    {
      id: 4,
      name: "Redux",
      color: "orange"
    },
    {
      id: 5,
      name: "ContextApi",
      color: "green"
    },
    {
      id: 6,
      name: "HTML",
      color: "orange"
    },
    {
      id: 7,
      name: "CSS",
      color: "orange"
    },
    {
      id: 8,
      name: "SASS",
      color: "orange"
    },
    {
      id: 9,
      name: "Bootstrap",
      color: "orange"
    },
    {
      id: 10,
      name: "UI/UX",
      color: "orange"
    },
    {
      id: 11,
      name: "VS Code",
      color: "orange"
    },
    {
      id: 12,
      name: "Figma",
      color: "orange"
    },
  ])
  return (
    <div className='main-section1'>
      <div className='inside-section row d-none d-lg-block'>
        <Section1skill />
        <Section2Skill />
        <Section3Skill />
        <Section4Skill />
        <Section5Skill />
        <Section6Skill />
        <Section7Skill />
        <Section8Skill />
        <Section9Skill />
        <Section10Skill />
        <Section11Skill />
        <Section12Skill />
        <Section13Skill />
        <Section14Skill />
        <Section15Skill />
        <Section16Skill />
      </div>
      <div className=' classmobile d-block d-lg-block'>
      
      <div>
      <MobileSection1 />
      </div>

      </div>
    </div>
  )
}

export default Skills