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
        <div className="calls col-lg-5 col-xl-5 col-xxl-4 mx-0 mb-5">
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
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">$ {props.price}</p>
                   
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
