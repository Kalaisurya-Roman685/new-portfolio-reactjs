import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './styles/AdduserMians.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebasefiles';


import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';


const gets = () => {
    let data = localStorage.getItem("amma");

    if (data) {
        return JSON.parse(data);

    }
    else {
        return [];
    }
}
function AdduserMain() {

    const history = useHistory();

    const [name, SetNames] = useState('');
    const [email, SetEmail] = useState('');
    const [image, SetImage] = useState("");
    const [location, SetLocation] = useState("");
    const [comments, SetComments] = useState("");
    const [date, SetDate] = useState("");
    const [serach, SetSearch] = useState("");
    const [store, SetStores] = useState(gets());
    const [numbersset, setNumberData] = useState("");
    const [error, SetError] = useState(false);
    const [errors, SetErrors] = useState(false);
    const [news, setNew] = useState([]);
    const usercollectionRef = collection(db, "users");


    const handleadd = async (e) => {
        e.preventDefault();

        if (name.length == 0 || email.length == 0 || image.length == 0 || location.length == 0 || comments.length == 0 || date.length == 0) {
            SetError(true);
        }
        if (name && email && image && location && comments) {
            SetNames("");
            SetEmail("");
            SetImage("");
            SetLocation("");
            SetComments("");
            toast.success("Successfully Add User...😁");

            await addDoc(usercollectionRef, { name: name, email: email, image: image, location: location, comments: comments, date: date });


            history.push("/followers")
        }

    }

    useEffect(() => {
        localStorage.setItem("amma", JSON.stringify(store));

        const getUsers = async () => {
            const data = await getDocs(usercollectionRef);
            setNew(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();

    }, [news]);

    const numberssets = () => {

        if (numbersset == 0) {
            SetErrors(true);
        }
        if (numbersset) {
            setNumberData("");
        }
    }

    const deleted = (id) => {

        if (window.confirm("Are You Sure Delete Data...🤔")) {
            const userDatadelete = doc(db, "users", id)

            let remeovesdata = deleteDoc(userDatadelete);
            SetStores(remeovesdata);
            toast.error("Delete User Successfully...😉")
        }


    }

    return (
        <div className='maintodo'>
            <ToastContainer />
            <div className='kalai-formss mt-5'>
                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" onChange={(e) => SetNames(e.target.value)} placeholder="name" />
                    {error && name.length <= 0 ? <span style={{ color: "red" }}>Name Filed Is Empty</span> : ""}
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="email" onChange={(e) => SetEmail(e.target.value)} placeholder="email" />
                    {error && email.length <= 0 ? <span style={{ color: "red" }}>Email Filed Is Empty</span> : ""}
                </div>


                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" onChange={(e) => SetImage(e.target.value)} placeholder="image copy url past" />
                    {error && image.length <= 0 ? <span style={{ color: "red" }}>Image Filed Is Empty</span> : ""}
                </div>


                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" onChange={(e) => SetLocation(e.target.value)} placeholder="location" />
                    {error && location.length <= 0 ? <span style={{ color: "red" }}>Location Filed Is Empty</span> : ""}
                </div>


                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                    <input type="date" onChange={(e) => SetDate(e.target.value)} placeholder="Date" />
                    {error && date.length <= 0 ? <span style={{ color: "red" }}>Date Filed Is Empty</span> : ""}
                </div>


                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" onChange={(e) => SetComments(e.target.value)} placeholder="Comments" />
                    {error && comments.length <= 0 ? <span style={{ color: "red" }}>comments Filed Is Empty</span> : ""}
                </div>

                <button onClick={handleadd} className="adds mt-4">Add+</button>

            </div>




            <div className='mt-3 ms-3'>
                <h6 style={{ color: "orangered", fontWeight: "600" }}>Add User Something Message...</h6>


                <div className='forms-flexs'>
                    <h4 className='numbers'>50+120</h4>
                    <input type='number' placeholder='Enter total number' name="" onChange={(e) => setNumberData(e.target.value)} className="works" />
                    <button onClick={numberssets} className="add-numbers">Show Data</button>
                    {errors && numbersset.length <= 0 ? <span style={{ color: "red" }}>number Filed Is Empty</span> : ""}
                </div>


                {numbersset == 170 ? <div>
                    <div className='serach-input '>
                        <input
                            placeholder="Serach"
                            type="text"
                            value={serach}
                            onChange={(e) => SetSearch(e.target.value)}
                            className="col-md-8 col-sm-8 mt-4 mb-2 cols"
                        />
                    </div>
                    {news.length === 0 && <div>No Data Found....</div>}
                    <div className='row justify-content-center gap-4 mb-4'>
                        {news.filter((itemsed) =>
                            itemsed.name.toLowerCase().includes(serach)
                        )
                            .map((item, index) => {
                                return (
                                    <div key={index} className="card col-lg-5 col-xl-4 col-md-5 col-xs-2 col-sm-8 mt-5 mb-3">

                                        {item.image.length > 10 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <span style={{ width: 120, height: 120, borderRadius: "50%", backgroundColor: "orange", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "2rem", paddingTop: "8%", fontWeight: "bold" }}>{item?.name?.slice(0, 1).toUpperCase()}</span>}
                                        {/* {item.image.length === 3 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXESI9cZ4AFUQuPGQWuDVF2Mr-EMUfMAebw&usqp=CAU" style={{ width: 140, height: 140, borderRadius: "50%" }} />}
                                    {item.image.length === 5 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5ay7xDg3E8Gww-ez3AWPG4u-8Xx6nZUATw&usqp=CAU" style={{ width: 140, height: 140, borderRadius: "50%" }} />}
                                    {item.image.length === 7 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 140, height: 140, borderRadius: "50%" }} />}
                                    {item.image.length === 8 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 140, height: 140, borderRadius: "50%" }} />}
                                    {item.image.length === 10 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 140, height: 140, borderRadius: "50%" }} />}
                                    {item.image.length === 13 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 140, height: 140, borderRadius: "50%" }} />} */}
                                        <h5 className='names mt-3'>{item.name}</h5>
                                        <h4 className='email mt-2'>{item.email}</h4>
                                        <h4 className='email mt-2'>{item.location}</h4>
                                        <h4 className='email mt-2'>{item.date}</h4>
                                        <button className='delete mt-3 mb-3' onClick={() => deleted(item.id)}>Delete</button>
                                    </div>
                                )
                            })}
                    </div>
                </div> : <div style={{ paddingTop: 20, paddingBottom: 30, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "30px", paddingTop: "3%" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIys2J0bSqhkuCMDN2ER1Llv636yr2grBInA&usqp=CAU" alt="pls correct add number enter" style={{ borderRadius: "30px" }} />
                </div>}

            </div>



        </div>
    )
}

export default AdduserMain;