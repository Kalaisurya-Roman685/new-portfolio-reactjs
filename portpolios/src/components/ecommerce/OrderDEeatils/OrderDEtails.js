import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";
import "./styles/Orderdetails.scss";
function OrderDEtails(props) {
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
    const history = useHistory();
    const [local, setLocal] = useState([]);

    const [images, SetImages] = useState([]);
    const moves = () => {
        toast("Order Details SuccessFully!!...");
        history.push("/success");
    };
    useEffect(() => {
        const setd = localStorage.getItem("address");
        const images = localStorage.getItem("cartdata");
        setLocal(JSON.parse(setd));
        SetImages(JSON.parse(images));
    }, []);
    console.log(local);
    console.log(images);

    const success = () => {
        toast("Order Successfully!..");
        setTimeout(() => {
            history.push("/success");
        }, 1500);

    };

    return (
        <div className="order-scroll-mains">
            <div className="mt-4 mb-3 ms-4">
                <button className="back" onClick={() => history.goBack()}><ion-icon name="arrow-back-outline"></ion-icon></button>
            </div>
            <h1 className="text-center mt-3 mb-3 name-field"> Order details</h1>
            <ToastContainer />
            {local.length === 0 && <div>No Data Found!!</div>}
            {local && (
                <div className="mt-4 mb-3">
                    {local.map((items, index) => {
                        return (

                            <div className="order-details-main mt-3 mb-4">
                                <div className="left-orders">
                                    <span className="name-w">Name:<span className="name-field">{items.name}</span></span>
                                    <span className="name-w mt-2">Area: <span className="name-field">{items.area}</span></span>
                                    <span className="name-w mt-2">Street:<span className="name-field">{items.street}</span></span>

                                </div>
                                <div className="right-orders">
                                    <span className="name-w">City:<span className="name-field">{items.city}</span></span>
                                    <span className="name-w mt-2">PinCode:<span className="name-field"> {items.pincode}</span></span>
                                    <span className="name-w mt-2">Date: <span className="name-field">{items.dates}</span></span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {images.length === 0 && <div>No Data Found!!</div>}
            {images && (
                <div className="row justify-content-center">
                    {images.map((it, index) => {
                        return (
                            <>
                                <div key={index} className="order-box mb-4 col-md-5 col-sm-6 col-xs-4">
                                    <span>
                                        {" "}
                                        <img
                                            src={it.images[2]}
                                            alt={it.title}
                                            className="order-images"
                                        />
                                        <div className="text-center mt-4">
                                            <h5 className="name-w">{it.title}</h5>
                                            <p className="name-fields">Price:{it.price}</p>
                                            <p className="name-fields">Quantity:{it.quantity}</p>
                                        </div>
                                    </span>
                                    <p className="name-field">{it.itemtotal}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            )}
            <div className="boxs mb-5 mt-5 text-center">
                <h1><span className="name-fields">Toatal Amount : </span><span style={{ color: "orangered", fontWeight: "bold" }}>{cartTotal}</span></h1>
            </div>
            <div className="buttons-splits mt-5 mb-4">
                <button
                    className="backs"
                    onClick={() => history.push("/cartde")}
                >
                    Back
                </button>
                <button className="orders-success" onClick={() => success()}>
                    Order Success
                </button>
            </div>
        </div>
    );
}

export default OrderDEtails;
