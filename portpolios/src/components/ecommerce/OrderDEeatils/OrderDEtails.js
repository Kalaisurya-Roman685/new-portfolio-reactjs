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
        history.push("/success");
        toast("Order Successfully!..");
    };
    return (
        <div className="order-scroll-mains">
            <h1 className="text-center mt-3 mb-3"> Order details</h1>
            <ToastContainer />
            {local.length === 0 && <div>No Data Found!!</div>}
            {local && (
                <div className="mt-4 mb-3">
                    {local.map((items, index) => {
                        return (
                            <div key={index} className="address-lists">
                                <div className="split-address-orders">
                                    <div className="left-split-orders-list">
                                        <h1>
                                            Name:
                                            <span className="dt">
                                                {items.name}
                                            </span>
                                        </h1>
                                        <h1>
                                            Area:
                                            <span className="dt">
                                                {items.area}
                                            </span>
                                        </h1>
                                        <h1>
                                            Street:
                                            <span className="dt">
                                                {items.street}
                                            </span>
                                        </h1>
                                    </div>
                                    <div className="right-split-orders-list">
                                        <h1>
                                            Address:
                                            <span className="dt">
                                                {items.address}
                                            </span>
                                        </h1>
                                        <h1>
                                            City:
                                            <span className="dt">
                                                {items.city}
                                            </span>
                                        </h1>
                                        <h1>
                                            Pincode:
                                            <span className="dt">
                                                {items.pincode}
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {images.length === 0 && <div>No Data Found!!</div>}
            {images && (
                <div>
                    {images.map((it, index) => {
                        return (
                            <>
                                <div key={index} className="order-box mb-4">
                                    <span>
                                        {" "}
                                        <img
                                            src={it.thumbnail}
                                            alt={it.title}
                                            className="order-images"
                                        />
                                        <div className="text-center mt-4">
                                            <h1>Title:{it.title}</h1>
                                            <p>Price:{it.price}</p>
                                            <p>Quantity:{it.quantity}</p>
                                        </div>
                                    </span>
                                    <p>{it.itemtotal}</p>
                                </div>

                                {/* <button onClick={()=>removes()}>Remove</button> */}
                            </>
                        );
                    })}
                </div>
            )}
            <div className="boxs mb-5 mt-5 text-center">
                <h1>Toatal Amount:{cartTotal}</h1>
            </div>
            <div className="buttons-splits mt-5 mb-3">
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
