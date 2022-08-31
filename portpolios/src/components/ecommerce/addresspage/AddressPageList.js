import React, { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";
import "./styles/Address.scss";
import { toast } from "react-toastify";
function AddressPageList() {
    const [addresslist, SetAddresslist] = useState([]);

    const [OneData, SetOneDataModel] = useState([]);

    // const showModal = () => {
    //     const modalEle = useref.current;
    //     const bsModal = new Modal(modalEle, {
    //         backdrop: "static",
    //         keyboard: false,
    //     });
    //     bsModal.show();
    // };

    // const hideModal = () => {
    //     const modalEle = useref.current;
    //     const bsModal = Modal.getInstance(modalEle);
    //     bsModal.hide();
    // };


    useEffect(() => {
        let y = localStorage.getItem("address");
        console.log('====================================');
        console.log(y, "kaliay");
        console.log('====================================');
        SetAddresslist(JSON.parse(y));
    }, [])


    const removeHandler = (name) => {
        console.log(name);
        const filteredExpense = addresslist.filter((e, index) => {
            return index + 1 !== name;
        });

        SetAddresslist(filteredExpense);
    };

    return (
        <div className="main-address">
            <div className="inside-address">
                <div className="container">
                    <div className="inside-container">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>street</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addresslist.map((items, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{items.name}</td>
                                            <td>{items.city}</td>
                                            <td>{items.street}</td>
                                            <td

                                            >
                                                <ion-icon name="create-outline"></ion-icon>
                                            </td>
                                            <td
                                                onClick={() =>
                                                    removeHandler(index + 1)
                                                }
                                            >
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressPageList;
