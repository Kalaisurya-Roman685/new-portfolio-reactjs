
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ProductApi } from "./api/Get";

import "./styles/Offers.scss";
function Offerdata(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };

    const [stores, SetStores] = useState([]);


    useEffect(() => {
        getsData();
    }, [stores])

    const getsData = () => {
        ProductApi().then((res) => {
            console.log('====================================');
            console.log(res.data);
            SetStores(res.data.products.slice(0, 10))
            console.log('====================================');
        }).catch((err) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        })
    }
    return (
        <div className="main-sliders">
            <Slider {...settings}>
                {stores.map((items, index) => {
                    return (
                        <div className="main-card-slider col-lg-6 col-xl-4">
                            <div className="cardt">
                                <div className="split_box">
                                    <div className="left-box1">
                                        <div className="empty-box">
                                            <img
                                                src={items.thumbnail}
                                                alt={items.title}
                                                className="mb_sizes"
                                            />
                                        </div>
                                    </div>
                                    <div className="right-box">
                                        <p
                                            className="text-center"
                                            style={{
                                                fontSize: "18px",
                                                color: "#FFF500",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {items.title}
                                        </p>
                                        <p
                                            className="text-center"
                                            style={{
                                                color: "white",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {items.description}
                                        </p>
                                        <p style={{textAlign:"center"}}>Price: ${items.price}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Offerdata;
