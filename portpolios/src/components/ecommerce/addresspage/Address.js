import React, { useEffect, useState, useRef } from "react";

import { Modal } from "bootstrap";
import { useHistory } from "react-router-dom";
import './styles/Address.scss';

import bur from '../../../assests/ecommerce/bur.png';
import bur1 from '../../../assests/ecommerce/bur1.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const gatData = () => {
    let data = localStorage.getItem("address");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};
function Address(props) {
    const [id, SetId] = useState("");
    const [name, SetName] = useState("");
    const [city, SetCity] = useState("");
    const [street, SetStreet] = useState("");
    const [address, SetAddress] = useState("");
    const [dates, SetDate] = useState("");
    const [pincode, SetPincode] = useState("");
    const [area, SetArea] = useState("");
    const [error, SetError] = useState(false);

    const [stored, SetStore] = useState(gatData);
    const [OneData, SetOneDataModel] = useState([]);
    const useref = useRef(null);
    const usehistory = useHistory();
    const handlesubmit = (e) => {
        e.preventDefault();

        if (name.length == 0 || city.length == 0 || street.length == 0 || address.length == 0 | pincode.length == 0 || area.length == 0) {
            SetError(true);
        }
        if (name && city && street && address && pincode && area) {
            let emptydata = {
                name,
                city,
                street,
                address,
                pincode,
                area,
                dates
            };
            SetStore([...stored, emptydata]);
            toast.success("Successfully Add Address...🏠")
            setTimeout(() => {
                // usehistory.push("/conformaddress");
            }, 2300);
        }
        SetId("");
        SetName("");
        SetCity("");
        SetStreet("");
        SetPincode("");
        SetArea("");
        SetAddress("");
        SetDate("");

    };

    useEffect(() => {
        localStorage.setItem("address", JSON.stringify(stored));
    }, [stored]);
    const edit = (id) => {
        console.log(id);
        let datas = stored;
        datas.forEach((elemets, index) => {
            if (elemets.name == id) {
                toast("Success Updates");
                SetOneDataModel(elemets);
                console.log(elemets, "local data");
            }
        });
        showModal();
    };

    const removeHandler = (name) => {
        console.log(id);
        if (window.confirm("Are You Sure Delete Data...🤔")) {
            const filteredExpense = stored.filter((e, index) => {
                return index + 1 !== name;
            });
            toast.error("Delete Order Address SuccessFully...😉")

            SetStore(filteredExpense);
        }
    };

    const showModal = () => {
        const modalEle = useref.current;
        const bsModal = new Modal(modalEle, {
            backdrop: "static",
            keyboard: false,
        });
        bsModal.show();
    };

    const hideModal = () => {
        const modalEle = useref.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
    };

    return (
        // <div className="containes">
        //     <div className="col-lg-2 col-md-10 col-sm-10 col-xs-10 mt-5 kalais">

        //         <form onSubmit={handlesubmit} className="mt-5">
        //             <div class="mb-3 col-lg-12">
        //                 <label for="exampleInputName1" class="form-label">
        //                     Name
        //                 </label>
        //                 <input
        //                     type="name"
        //                     class="form-control col-lg-2"
        //                     id="exampleInputName1"
        //                     aria-describedby="exampleInputName"
        //                     onChange={(e) => SetName(e.target.value)}
        //                     value={name}

        //                 />
        //                 {error && name.length <= 0 ? <span style={{ color: "red" }}>Name Filed Is Empty</span> : ""}
        //             </div>
        //             <div class="mb-3">
        //                 <label for="exampleInputCity1" class="form-label">
        //                     City
        //                 </label>
        //                 <input
        //                     type="city"
        //                     class="form-control"
        //                     id="exampleInputCity1"
        //                     onChange={(e) => SetCity(e.target.value)}
        //                     value={city}

        //                 />
        //                 {error && city.length <= 0 ? <span style={{ color: "red" }}>city Filed Is Empty</span> : ""}
        //             </div>
        //             <div class="mb-3">
        //                 <label for="exampleInputStreet1" class="form-label">
        //                     Street
        //                 </label>
        //                 <input
        //                     type="street"
        //                     class="form-control"
        //                     id="exampleInputStreet1"
        //                     aria-describedby="exampleInputStreet1"
        //                     onChange={(e) => SetStreet(e.target.value)}
        //                     value={street}

        //                 />
        //                 {error && street.length <= 0 ? <span style={{ color: "red" }}>street Filed Is Empty</span> : ""}
        //             </div>
        //             <div class="mb-3">
        //                 <label for="exampleInputPincode1" class="form-label">
        //                     Pin Code
        //                 </label>
        //                 <input
        //                     type="number"
        //                     class="form-control"
        //                     id="exampleInputPincode1"
        //                     aria-describedby="exampleInputPincode1"
        //                     onChange={(e) => SetPincode(e.target.value)}
        //                     value={pincode}

        //                 />
        //                 {error && pincode.length <= 0 ? <span style={{ color: "red" }}>pincode Filed Is Empty</span> : ""}
        //             </div>
        //             <div class="mb-3">
        //                 <label for="exampleInputArea1" class="form-label">
        //                     Area
        //                 </label>
        //                 <input
        //                     type="text"
        //                     class="form-control"
        //                     id="exampleInputArea1"
        //                     aria-describedby="exampleInputArea1"
        //                     onChange={(e) => SetArea(e.target.value)}
        //                     value={area}

        //                 />
        //                 {error && area.length <= 0 ? <span style={{ color: "red" }}>area Filed Is Empty</span> : ""}
        //             </div>
        //             <div class="mb-3">
        //                 <label for="exampleInputAddress1" class="form-label">
        //                     Address
        //                 </label>
        //                 <input
        //                     type="text"
        //                     class="form-control"
        //                     id="exampleInputAddress1"
        //                     aria-describedby="exampleInputAddress1"
        //                     onChange={(e) => SetAddress(e.target.value)}
        //                     value={address}

        //                 />
        //                 {error && address.length <= 0 ? <span style={{ color: "red" }}>address Filed Is Empty</span> : ""}
        //             </div>
        //             <div class="mb-3">
        //                 <label for="exampleInputAddress1" class="form-label">
        //                     Date
        //                 </label>
        //                 <input
        //                     type="date"
        //                     class="form-control"
        //                     id="exampleInputAddress1"
        //                     aria-describedby="exampleInputAddress1"
        //                     onChange={(e) => SetDate(e.target.value)}
        //                     value={dates}

        //                 />
        //                 {error && dates.length <= 0 ? <span style={{ color: "red" }}>Dates Filed Is Empty</span> : ""}
        //             </div>
        //             <div class="mb-3 form-check">
        //                 <input
        //                     type="checkbox"
        //                     class="form-check-input"
        //                     id="exampleCheck1"
        //                 />
        //                 <label class="form-check-label" for="exampleCheck1">
        //                     Check me out
        //                 </label>
        //             </div>
        //             <button type="submit" class="btn btn-primarys mb-5">
        //                 Submit
        //             </button>
        //         </form>
        //         <div className="mt-5">
        //             <table class="table table-sm">
        //                 <thead>
        //                     <tr>
        //                         <th>Id</th>
        //                         <th>Name</th>
        //                         <th>City</th>
        //                         <th>street</th>
        //                         <th>Edit</th>
        //                         <th>Delete</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {stored.map((items, index) => {
        //                         return (
        //                             <tr>
        //                                 <td>{index + 1}</td>
        //                                 <td>{items.name}</td>
        //                                 <td>{items.city}</td>
        //                                 <td>{items.street}</td>
        //                                 <td onClick={() => edit(items.name)}>
        //                                     <ion-icon name="create-outline"></ion-icon>
        //                                 </td>
        //                                 <td
        //                                     onClick={() =>
        //                                         removeHandler(items.name)
        //                                     }
        //                                 >
        //                                     <ion-icon name="trash-outline"></ion-icon>
        //                                 </td>
        //                             </tr>
        //                         );
        //                     })}
        //                 </tbody>
        //             </table>
        //             {stored.length < 1 && <div>No records Data</div>}
        //         </div>
        //     </div>

        // </div>
        <div className="address-page">
            <ToastContainer />
            <div className="inside-address">
                <div className="title-address mt-4 mb-4">
                    <h4 className="orders-food">Order Address 🌭...🍿...🍰</h4>
                </div>
                <div className="bottom-section-address">
                    <div className="inside-bottom-address">
                        <div className="left-address">
                            <img src={bur1} className="img-fluid bur" />
                            <img src={bur} className="img-fluid bur" />
                        </div>
                        <div className="right-address">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 mb-3 mt-5" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                                <label for="exampleInputName1" class="form-label mb-2">
                                    Name
                                </label>
                                <input
                                    type="name"
                                    class="form-control col-lg-2"
                                    id="exampleInputName1"
                                    aria-describedby="exampleInputName"
                                    onChange={(e) => SetName(e.target.value)}
                                    value={name}

                                />
                                {error && name.length <= 0 ? <span style={{ color: "red" }}>Name Filed Is Empty</span> : ""}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 mb-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                                <label for="exampleInputCity1" class="form-label ">
                                    City
                                </label>
                                <input
                                    type="city"
                                    class="form-control"
                                    id="exampleInputCity1"
                                    onChange={(e) => SetCity(e.target.value)}
                                    value={city}

                                />
                                {error && city.length <= 0 ? <span style={{ color: "red" }}>city Filed Is Empty</span> : ""}
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 mb-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                                <label for="exampleInputStreet1" class="form-label">
                                    Street
                                </label>
                                <input
                                    type="street"
                                    class="form-control"
                                    id="exampleInputStreet1"
                                    aria-describedby="exampleInputStreet1"
                                    onChange={(e) => SetStreet(e.target.value)}
                                    value={street}

                                />
                                {error && street.length <= 0 ? <span style={{ color: "red" }}>street Filed Is Empty</span> : ""}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 mb-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                                <label for="exampleInputPincode1" class="form-label">
                                    Pin Code
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleInputPincode1"
                                    aria-describedby="exampleInputPincode1"
                                    onChange={(e) => SetPincode(e.target.value)}
                                    value={pincode}

                                />
                                {error && pincode.length <= 0 ? <span style={{ color: "red" }}>pincode Filed Is Empty</span> : ""}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 mb-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                                <label for="exampleInputArea1" class="form-label">
                                    Area
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputArea1"
                                    aria-describedby="exampleInputArea1"
                                    onChange={(e) => SetArea(e.target.value)}
                                    value={area}

                                />
                                {error && area.length <= 0 ? <span style={{ color: "red" }}>area Filed Is Empty</span> : ""}
                            </div>


                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 mb-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                                <label for="exampleInputAddress1" class="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputAddress1"
                                    aria-describedby="exampleInputAddress1"
                                    onChange={(e) => SetAddress(e.target.value)}
                                    value={address}

                                />
                                {error && address.length <= 0 ? <span style={{ color: "red" }}>address Filed Is Empty</span> : ""}
                            </div>



                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 mb-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                                <label for="exampleInputAddress1" class="form-label">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    class="form-control"
                                    id="exampleInputAddress1"
                                    aria-describedby="exampleInputAddress1"
                                    onChange={(e) => SetDate(e.target.value)}
                                    value={dates}

                                />
                                {error && dates.length <= 0 ? <span style={{ color: "red" }}>Dates Filed Is Empty</span> : ""}
                            </div>

                            <button type="submit" class="primarys mb-5" onClick={handlesubmit}>
                                Submit
                            </button>

                        </div>
                    </div>
                </div>

                <div className="mt-5">


                    {stored.map((items, index) => {
                        return (

                            <div className="list-address">
                                <div className="names">
                                <div>
                                    {index + 1}
                                </div>
                                <div>
                                    Name:{items.name}
                                </div>
                                <div>
                                    City:{items.city}
                                </div>
                                <div>
                                    Street:{items.street}
                                </div>
                                <div>
                                    Address:{items.address}
                                </div>
                                <div>
                                    Area:{items.area}
                                </div>
                                <div>
                                    Date:{items.dates}
                                </div>
                                <div>
                                    Pincode:{items.pincode}
                                </div>
                                <button className="cancels mt-2" onClick={() =>
                                    removeHandler(index + 1)
                                }>cancel</button>
                                 <button className="confirms mt-2 mb-4" onClick={() => usehistory.push("/orderdetails")}>Confirm</button>
                                </div>
                            </div>

                        );
                    })}

                    {stored.length < 1 && <div>No records Data</div>}
                </div>
            </div>
        </div>
    );
}

export default Address;
