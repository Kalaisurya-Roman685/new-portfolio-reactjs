import React from 'react'
import './styles/MobileProfile.scss';
import kalai from '../../assests/whatsappkalai.jpeg';
import { useHistory } from 'react-router-dom';
function MobileProfileSection({ dark, setdark }) {

    const history = useHistory();
    return (
        <div className='mobile-profile'>

            <div className='mobile-profile-inside'>
                <div className='mt-4'>
                    <img src={kalai} className="kalai-image-profile" />
                    <div className='doots'>

                    </div>
                </div>
                <div className='dep mt-3' >
                    <h1 className='re'>Reactjs Developer</h1>
                    <span className='mt-1'>(2 year's of Experience)</span>
                </div>
                <div className='lo mt-3'>
                    <span className='lor'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                    </span>
                </div>
                <div className='followe-mobile mt-4'>
                    <div className='flo'>
                        <h4 className='counts'>20</h4>
                        Following
                    </div>
                    <div className='flow'>
                        <h4 className='counts'>20</h4>
                        Followers
                    </div>
                </div>

                <div className='mobile-box1 mt-4'>
                    <div className='left-mobile-box1' onClick={() => history.push("/mobilescreenone")}>
                        <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000" className='img-fluid e-commercess' />
                        <h6 className='mt-1 mb-2'>E-Commerce</h6>
                    </div>
                    <div>
                        box2
                    </div>
                </div>

            </div>

            {/* <button onClick={() => setdark(!dark)}>{dark ? <div>dark mode</div> : <div>light mode</div>}</button> */}



        </div>
    )
}

export default MobileProfileSection
