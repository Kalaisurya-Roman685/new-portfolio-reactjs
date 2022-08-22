import React, { useState } from "react";

import { useHistory } from "react-router-dom";



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import p2 from '../../../assests/ecommerce/kalia30-removebg-preview.png'
import { auth } from "../../../firebasefiles";

function ForgetPassword(props) {

    const [error, setError] = useState(false);
    const usehistory = useHistory();
    const [email, SetEmail] = useState("");


    const [moves, SetMoves] = useState(false);



    const submits = async (e) => {
        e.preventDefault();
        if (email.length == 0) {
            setError(true);
        }

        if (email) {

            try {
                const result = await auth.sendPasswordResetEmail(email);
                toast.success("Check Your Email");

                setTimeout(() => {
                    usehistory.push(`/login`);
                }, 5000);
                SetMoves(true);
                console.log("received", result.user.email);
            } catch (err) {
                console.log(err);
                switch (err.code) {
                    case "auth/invalid-email":
                        toast.error(
                            "Email Id Is Not Match",
                            err.message,

                        );
                        break;
                    case "auth/user-disabled":
                        toast.error("user Is Disabled", err.message);
                        break;
                    case "auth/user-not-found":
                        toast.error(
                            "User Not Found",
                            err.message,

                        );
                        break;
                    case "auth/wrong-password":
                        toast.error("Wrong password", err.message);
                        break;
                }
            }
        }
    };
    return (
        <div className="login-screeen">
            <ToastContainer />
            <div className="login-inside">
                <div className="login-left">
                    <img src={p2} className="cars" />
                </div>
                <div className="login-right">

                    <form>
                        <h1 className="mb-5" style={{ color: "orangered" }}>Forget Password</h1>
                        <div class="mb-3  col-lg-12 col-xl-12 col-xxl-12">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => SetEmail(e.target.value)} name="email" value={email} />
                            {error && email.length <= 0 ? <div id="emailHelp" class="form-text" style={{ color: "red" }}>Email Field is empty</div> : ""}
                        </div>



                        <div onClick={() => usehistory.push("/login")}>
                            Login
                        </div>


                        <div>
                            {moves ? <div style={{width:"400px"}}>An email to reset your password has been sent to {email} You will be redirected to the login page in 5 seconds.</div> : <div></div>}
                        </div>

                        <button type="submit" class="btns" onClick={submits}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
