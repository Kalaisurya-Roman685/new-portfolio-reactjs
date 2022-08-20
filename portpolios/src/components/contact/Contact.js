import React, { useState } from 'react'
import './styles/Contact.scss';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {

    const [names, SetNames] = useState({
        name: "",
        email: "",
        message: "",
        subject: ""
    });

    const [error, SetError] = useState(false);

    const { name, email, subject, message } = names;

    const handlechange = (e) => {
        SetNames({ ...names, [e.target.name]: e.target.value })
    }
    const sendMail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_skjfx8p",
                "template_3yccsbm",
                e.target,
                "YjLgEDj1l7MACsxAI"
            )
            .then((e) => {
                console.log(e.text);
                toast("Send Message Successfully 😎")
            })
            .catch((er) => {
                toast("Check this network..")
                console.log(er);
            });
        e.target.reset();

        if (name.length === 0 || email.length === 0 || subject.length === 0 || message.length === 0) {
            SetError(true);
        }
    }


    return (
        <div className='contact-main'>
            <ToastContainer />

            <div className='inside-contact'>

                <div className='center-content'>
                    <h2 className='have'>Have You Any Questions?</h2>
                    <span className='is'>I'M AT YOUR SERVICE</span>
                </div>

                <div className='boxs'>
                    <div className='box1'>
                        <div>
                            <i class="fa-solid fa-phone-arrow-up-right cl"></i>
                        </div>
                        <div>
                            <h4 className='call'>Call Us On</h4>
                        </div>
                        <div>
                            <h5>+918778377119</h5>
                        </div>
                    </div>
                    <div className='box1'>
                        <div>
                            <i class="fa-solid fa-location-dot cl"></i>
                        </div>
                        <div>
                            <h4 className='call'>Office</h4>
                        </div>
                        <div>
                            <h5>18 Street,chennai</h5>
                        </div>
                    </div>
                    <div className='box1'>
                        <div>
                            <i class="fa-solid fa-envelope-dot cl"></i>
                        </div>
                        <div>
                            <h4 className='call'>Email</h4>
                        </div>
                        <div>
                            <h5>kalaimca685@gmail.com</h5>
                        </div>
                    </div>
                    <div className='box1'>
                        <div>
                            <i class="fa-brands fa-edge cl"></i>
                        </div>
                        <div>
                            <h4 className='call'>Website</h4>
                        </div>
                        <div>
                            <h5>+918778377119</h5>
                        </div>
                    </div>
                </div>


                <div className='center-content'>
                    <h2 className='have'>SEND ME AN EMAIL</h2>
                    <span className='is'>I'M VERY RESPONSIVE TO MESSAGES</span>
                </div>
                <form onSubmit={sendMail}>

                    <div className='forms-section mt-5'>

                        <div className='inputs-box'>
                            <div>
                                <input type="text" placeholder='Name' className='ins' name="name" required />
                                {/* <div className='mt-2'>
                                    <span >{error && name.length <= 1 ? <span style={{ color: "red" }}>name filed is empty</span> : ""}</span>
                                </div> */}
                            </div>
                            <div>
                                <input type="email" placeholder='Email' className='ins' name="email" required />
                                {/* <div className='mt-2'>
                                    <span>{error && email.length <= 0 ? <span style={{ color: "red" }}>email field is empty</span> : ""}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className='subjects mt-5'>
                        <input type="text" placeholder='Subject' className='subj' name="subject" required />
                        {/* <div style={{ paddingLeft: "7rem" }} className="mt-2">
                            <span>{error && subject.length <= 0 ? <span style={{ color: "red" }}>subject filed is empty</span> : ""}</span>
                        </div> */}

                    </div>

                    <div className='texts mt-5 mb-4'>
                        <input type="text" placeholder='Message' className='textarea' name="message" required />
                        {/* <div style={{ paddingLeft: "7rem" }} className="mt-2">
                            <span>{error && message.length <= 0 ? <span style={{ color: "red" }}>message filed is empty</span> : ""}</span>
                        </div> */}
                    </div>
                    <div>
                        <button className='message' >Send Message</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Contact