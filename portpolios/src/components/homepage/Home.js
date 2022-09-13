

import sm1 from "../../assests/sm1.png";
import sm2 from "../../assests/sm2.png";
import sm3 from "../../assests/sm3.png";
import sm4 from "../../assests/sm4.png";
import sm5 from '../../assests/sm5.png';

import { Link } from "react-scroll";
import profile from "../../assests/profile.png";
import kalai from '../../assests/kalai.png';
import experiencet from "../../assests/services.png";
import skillst from "../../assests/settings -kalai.png";
import aboutst from "../../assests/abouts.png";
// import educationt from "../../assests/";

import activet from "../../assests/activities.png";

import React from "react";
import "./styles/Home.scss";

import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from 'typewriter-effect';
import Mobilesection1 from "./components/mobilesection1/Mobilesection1";
import resume from '../../assests/kalairesume.pdf';
function Home({ color }) {
  const history = useHistory();

  const ContactTest = () => toast(`ContactMe:8778377119 😁..🙃..😉`);
  const notification = () => toast("Resume Dowload Successfully...😁!");
  return (
    <>
      <div className="home-section d-none d-lg-block">
        <div className="inside-section1">
          <div className="left-section1">
            <ToastContainer />
            <h1 className="kalainame" style={{ color: color }}>Hy! I Am <br />

              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;kalaisurya
            </h1>
            <div className='typesection mb-2 mt-3'>
              <Typewriter
                options={{
                  strings: ['React Developer 😀', "NextJs Developer 😃", "Javascript 😄", "React Native 😁", "UI and UX 😄"],
                  autoStart: true,
                  loop: true,

                }}
              />
            </div>

            <div>
              <p className='build mt-4 mb-4'> A  Building Applications with Front End Developer Operations.</p>
            </div>
            <div className='socialicons mt-5'>
              <span ><a href="https://www.facebook.com/">
                <ion-icon name="logo-facebook" style={{ color: "orangered" }}></ion-icon></a></span>
              <span><ion-icon name="logo-google"></ion-icon></span>
              <span><ion-icon name="logo-instagram"></ion-icon></span>
              <span><ion-icon name="logo-linkedin"></ion-icon></span>
              <span><ion-icon name="logo-twitter"></ion-icon></span>
            </div>
            <div className='butns'>
              <button className='gets' onClick={ContactTest}>Contact Me</button>
              <button
                className="gets"
              >
                <a
                  href={resume}
                  download="kalaiportfolio"
                  onClick={notification}
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
          <div className="right-section1">
            <div className="purush">
              <img src={kalai} className="purushed" />
            </div>
            <div className="profile">
              <Link to="work">
                <img src={experiencet} className="profiles" />
              </Link>
            </div>
            <div className="settings-kalai">
              <Link to="active">
                <img
                  src={activet}
                  alt="no"
                  className="settings-kalais"
                />
              </Link>
            </div>
            <div className="about">
              <Link to="about">
                <img
                  src={aboutst}
                  to="about"
                  alt="no"
                  className="abouts-kalai"
                />
              </Link>
            </div>
            <div className="chats">
              <Link to="skill">
                <img
                  src={skillst}
                  alt="no"
                  className="chats-kalai"
                />
              </Link>
            </div>
            <div className="developers">
              <Link to="education">
                <img
                  src={profile}
                  alt="no"
                  className="developers-kalai"
                />
              </Link>
            </div>


            <div className="smile4">
              <img src={sm4} className="smiles3" />
            </div>

            <div>
              <i class="fa-solid fa-star stars1"></i>
            </div>
            <div>
              <i class="fa-solid fa-star stars2"></i>
            </div>
            <div>
              <i class="fa-solid fa-star stars3"></i>
            </div>


          </div>
        </div>
      </div>



      <div className="d-block d-lg-block ">
        <Mobilesection1 />
      </div>

    </>
  );
}

export default Home;
