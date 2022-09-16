import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ItemCart from '../itemscart/ItemCart';
import Navbar from '../navbar/Navbar';

import Offerdata from '../offerdatas/Offerdata';
import { ProductApi } from './api/Get';
import './CartHomepage.scss';

function CartHome() {

    const history = useHistory();

    const [serach, Setserach] = useState("");

    const name = localStorage.getItem("username");

    const [logouts, SetLogouts] = useState(false);
    const [stores, SetStores] = useState([]);

    useEffect(() => {
        getsData();
    }, [])

    const getsData = () => {
        ProductApi().then((res) => {
            SetStores(res.data, "no data")
        }).catch((err) => {
            console.log(err);

        })
    }
    return (
        <div className="main-carthome">


            <Navbar />

            <section className="py-4 container">
                <div className="inputs">
                    <input
                        placeholder="Serach"
                        type="text"
                        value={serach}
                        onChange={(e) => Setserach(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <Offerdata />
                </div>
                <div className='card-scroll-section'>
                    <div className="row justify-content-center">

                        {stores.length == 0 && <div>No Data Found...</div>}
                        {stores
                            .filter((itemsed) =>
                                itemsed.title.toLowerCase().includes(serach)
                            )
                            .map((itemst, index) => {
                                return (
                                    <ItemCart
                                        id={itemst.id}
                                        title={itemst.title}
                                        price={itemst.price}
                                        discount={itemst.discount}
                                        image={itemst.images[2]}
                                        item={itemst}
                                        key={index}
                                    />
                                );
                            })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CartHome