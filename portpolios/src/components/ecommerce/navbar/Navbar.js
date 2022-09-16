import React from "react";
import { useCart } from "react-use-cart";
import "./navbar.scss";

import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebasefiles";

function Navbar(props) {
    const usehistory = useHistory();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal,
    } = useCart();


    return (
        <div className="navss">
            <h2 className="orders-details">Orders</h2>
            <ToastContainer />
            <div className="right_box" onClick={() => usehistory.push("/cartde")}>
                <p onClick={() => usehistory.push("/cartde")}>
                    <i class="fa-solid fa-cart-shopping-fast"></i>
                    <span className="numbers">{totalItems}</span>
                </p>
            </div>
            <div>
                <p>{props.names}</p>
            </div>
            <div>
                <button className="logouts"
                    onClick={() => {
                        toast("Logout SuccessFully");
                        auth.signOut();
                        setTimeout(() => {
                            usehistory.push("/login");
                        }, 2000);
                        let GetLocal =
                            localStorage.removeItem("token new users");

                        console.log("received logout", JSON.parse(GetLocal));
                    }}
                >LogOut</button>
            </div>
        </div>
    );
}

export default Navbar;
