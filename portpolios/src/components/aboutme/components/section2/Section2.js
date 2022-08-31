import React from 'react'
import './styles/Section2.scss';
import data from '../../../../assests/103.png';


function Section2() {
    return (
        <div className='mca-section2'>
            <div className='inside-mca-section2'>
                <div className='left-mca-section2'>


                    <div className='our'>
                        BCA (Bachelors of Computer Applications)
                    </div>
                    <div className='mt-4'>
                        <h5>Sri Vidya Mandir Atrs and Science College</h5>
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
                <div className='right-mca-section2'>

                    <img src={data} className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Section2