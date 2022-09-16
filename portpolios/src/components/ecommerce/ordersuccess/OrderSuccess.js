import React from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/Ordersuccess.scss";
function OrderSuccess(props) {
    const history = useHistory();
    const movelogin = () => {
        history.push("/login");
        toast("Move To Login Page...");
    };

    return (
        <>
            <div className="odrer-success">
                <ToastContainer />
                <h1 className="text-center mt-5 mb-5 succs">Order SuccessFully...</h1>
                <div className="thnks mb-2 ">
                    Thanks you to Viste My Website😎..😜..😍
                </div>
                <div className="img-order-split mt-4 mb-4">
                    <div className="left-success">
                        <img src="https://i.gifer.com/Q0t0.gif" className="gifyts" />
                    </div>

                </div>
                <div className="success-btn mt-4 mb-5">
                    <button onClick={() => movelogin()} className="backtologin">
                        Back to Login
                    </button>
                </div>
            </div>

        </>
    );
}

export default OrderSuccess;
