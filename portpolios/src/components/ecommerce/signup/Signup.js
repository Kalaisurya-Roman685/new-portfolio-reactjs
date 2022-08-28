import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import p2 from '../../../assests/ecommerce/kalai25-removebg-preview.png'

import { auth } from "../../../firebasefiles";


function Signup() {

    const usehistory = useHistory();
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [name, SetName] = useState("");
    const [show, SetShow] = useState(false);


    const [error, setError] = useState(false);



    const submits = async (e) => {
        e.preventDefault();
        if (email.length == 0 || password.length == 0 || name.length == 0) {
            setError(true);
        }
        if (email && password && name) {
            try {
                const result = await auth.createUserWithEmailAndPassword(
                    email,
                    password
                );
                toast.success("User Register SuccessFully 😎");
                setTimeout(() => {
                    usehistory.push(`/login`);
                }, 2000);

                localStorage.setItem(
                    "username",
                    JSON.stringify(name)
                );

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
                        <h1 className="mb-5" style={{ color: "orangered" }}>SignUp</h1>
                        <div class="mb-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="exampleInputName1" class="form-label">User Name</label>
                            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => SetName(e.target.value)} name="name" value={name} />
                            {error && name.length <= 0 ? <div id="emailHelp" class="form-text" style={{ color: "red" }}>Name Field is empty</div> : ""}
                        </div>
                        <div class="mb-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => SetEmail(e.target.value)} name="email" value={email} />
                            {error && email.length <= 0 ? <div id="emailHelp" class="form-text" style={{ color: "red" }}>Email Field is empty</div> : ""}
                        </div>
                        <div class="mb-3 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => SetPassword(e.target.value)} name="password" value={password} />
                            {error && password.length <= 0 ? <div id="emailHelp" class="form-text" style={{ color: "red" }}>password Field is empty</div> : ""}
                        </div>

                        <button type="submit" class="btns mb-5" onClick={submits}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup