

import React from 'react';
import './styles/Section1Skill.scss';
import s1 from '../../../../assests/success1.png';

function Section1skill() {
  return (
    <div className='section1-kalaisurya'>
      <div className='inside-section123'>
        <div className='left-section123'>
          <div >
            <h4 className='reactjs'>ReactJs</h4>
          </div>
          <div className='texts mb-2 mt-2'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
            </span>
          </div>
          <div className='mt-4'>
            <button className='readmore'>Read More..</button>
          </div>
        </div>
        <div className='right-section123'>
          <img src={s1} className="img-fluid" style={{zIndex:200000000}}/>
          <div className='empty'>

</div>
        </div>
      </div>
    </div>
  )
}

export default Section1skill
