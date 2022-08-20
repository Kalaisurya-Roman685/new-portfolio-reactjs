import React, { useEffect, useState } from 'react'
import './styles/Slidebar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Section1 from '../../mobilecomponents/section1/Section1';
import Section2 from '../../mobilecomponents/section2/Section2';
import kalaiimage from '../../assests/whatsappkalai.jpeg';


const gets = () => {
    let data = localStorage.getItem("amma");

    if (data) {
        return JSON.parse(data);

    }
    else {
        return [];
    }
}
function SlideBar({ dark, setdark, children, }) {

    const [toggles, SetToggles] = useState(false);

    const [toggles1, SetToggles1] = useState(false);

    const [count, SetCount] = useState([]);

    const tests = () => {
        SetToggles(!toggles);
        SetToggles1(!toggles1);
    }

    const [datas, SetDatas] = useState(gets());

    const history = useHistory();



    useEffect(() => {
        datas.map((items, index) => {
            return SetCount(index + 1);
        })
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
        <div className='main-slidebar'>
            <div className='inside-slide'>
                <div className='bottom-slide'>
                    <div className='slides d-none d-lg-block'>
                        <motion.div animate={{ width: toggles ? "200px" : "45px" }} className="slidebar">
                            <div className='bars'>
                                {toggles && <div onClick={() => history.push("/profile")}>
                                    <span className='kalai'><img src={kalaiimage} className="kalai-image" /></span>
                                </div>}
                                <span onClick={tests}><i class="fa-solid fa-bars"></i></span>
                            </div>
                            {toggles && <div className='followers'>
                                <div className='first-follow'>
                                    <h4 className='count'>20</h4>
                                    <h5 className='flo'>Following</h5>
                                </div>
                                <div className='second-follow'>
                                    <div onClick={() => history.push("/addsomething")}>
                                        <h4 className='count'>{count.length == 0 ? <div>0</div> : <div>{count}</div>}</h4>
                                        <h5 className='flo'>Followers</h5>
                                    </div>
                                </div>
                            </div>}
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
                    </div>


                    <motion.div className='childes d-none d-lg-block ' animate={{ width: toggles1 ? "100%" : "100%" }}>
                        <motion.main>
                            {children}
                        </motion.main>
                    </motion.div>
                    <div className='d-block d-lg-none'>
                        <Section1 />
                        <Section2 />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SlideBar