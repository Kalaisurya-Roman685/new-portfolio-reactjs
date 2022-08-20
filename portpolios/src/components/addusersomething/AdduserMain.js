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
    const [image, SetImage] = useState('');
    const [location, SetLocation] = useState("");
    const [store, SetStores] = useState(gets());

    const [error, SetError] = useState(false);


    useEffect(() => {
        localStorage.setItem("amma", JSON.stringify(store));
    }, [store]);
    const handleadd = (e) => {
        e.preventDefault();


        if (name.length == 0 || email.length == 0 || image.length == 0 || location.length == 0) {
            SetError(true);
        }
        if (name && email && image && location) {
            toast.success("Successfully Add User...😁");

            SetNames("");
            SetEmail("");
            SetImage("");
            SetLocation("");
            let datas = {
                name, email, image, location
            }
            SetStores([...store, datas]);
        

        }
    }

    console.log('====================================');
    console.log(store);
    console.log('====================================');

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

    const allclear = () => {
        if (window.confirm("Are You Sure Delete Data All")) {
            SetStores([]);
            localStorage.removeItem("amma");
        }
    }
    return (
        <div className='maintodo'>
            <ToastContainer />

            <div className='insidetodo'>
                <div className='top'>

                  <div className='d-flex mt-4 gap-5'>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <input type="text" name="name" value={name} onChange={(e) => SetNames(e.target.value)} placeholder="name" />
                        {error && name.length <= 0 ? <span style={{ color: "red" }}>Name Filed Is Empty</span> : ""}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <input type="email" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} placeholder="email" />
                        {error && email.length <= 0 ? <span style={{ color: "red" }}>Email Filed Is Empty</span> : ""}
                    </div>
                  </div>
                   <div className='d-flex mt-4 gap-5 mb-5s'>
                   <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <input type="file" name="image" value={image} onChange={(e) => SetImage(e.target.value)} placeholder="image copy url past" />
                        {error && image.length <= 0 ? <span style={{ color: "red" }}>Image Filed Is Empty</span> : ""}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <input type="text" name="location" value={location} onChange={(e) => SetLocation(e.target.value)} placeholder="location" />
                        {error && location.length <= 0 ? <span style={{ color: "red" }}>Location Filed Is Empty</span> : ""}
                    </div>
                   </div>
                    <button onClick={handleadd} className="adds mt-4">Add+</button>
                </div>

                <div className='bottom'>
                    {/* <button className='clear mb-5' onClick={allclear}>ALL Clear Data...</button> */}
                    <div className='mt-5'>
                        <h6 style={{ color: "orangered", fontWeight: "600" }}>Add User Something Message...</h6>
                        {store.length === 0 && <div>No Data Found....</div>}
                        <div className='row justify-content-center gap-4'>
                            {store.map((item, index) => {
                                return (
                                    <div key={index} className="card col-lg-3 col-xl-4 col-md-4 mt-5 mb-5">
                                        {item.image.length > 10 ? <img src={item.image} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 140, height: 140, borderRadius: "50%" }} />}
                                        <h5 className='names'>{item.name}</h5>
                                        <h4 className='email'>{item.email}</h4>
                                        <h4 className='email'>{item.location}</h4>
                                        <button className='delete' onClick={() => deleted(index + 1)}>Delete</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdduserMain