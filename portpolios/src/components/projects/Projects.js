import React from 'react'
import './styles/Projectjs.scss';
import Slider from "react-slick";
import carousel from './carouseldatas/Carousedata';
import { Link } from 'react-router-dom';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slide-pre`}
            style={{}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slide-next`}
            style={{}}
            onClick={onClick}
        />
    );
}


function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
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
                    initialSlide: 1,
                    dots:true
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
    return (
        <div className='main-section5'>
            <div className='inside-section5'>
                <div className='top-section5'>
                    <div className='recent'>
                        Projects
                    </div>
                    <div className='create'>
                        Completely Create Client-focused growth.
                    </div>
                </div>
                <div className='bottom-section5'>
                    <div className='inside-section5-slide'>
                        <Slider {...settings}>
                            {carousel.carouseData.map((item, index) => {
                                return (
                                    <div className='reds '>
                                        <div className='redss'>
                                            <div>
                                                <img src={item.Image} alt="no image" className='img-section5' />
                                            </div>
                                            <div className='coursename'>
                                                {item.coursename}
                                            </div>
                                            <div className='mt-2 mb-2'>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className='description'>
                                                {item.description}
                                            </div>
                                            <div className='btns'>
                                                <a href={item.link}>
                                                    <button className='buttons'>{item.button}</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects