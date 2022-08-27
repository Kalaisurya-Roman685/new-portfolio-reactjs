import React, { useState, useEffect } from "react";
import "./styles/Items.scss";
import { useCart } from "react-use-cart";
import Heart from "react-animated-heart";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemCart(props) {
    const { addItem } = useCart();
    const [isClick, setClick] = useState(false);
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
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="calls col-lg-5 col-xl-5 col-xxl-4 col-xs-6 col-md-6 col-sm-6 mx-0 mb-5">
            <div
                class="cardss  h-100 "

            >
                <div className="heart">
                    <Heart
                        isClick={isClick}
                        onClick={() => setClick(!isClick)}
                        className="change-heart"
                    />
                </div>

                <div className="box">
                    <img src={props.image} class="card-img-top" alt="..." />
                </div>
                <div className="mains3 mt-3">
                    <h6 className="mains1 mb-2">{props.title}</h6>
                    <p className="main1">$ {props.price}</p>

                    <button
                        className="btns"
                        onClick={() => {
                            toast("Add Product Cart Success");
                            toast({ items });
                            addItem(props.item);
                        }}
                    >
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
