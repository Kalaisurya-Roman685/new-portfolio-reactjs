import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './styles/AdduserMians.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const [serach, SetSearch] = useState("");
    const [store, SetStores] = useState(gets());
    const [error, SetError] = useState(false);
    useEffect(() => {
        localStorage.setItem("amma", JSON.stringify(store));
    }, [store]);
    const handleadd = (e) => {
        e.preventDefault();

        if (name.length == 0 || email.length == 0 || image.length == 0 || location.length == 0 | comments.length == 0) {
            SetError(true);
        }
        if (name && email && image && location && comments) {
            toast.success("Successfully Add User...😁");

            SetNames("");
            SetEmail("");
            SetImage("");
            SetLocation("");
            SetComments("");
            let datas = {
                name, email, image, location, comments
            }
            SetStores([...store, datas]);

        }

    }

    const deleted = (id) => {
        if (window.confirm("Are You Sure Delete Data...🤔")) {
            const removes = store.filter((e, index) => {
                return index + 1 !== id
            })
            SetStores(removes);
            toast.error("Delete User Successfully...😉")
        }

        console.log(id);
    }

    // const allclear = () => {
    //     if (window.confirm("Are You Sure Delete Data All")) {
    //         SetStores([]);
    //         localStorage.removeItem("amma");
    //     }
    // }
    return (
        <div className='maintodo'>
            <ToastContainer />
            <h1 className='text-center mt-4'>Add User Somethink</h1>
            <div className='kalai-forms'>
                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" name="name" value={name} onChange={(e) => SetNames(e.target.value)} placeholder="name" />
                    {error && name.length <= 0 ? <span style={{ color: "red" }}>Name Filed Is Empty</span> : ""}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="email" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} placeholder="email" />
                    {error && email.length <= 0 ? <span style={{ color: "red" }}>Email Filed Is Empty</span> : ""}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 " style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" name="image" value={image} onChange={(e) => SetImage(e.target.value)} placeholder="image copy url past" />
                    {error && image.length <= 0 ? <span style={{ color: "red" }}>Image Filed Is Empty</span> : ""}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" name="location" value={location} onChange={(e) => SetLocation(e.target.value)} placeholder="location" />
                    {error && location.length <= 0 ? <span style={{ color: "red" }}>Location Filed Is Empty</span> : ""}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 " style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input type="text" name="comments" value={comments} onChange={(e) => SetComments(e.target.value)} placeholder="Comments" />
                    {error && comments.length <= 0 ? <span style={{ color: "red" }}>comments Filed Is Empty</span> : ""}
                </div>
                

                <button onClick={handleadd} className="adds mt-4">Add+</button>

            </div>


            <div className='mt-5'>
                <h6 style={{ color: "orangered", fontWeight: "600" }}>Add User Something Message...</h6>

                <div className='serach-input '>
                    <input
                        placeholder="Serach"
                        type="text"
                        value={serach}
                        onChange={(e) => SetSearch(e.target.value)}
                        className="col-md-6 col-sm-6 mt-4 mb-2"
                    />
                </div>
                {store.length === 0 && <div>No Data Found....</div>}
                <div className='row justify-content-center gap-4 mb-4'>
                    {store.filter((itemsed) =>
                        itemsed.name.toLowerCase().includes(serach)
                    )
                        .map((item, index) => {
                            return (
                                <div key={index} className="card col-lg-5 col-xl-4 col-md-5 col-xs-2 col-sm-8 mt-5 mb-3">
                                    {item.image.length > 10 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 140, height: 140, borderRadius: "50%" }} />}
                                    <h5 className='names mt-3'>{item.name}</h5>
                                    <h4 className='email mt-2'>{item.email}</h4>
                                    <h4 className='email mt-2'>{item.location}</h4>
                                    <button className='delete mt-3 mb-3' onClick={() => deleted(index + 1)}>Delete</button>
                                </div>
                            )
                        })}
                </div>
            </div>





        </div>
    )
}

export default AdduserMain