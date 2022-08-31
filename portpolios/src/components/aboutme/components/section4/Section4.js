import React from 'react'

import data from '../../../../assests/105.png';


function Section4() {
    return (
        <div className='mca-section2'>
            <div className='inside-mca-section2'>
                <div className='left-mca-section2'>

                    <div className='inside-section2-left'>
                        <div className='our'>
                            SSLC (Secondary School Leaving Certificate)
                        </div>
                        <div className='mt-4'>
                            <h5>Government Higher Secondary School</h5>
                        </div>
                        <div className='complet'>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                            </span>
                        </div>
                        <div className='butns'>
                            <button className='gets mb-5'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='right-mca-section2'>

                    <img src={data} className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Section4