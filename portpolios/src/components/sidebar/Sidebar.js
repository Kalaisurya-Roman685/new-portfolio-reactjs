import React, { useEffect, useState } from 'react'
import './styles/Slidebar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useHistory } from 'react-router-dom';

import kalaiimage from '../../assests/whatsappkalai.jpeg';
import BottomNavbar from '../../mobilecomponents/bottomnavbar/BottomNavbar';


import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebasefiles';


function SlideBar({ dark, setdark, children, }) {

    const [toggles, SetToggles] = useState(false);

    const [toggles1, SetToggles1] = useState(false);

    const [count, SetCount] = useState([]);

    const tests = () => {
        SetToggles(!toggles);
        SetToggles1(!toggles1);
    }


    const [datas, SetDataGet] = useState([]);

    const history = useHistory();

    const usercollectionRef = collection(db, "users");



    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usercollectionRef);
            SetDataGet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();
        var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
        navItems.forEach(function (e, i) {
            e.addEventListener("click", function (e) {
                navItems.forEach(function (e2, i2) {
                    e2.classList.remove("mobile-bottom-nav__item--active");
                })
                this.classList.add("mobile-bottom-nav__item--active");
            });
        });

    }, [])



    const routes = [
        {
            name: "/",
            names: "home",
            icons: <i class="fa-solid fa-house-user"></i>

        },
        {
            name: "/aboutme",
            names: "AboutMe",
            icons: <i class="fa-solid fa-address-card"></i>
        },
        {
            name: "/skills",
            names: "Skills",
            icons: <i class="fa-solid fa-graduation-cap"></i>


        },

        {
            name: "/projects",
            names: "Projects",
            icons: <i class="fa-solid fa-file-signature"></i>
        },
        {
            name: "/clients",
            names: "Clients",
            icons: <i class="fa-solid fa-users"></i>
        },
        {
            name: "/contact",
            names: "ContactUs",
            icons: <i class="fa-solid fa-phone-arrow-up-right"></i>

        },
        {
            name: "/addsomething",
            names: "AddSomething",
            icons: <i class="fa-solid fa-user-plus"></i>

        }

    ]

    return (
        <motion.div className='main-slidebar'>
            <motion.div className='inside-slide'>
                <motion.div className='bottom-slide'>
                    <motion.div className='slides d-none d-lg-block'>
                        <motion.div animate={{ width: toggles ? "200px" : "45px" }} className="slidebar">
                            <motion.div className='bars'>
                                {toggles && <motion.div onClick={() => history.push("/profile")}>
                                    <span className='kalai' style={{ cursor: "pointer" }}><img src={kalaiimage} className="kalai-image" /></span>
                                </motion.div>}
                                <span onClick={tests}><i class="fa-solid fa-bars"></i></span>
                            </motion.div>
                            {toggles && <motion.div className='followers'>
                                <motion.div className='first-follow'>
                                    <h4 className='count'>20</h4>
                                    <h5 className='flo'>Following</h5>
                                </motion.div>
                                <motion.div className='second-follow' style={{ cursor: "pointer" }}>
                                    <motion.div onClick={() => history.push("/followers")}>
                                        <h4 className='count'>{datas.length}</h4>
                                        <h5 className='flo'>Followers</h5>
                                    </motion.div>
                                </motion.div>
                            </motion.div>}
                            <section>
                                <motion.div className='flexs'>
                                    {routes.map((items) => (
                                        <motion.div className='navs'>

                                            <NavLink to={items.name} className="links" activeClassName='active'>

                                                <div>{items.icons}</div>

                                                <AnimatePresence>
                                                    {toggles && <motion.div>
                                                        {items.names}
                                                    </motion.div>}
                                                </AnimatePresence>
                                            </NavLink>


                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div>
                                    <motion.div className='d-flex flex-direction-row mt-5'>
                                        <div onClick={() => setdark(!dark)}>
                                            {dark ? <i class="fa-solid fa-moon-cloud fs-2 moons"></i> : <i class="fa-solid fa-moon-stars fs-1 moonss"></i>}
                                        </div>

                                        {toggles && <div className="dark-section">
                                            <div class="App App--Day" id="app" >
                                                <label for="switch" class="Switch">
                                                    <input id="switch" type="checkbox" class="Switch__CheckBox" onClick={() => setdark(!dark)} />
                                                    <span class={`${dark ? 'dark' : 'darks'}`}>Dark</span>
                                                    <div class="Switch__Slider">
                                                        <div class="Switch__SliderDot"></div>
                                                    </div>
                                                    <span className={`${dark ? 'lights' : 'light'}`}>Light</span>
                                                </label>
                                            </div>
                                        </div>}
                                    </motion.div>
                                </motion.div>
                            </section>
                        </motion.div>
                    </motion.div>


                    <motion.div className='childes d-none d-lg-block ' animate={{ width: toggles1 ? "100%" : "100%" }}>
                        <motion.main>
                            {children}
                        </motion.main>
                    </motion.div>
                    <motion.div className='d-block d-lg-none'>
                        <motion.div className='d-block d-lg-block '>

                            <motion.div className='main-sidebar-nav'>
                                <motion.div className='mobile-inside-section'>
                                    <motion.div className='sidebar-mobile'>
                                        <motion.main>
                                            {children}
                                        </motion.main>
                                    </motion.div>

                                    <motion.div className='side-bottom-section'>
                                        <motion.nav class="mobile-bottom-nav">
                                            <motion.div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
                                                <motion.div class="mobile-bottom-nav__item-content" onClick={() => history.push("/")}>
                                                    <i class="fa-solid fa-house-heart"></i>
                                                    Home

                                                </motion.div>
                                            </motion.div>
                                            <div class="mobile-bottom-nav__item">
                                                <div class="mobile-bottom-nav__item-content" onClick={() => history.push("/skills")}>
                                                    <i class="fa-solid fa-book-open-cover"></i>
                                                    Skill

                                                </div>
                                            </div>
                                            <motion.div class="mobile-bottom-nav__item">
                                                <motion.div class="mobile-bottom-nav__item-content" onClick={() => history.push("/addsomething")}>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    Adduser

                                                </motion.div>
                                            </motion.div>

                                            <motion.div class="mobile-bottom-nav__item" onClick={() => history.push("/projects")}>
                                                <motion.div class="mobile-bottom-nav__item-content">
                                                    <i class="fa-solid fa-book-bookmark"></i>
                                                    Projects
                                                </motion.div>
                                            </motion.div>

                                            <motion.div class="mobile-bottom-nav__item">
                                                <motion.div class="mobile-bottom-nav__item-content">
                                                    <span onClick={() => history.push("/profile")} >
                                                        <img src={kalaiimage} className="kalai-circle" />
                                                    </span>
                                                </motion.div>
                                            </motion.div>

                                        </motion.nav>

                                    </motion.div>
                                </motion.div>
                            </motion.div>


                        </motion.div>

                    </motion.div>
                </motion.div>


            </motion.div>
        </motion.div>
    )
}

export default SlideBar