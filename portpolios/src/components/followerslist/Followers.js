import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebasefiles';
import './styles/Followers.scss';


function Followers() {

    const [datas, SetDataGet] = useState([]);
    const usercollectionRef = collection(db, "users");

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usercollectionRef);
            SetDataGet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();


    }, [datas])
    return (
        <div className='followers-main '>
            <h1>Followers</h1>
            <div className='row justify-content-center gap-5 mb-5'>
                {datas.map((items, index) => {
                    return (
                        <div className='kalai-follow card col-lg-4 col-sm-8 col-xs-4 col-md-8'>
                            <div className='left-kalai'>
                                {items.image.length > 10 ? <img src={items.image} alt={items.namet} style={{ width: 140, height: 140, borderRadius: "50%" }} /> : <span style={{ width: 120, height: 120, borderRadius: "50%",backgroundColor:"orange",alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:"2rem",paddingTop:"15%",fontWeight:"bold" }}>{items?.name?.slice(0, 1).toUpperCase()}</span>}
                            </div>
                            <div className='right-kalai'>
                                <h6 className='names'>{items.name}</h6>
                                <h6 className='lists'>{items.email}</h6>
                                <h6 className='lists'>{items.comments}</h6>
                                <h6 className='lists'>{items.location}</h6>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Followers
