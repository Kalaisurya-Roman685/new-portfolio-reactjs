import React from 'react'
import './styles/Section4.scss';
import data from '../../../../assests/video animation/4.gif';


function Section4() {
    return (
        <div className='main-section2'>
            <div className='inside-section2'>
                <div className='left-section2'>

                    <div className='inside-section2-left'>
                        <div className='our'>
                            SSLC (Secondary School Leaving Certificate)
                        </div>
                        <div className='mt-4'>
                            <h3>Government Higher Secondary School</h3>
                        </div>
                        <div className='complet'>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                            </span>
                        </div>
                        <div className='butns'>
                            <button className='gets'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='right-section2'>

                    <img src={data} />
                </div>
            </div>
        </div>
    )
}

export default Section4