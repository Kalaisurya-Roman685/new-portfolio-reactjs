import React from 'react';
import { useHistory } from 'react-router-dom';
import p1 from '../../../assests/ecommerce/kalai23-removebg-preview.png';
import './styels/First.scss';
function FristWelcome() {

    const history = useHistory();
    return (
        <div className='main-ecommerce'>
            <img src={p1} className="img-fluid persons" />
            <div className='et'>
                <h5 className='et1'>E-commerce? E-commerce is the buying and selling of good or services via the internet, and the transfer of money and data to complete the sales. It's also known as electronic commerce or internet commerce.</h5>
            </div>
            <div className='btns'>
                <button className='nexts' onClick={() => history.push("/welcomesecond")}>Next...</button>
            </div>
        </div>
    )
}

export default FristWelcome