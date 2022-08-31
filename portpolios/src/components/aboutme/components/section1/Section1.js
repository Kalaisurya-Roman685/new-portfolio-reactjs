
import React from 'react'
import './styles/Section1.scss';
import data from '../../../../assests/101.png'

function Section1() {

    return (
        <div className='mca-section'>
            <div className='inside-mca-section'>
                <div className='left-mca-section4'>
                    <div>
                        <img src={data} className="img-fluid" />
                    </div>

                </div>
                <div className='right-mca-section4'>
                    <div className='inside-text-section4'>
                        <div className='our' style={{color:"orangered"}}>
                            MCA (Master of Computer Application)
                        </div>
                        <div className='mt-4'>
                            <h5>Karpagam Academy Of Higher Education</h5>
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
            </div>
        </div>
    )
}

export default Section1