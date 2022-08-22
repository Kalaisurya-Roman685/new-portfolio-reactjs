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
            <div>
                <ToastContainer />
                <h1 className="text-center mt-3 mb-3">Order SuccessFully...</h1>
                <div className="img-order-split">
                    <div className="left-success">
                        <img src="https://i.gifer.com/Q0t0.gif" />
                    </div>
                    <div className="right-success">
                        <img src="https://c.tenor.com/w-boZxCBeu0AAAAj/career-great-employee.gif" />
                    </div>
                </div>
            </div>
            <div className="success-btn">
                <button onClick={() => movelogin()} className="backtologin">
                    Back to Login
                </button>
            </div>
        </>
    );
}

export default OrderSuccess;
