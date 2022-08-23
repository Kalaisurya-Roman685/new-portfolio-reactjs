import React from 'react'
import './styles/Mobilesection11.scss';

import { DataProviders } from '../MobilsewDataProviders/MobildeDataProviders';


function MobileSection1() {

    
    return (
        <div className='mobile-section11'>
            <div className='inside-mobile-section row justify-content-center'>
                {DataProviders.skillData.map((items, index) => {
                    return (
                        <div className='cardss1 col-xs-4 col-sm-4 col-md-8 mt-3 mb-4'>
                            <img src={items.image} alt={items.name} className="img-fluid img-item" />
                            <h4 className='mt-2'>{items.name}</h4>
                            <div className='mt-2'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <span className='mt-2'>
                                {items.description}
                            </span>
                            <button className='read-mores mt-2 mb-2'>{items.button}</button>


                            <div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileSection1
