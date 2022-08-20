import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function CartHome() {

    const history = useHistory();

    const [logouts, SetLogouts] = useState(false);

    useEffect(() => {
       
    }, [])
    return (
        <div>CartHome</div>
    )
}

export default CartHome