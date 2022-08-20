import React from 'react'
import './styles/Section2.scss';
import data from '../../../../assests/video animation/2.gif';


function Section2() {
    return (
        <div className='main-section2'>
            <div className='inside-section2'>
                <div className='left-section2'>

                    <div className='inside-section2-left'>
                        <div className='our'>
                            BCA (Bachelors of Computer Applications)
                        </div>
                        <div className='mt-4'>
                            <h3>Sri Vidya Mandir Atrs and Science College</h3>
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

export default Section2