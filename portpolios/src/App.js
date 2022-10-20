import "./App.scss";
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/homepage/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Clients from "./components/clients/Clients";
import AdduserMain from "./components/addusersomething/AdduserMain";
import AddUsers from "./components/addusersomething/AddUsers";
import ProfileSettings from "./components/profilesettings/ProfileSettings";
import FristWelcome from "./components/ecommerce/welcomescreens/FristWelcome";
import Secondscreen from "./components/ecommerce/welcomescreens/Secondscreen";
import Login from "./components/ecommerce/login/Login";
import CartHome from "./components/ecommerce/cartpage/CartHome";
import Signup from "./components/ecommerce/signup/Signup";
import Cart from "./components/ecommerce/cart/Cart";
import Address from "./components/ecommerce/addresspage/Address";
import OrderDEtails from "./components/ecommerce/OrderDEeatils/OrderDEtails";
import OrderSuccess from "./components/ecommerce/ordersuccess/OrderSuccess";
import ForgetPassword from "./components/ecommerce/forgetpassword/ForgetPassword";

import HomeMobilesection1 from "./mobilecomponents/section1/HomeMobilesection1";
import MobileProfileSection from "./mobilecomponents/mobileprofilesewction/MobileProfileSection";
import MobileScreenOne from "./mobilecomponents/mobilewelcomescreen/MobileScreenOne";
import BottomNavbar from "./mobilecomponents/bottomnavbar/BottomNavbar";
import Followers from "./components/followerslist/Followers";
import AddressPageList from "./components/ecommerce/addresspage/AddressPageList";
import PageNotFound from "./components/404page/PageNotFound";
import axios from "axios";


function App() {
    const [cartditems, SetProduct] = useState([]);

    const [ip, setIp] = useState([]);
    const [test, setTest] = useState([]);
    const [data, setData] = useState([]);
    const browsername = [];
    const { detect } = require('detect-browser');
    const browser = detect();
    browsername.push(browser);
    console.log(browsername);
    useEffect(() => {
        fetch('https://api.ipify.org').then(response => response.text()).then(data => {
            const userIP = data;
            console.log(userIP);
            setIp(data);
        });
        const getData = async () => {
            const res = await axios.get('https://geolocation-db.com/json/')
            console.log(res.data);
            setTest(res.data.country_name)
        }
        getData();
    }, [])
    const localstoarges = (e) => {
        console.log(e);
        if (e == "box1") {
            let t = e + 1;
            setData([{ ...data, t }])
            localStorage.setItem("box1", data);
        }
    }







    const HandleAdd = (product) => {
        console.log(product);
        const productaddcart = cartditems.find((item) => item.id === product.id);

        if (productaddcart) {
            SetProduct(cartditems.map((item) => item.id === product.id ? { ...productaddcart, quantity: productaddcart.quantity + 1 } : item))
        }
        else {
            SetProduct([...cartditems, { ...product, quantity: 1 }])
        }

    }
    const handleRemoves = (product) => {
        const productaddcart = cartditems.find((item) => item.id === product.id);

        if (productaddcart.quantity === 1) {
            SetProduct(cartditems.filter((item) => item.id !== product.id))
        }
        else {
            SetProduct(cartditems.map((item) => item.id === product.id ? { ...productaddcart, quantity: productaddcart.quantity - 1 } : item))
        }

    }

    const [color, SetColors1] = useState([]);

    const setthemmes = () => {
        return JSON.parse(localStorage.getItem("themes"));
    };
    const [dark, SetDark] = useState(setthemmes());
    useEffect(() => {
        localStorage.setItem("themes", JSON.stringify(dark));
    }, [dark]);

    const [colors, SetColors] = useState([
        {
            id: 1,
            color: "red"
        },
        {
            id: 2,
            color: "blue"
        },
        {
            id: 3,
            color: "orange"
        },
        {
            id: 4,
            color: "green"
        },
        {
            id: 5,
            color: "cyan"
        }
    ])


    const changecolor = (id) => {
        colors.forEach((e) => {
            if (e.id === id) {
                SetColors1(e);
            }
        })
    }

    var same = color.color;

    return (
        <div className={dark ? "theme--dark" : "theme--light"}>
            <div className="port-polio">
                {/* <h1>Ip Address  :  {ip}</h1><br />
                <h1>Location:{test}</h1><br /><br />
                <div>
                    {browsername.map((item, index) => {
                        return (
                            <div>
                                <h1>Browser Name:{item.name}</h1><br />
                                <h1>Window Os:{item.os}</h1><br />
                                <h1>{item.type}</h1><br />
                                <h1>{item.version}</h1>
                            </div>
                        )
                    })}
                </div> */}


                <Router >
                    <Switch>
                        <Sidebar dark={dark} setdark={SetDark} color={same} >

                            <Route exact path="/" render={() => {
                                return <Home color={same} />
                            }} />
                            <Route path="/aboutme" component={Aboutme} />
                            <Route path="/skills" component={Skills} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/clients" component={Clients} />
                            <Route path="/addsomething" component={AdduserMain} />
                            <Route path="/adduser" component={AddUsers} />
                            <Route path="/profile" component={ProfileSettings} />
                            <Route path="/welcomefirst" component={FristWelcome} />
                            <Route path="/login" component={Login} />
                            <Route path="/welcomesecond" component={Secondscreen} />
                            <Route path="/carthome" component={CartHome} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/cartde" component={Cart} />
                            <Route path="/address" component={Address} />
                            <Route path="/orderdetails" component={OrderDEtails} />
                            <Route path="/success" component={OrderSuccess} />
                            <Route path="/forgetpassword" component={ForgetPassword} />
                            <Route path="/followers" component={Followers} />
                            {/* <Route path="/conformaddress" component={AddUsers} /> */}
                            <Route path="/conformaddress" component={AddressPageList} />
                            <Route path="/*" component={PageNotFound} />
                        </Sidebar>

                        <Route path="/*" component={PageNotFound} />
                        {/* <Route path="/mobilescreenone" component={MobileScreenOne} /> */}

                    </Switch>
                </Router >
            </div >
        </div >
    );
}

export default App;

// import "./App.scss";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/Homepage/Home";
// import CartHomepage from "./components/carthomepage/CartHomepage";
// import Cart from "./components/cart/Cart";
// import Address from "./components/addresspage/Address";

// import Login from "./components/login/Login";
// import Signup from "./components/signups/Signup";
// import ForgetPassword from "./components/forgetpassword/ForgetPassword";
// import ResetPassword from "./components/resetpassword/ResetPassword";
// import Navbar from "./components/navbar/Navbar";
// import AddressPageList from "./components/addresspage/AddressPageList";
// import { useState } from "react";
// import { render } from '@testing-library/react';
// import Ecommerce from "./components/ecommers/compoents/Ecommerce";

// function App() {
//     const [cartitems, setCartItems] = useState([]);

//     const handleclickadd = (product) => {
//         // alert("wwe");
//         console.log(product, "tr");
//         const ProductExits = cartitems.find((items) => items.id === product.id);
//         console.log("received is from ", ProductExits);
//         if (ProductExits) {
//             setCartItems(
//                 cartitems.map((itemsdata) =>
//                     itemsdata.id === product.id
//                         ? {
//                               ...ProductExits,
//                               quantity: ProductExits.quantity + 1,
//                           }
//                         : itemsdata
//                 )
//             );
//         } else {
//             setCartItems([...cartitems, { ...product, quantity: 1 }]);
//         }
//     };
//     const handleClickAddItems = () => {};
//     const handleClickRemove = (product) => {
//         const ProductExits = cartitems.find((items) => items.id === product.id);
//         if (ProductExits.quantity === 1) {
//             setCartItems(cartitems.filter((item) => item.id !== product.id));
//         } else {
//             setCartItems(
//                 cartitems.map((item) =>
//                     item.id === product.id
//                         ? {
//                               ...ProductExits,
//                               quantity: ProductExits.quantity - 1,
//                           }
//                         : item
//                 )
//             );
//         }
//     };
//     return (
//         <div className="App">
//             <Router>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/carthome/:name" component={CartHomepage}>
//                         <CartHomepage handleclickadd={handleclickadd} />
//                     </Route>
//                     <Route path="/cart-provide" component={Cart}>
//                         <Cart
//                             cartitems={cartitems}
//                             handleClickAddItems={handleclickadd}
//                             handleClickRemove={handleClickRemove}
//                         />
//                     </Route>
//                     <Route path="/address" component={Address} />
//                     <Route path="/login" component={Login} />
//                     <Route path="/signup" component={Signup} />
//                     <Route path="/forgetpassword" component={ForgetPassword} />
//                     <Route path="/resetpassword" component={ResetPassword} />
//                     <Route path="/addresslist" component={AddressPageList} />
//                 </Switch>
//             </Router>
//         </div>
//     );
// }

// export default App;
