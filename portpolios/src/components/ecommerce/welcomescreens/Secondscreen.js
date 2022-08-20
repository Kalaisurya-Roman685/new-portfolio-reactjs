import React from 'react';
import { useHistory } from 'react-router-dom';
import p1 from '../../../assests/ecommerce/kalai24-removebg-preview.png'

function Secondscreen() {

  const history = useHistory();
  return (
    <div className='main-ecommerce'>
      <img src={p1} className="img-fluid persons" />
      <div className='et'>
        <h5 className='et1'>E-commerce? E-commerce is the buying and selling of good or services via the internet, and the transfer of money and data to complete the sales. It's also known as electronic commerce or internet commerce.</h5>
      </div>
      <div className='btns'>
        <button className='nexts' onClick={() => history.push("/login")}>Get Start</button>
      </div>
    </div>
  )
}

export default Secondscreen