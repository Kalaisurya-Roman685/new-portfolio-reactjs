import React from 'react'
import './styles/Clients.scss';
import new1 from '../../assests/new1.png'
import new2 from '../../assests/new2.png'
import new3 from '../../assests/new3.png'
function Clients() {
  return (
    <div className='mian-section6'>
      <div className='inside-section6'>
        <div className='top-section6'>
          <div className='our'>
            Our Profesional Clients
          </div>
          <div className='create'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
          </div>
        </div>
        <div className='body-section6'>
          <div className='body-inside-section6'>
            <div className='box1-section6'>
              <div className='images'>
                <img src={new1} alt="no image" className='img-section6' />
              </div>
              <div className='name-edit'>
                Aoi Sora
              </div>
              <div className='subject'>
                UI/UX
              </div>
            </div>
            <div className='box2-section6'>
            <div className='images'>
                <img src={new2} alt="no image" className='img-section6' />
              </div>
              <div  className='name-edit'>
                Dekembe Mutumbu
              </div>
              <div className='subject'>
                ReactJs 
              </div>
            </div>
            <div className='box3-section6'>
            <div className='images'>
                <img src={new3} alt="no image" className='img-section6' />
              </div>
              <div  className='name-edit'>
                Jenny Pink
              </div>
              <div className='subject'>
               HTML AND CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients