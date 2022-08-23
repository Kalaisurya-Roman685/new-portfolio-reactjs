import React from "react";




import { Link } from "react-scroll";

import kalai from '../../../../assests/kalai.png';
import experiencet from "../../../../assests/services.png";
import skillst from "../../../../assests/settings -kalai.png";
import aboutst from "../../../../assests/abouts.png";


import activet from "../../../../assests/activities.png";
import "./styles/Mobilesection1.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from 'typewriter-effect';

import kalais from '../../../../assests/whatsappkalai.jpeg';

function Mobilesection1({ color, dark, setdark }) {
    const ContactList = () => {
        toast("ContactMe:8778377119");
    };
    return (
        <div className="section1mobile d-block d-lg-none" id="homes">

            <div className="off-can-navbar">
                <div className="names">
                    <span style={{ display: "flex", flexDirection: "row", gap: "10px" }}><img src={kalais} style={{ width: "40px", height: "40px", borderRadius: "50%", }} />kalai</span>
                </div>
            </div>
            <div className="inside-mobile">
                <ToastContainer />
                <div className="left-mobile">

                    <div className="image1 mt-5 mb-3">

                    </div>
                    <h1 className="hy mb-1">
                        Hy! <span style={{ color: color }}>I Am</span>
                    </h1>
                    <h1 className="kalai mt-4 mb-3">
                        Kalai<span style={{ color: color }}>surya</span>
                    </h1>
                    <div className='typesection mb-4 mt-3'>
                        <Typewriter
                            options={{
                                strings: ['React Developer 😀', "NextJs Developer 😃", "Javascript 😄", "React Native 😁", "UI and UX 😄"],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </div>
                    <span
                        className="loream mt-5"
                        style={{
                            paddingRight: "15px",
                            paddingLeft: "10px",
                        }}
                    >
                        To obtain a position with a progressive{" "}
                        <span style={{ color: color }}>web development</span>
                        company with a{" "}
                        <span style={{ color: color }}>strong focus</span> on
                        creativity and{" "}
                        <span style={{ color: color }}>problem solving.</span>{" "}
                        To find a position that is{" "}
                        <span style={{ color: color }}>challenging.</span>
                    </span>
                    <div className='socialicons mt-4'>
                        <span><ion-icon name="logo-facebook"></ion-icon></span>
                        <span><ion-icon name="logo-google"></ion-icon></span>
                        <span><ion-icon name="logo-instagram"></ion-icon></span>
                        <span><ion-icon name="logo-linkedin"></ion-icon></span>
                        <span><ion-icon name="logo-twitter"></ion-icon></span>
                    </div>

                    <button
                        className="hire mt-4 mb-3"
                        onClick={() => ContactList()}
                    >
                        Contact{" "}
                        <span style={{ color: color }} className="ms-2">
                            Me
                        </span>
                    </button>
                </div>
                <div className="right-mobile mt-5">

                    <div className="circles">
                        {/* <img src={purush} className="circles" /> */}
                        {/* <img src={kalai} className="kalai-purush" /> */}
                        {/* 
                        <div className="skills-kalais">
                            <Link to="skill">
                                <img
                                    src={skillst}
                                    alt="no"
                                    className="skills-kalais"
                                />
                            </Link>
                        </div>

                        <div className="experience-kalais">
                            <Link to="work">
                                <img
                                    src={experiencet}
                                    alt="no"
                                    className="experience-kalais"
                                />
                            </Link>
                        </div>
                        <div className="abouts-kalais">
                            <Link to="about">
                                <img
                                    src={aboutst}
                                    alt="no"
                                    className="abouts-kalais"
                                />
                            </Link>
                        </div>

                        <div className="actives-kalais">
                            <Link to="active">
                                <img src={activet} className="actives-kalais" />
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobilesection1;
