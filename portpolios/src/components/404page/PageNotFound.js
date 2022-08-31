import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles/PageNotFound.scss';

import page from '../../assests/404page.png';

function PageNotFound() {

    const history = useHistory();
    return (
        
            <div className='pagenot d-none d-lg-block'>
                
                <img src={page} alt="no image here" className='img-fluid pages' />
                <button onClick={() => history.push("/")} className="backto">Back To Home</button>
                
            </div>

        
    )
}

export default PageNotFound
