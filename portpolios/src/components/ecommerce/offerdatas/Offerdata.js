
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ProductApi } from "./api/Get";

import "./styles/Offers.scss";
function Offerdata(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },

        ]
    };

    const [stores, SetStores] = useState([]);


    useEffect(() => {
        getsData();
    }, [stores])

    const getsData = () => {
        ProductApi().then((res) => {
            console.log('====================================');
            console.log(res.data);
            SetStores(res.data.products.slice(0, 20))
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

                                    <div className="mt-2">
                                        <img
                                            src={items.thumbnail}
                                            alt={items.title}
                                            className="mb_sizes"
                                        />
                                    </div>

                                    <div className="list-carousels">
                                        <h6 className="hekalai"> {items.title}</h6>
                                        <span> {items.description}</span>
                                        Price: $ {items.price}
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
