import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

import "./styles/Carts.scss";
import { useHistory } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import Navbar from "../navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Cart(props) {
    const usehistory = useHistory();
    const [stateCart, SetCartStore] = useState([]);
    const [StateLocalGet, SetLocalGetData] = useState([]);
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
    // if (isEmpty) return <h1>no data</h1>;
    useEffect(() => {
        getCartItems();
        localStorage.setItem("cartdata", JSON.stringify(stateCart));
        console.log("carts", stateCart);
        getLocalStorageData();
    });
    const getCartItems = () => {
        SetCartStore(items);
    };

    const getLocalStorageData = () => {
        let GetLocal = localStorage.getItem("cartdata");
        SetLocalGetData(JSON.parse(GetLocal));
        console.log("received data LocalSorage", JSON.parse(GetLocal));
    };

    const moves = () => {
        toast("Wait Address Page View...🛣️")
        setTimeout(() => {
            usehistory.push("/address")
        }, 2000);
    }
    return (
        <>
            <div className="carts-main">
                <ToastContainer />
                <div className="mt-3 ms-3">
                    <button className="back" onClick={() => usehistory.goBack()}><ion-icon name="arrow-back-outline"></ion-icon></button>
                </div>
                <div>
                    <h1 className="text-center mt-5 mb-5 totals">
                        Toatl Items :<span style={{ color: "orangered" }}> {totalItems}</span>
                    </h1>
                </div>
                <div className="d-none d-lg-block">
                    {StateLocalGet.map((items, index) => {
                        return (
                            <div className="split-cardbody mb-5">
                                <div className="left-cart">
                                    <div className="image1">
                                        <img
                                            src={items.images[2]}
                                            class="card-img-tops"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <div className="left-split-bod">
                                    <div className="let-body">
                                        <p>

                                            <span
                                                className=""
                                                style={{
                                                    fontSize: "1.3rem",
                                                    color: "red",
                                                }}
                                            >
                                                {items.title}
                                            </span>
                                        </p>

                                        <p>
                                            {" "}
                                            <span style={{ fontSize: "1.5rem" }}>
                                                Price:
                                            </span>
                                            <span
                                                className="ms-2"
                                                style={{ fontSize: "1.4rem", fontWeight: "bold" }}
                                            >
                                                $ {items.price}
                                            </span>
                                        </p>
                                        <button
                                            className="orderss"
                                            onClick={() => {
                                                removeItem(items.id);
                                                toast("deleted Item Success");
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>

                                    <div className="right-body">
                                        <div className="buttons">
                                            <span
                                                className="bts"
                                                onClick={() =>
                                                    updateItemQuantity(
                                                        items.id,
                                                        items.quantity - 1
                                                    )
                                                }
                                            >
                                                -
                                            </span>

                                            <span
                                                className="bts"
                                                onClick={() =>
                                                    updateItemQuantity(
                                                        items.id,
                                                        items.quantity + 1
                                                    )
                                                }
                                            >
                                                +
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-center numbe-count mt-5 mb-3">
                                                {items.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="d-block d-lg-none">
                    {StateLocalGet.map((items, index) => {
                        return (
                            <div className="kalai-image-split mt-2 mb-4">
                                <div className="left-kalai-image">
                                    <img src={items.images[2]} alt={items.title} className="img-kalai-width" />
                                </div>
                                <div className="right-kalai-image">
                                    <div>
                                        <h6 className="kalai-title mt-2">{items.title}</h6>
                                    </div>
                                    <div className="prices">
                                        <span >Price: </span><span>${items.price}</span>
                                    </div>
                                    <div className="butts mt-2">
                                        <button
                                            className="add-users"
                                            onClick={() =>
                                                updateItemQuantity(
                                                    items.id,
                                                    items.quantity - 1
                                                )
                                            }>-</button>
                                        <span className="text-center numbe-count mt- mb-3">
                                            {items.quantity}
                                        </span>
                                        <button
                                            className="add-users"
                                            onClick={() =>
                                                updateItemQuantity(
                                                    items.id,
                                                    items.quantity + 1
                                                )
                                            }>+</button>
                                    </div>
                                    <div className="mt-2 mb-2">
                                        <button
                                            className="orderss"
                                            onClick={() => {
                                                removeItem(items.id);
                                                toast("deleted Item Success");
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="split-box-orders">
                    <div className="boxs">
                        <p>Toatal Amount : $ <span style={{ color: "red" }}>{cartTotal}</span></p>
                    </div>
                    <div className="orders mb-5">
                        <button
                            className="orderss"
                            onClick={moves}
                        >
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
