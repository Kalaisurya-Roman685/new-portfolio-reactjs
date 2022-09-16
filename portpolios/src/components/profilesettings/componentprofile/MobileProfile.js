import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/MobileProfile.scss';
import kalai from '../../../assests/whatsappkalai.jpeg';

import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db } from '../../../firebasefiles';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
function MobileProfile() {



    const [dataget, SetDataGet] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const usercollectionRef = collection(db, "users");



    // https://kalai-portpolio-408b4.web.app/  old port folio kalaisurya reactjs


    useEffect(() => {

        // const datas = localStorage.getItem("amma");
        // SetDataGet(JSON.parse(datas));
        const getUsers = async () => {
            const data = await getDocs(usercollectionRef);
            SetDataGet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();

    }, [])

    const history = useHistory();
    return (
        <div className='mobile-profile'>
            <div className='inside-mobile-profile'>
                <div className='kalai-image-profile'>
                    <img src={kalai} className="img-fluid kalais" />
                </div>
                <div>
                    <h4 className='smile mt-3'>Reactjs Developer 😁</h4>
                    (2 Years Of Experience)
                </div>
                <div className='loreams-kalai mt-3'>
                    <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.</span>
                </div>
                <div className='follow-list mt-3'>
                    <div className='follow-left'>
                        <h3 className='counts'>20</h3>
                        Following
                    </div>
                    <div className='follow-right'>
                        <h3 className='counts'>20</h3>
                        Followers
                    </div>
                </div>

                <div className='follow-list1 mt-3'>
                    <div className='follow-left1' onClick={() => history.push("/welcomefirst")}>
                        <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000" className='img-fluid e-commerces' />
                        <h6>E-Commerce</h6>
                    </div>
                    <div className='follow-right1'>
                        <FacebookShareButton
                            url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                            <FacebookIcon size={25} round />
                        </FacebookShareButton>
                        <WhatsappShareButton

                            url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                            <WhatsappIcon size={25} round />
                        </WhatsappShareButton>
                        <LinkedinShareButton
                            url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                            <LinkedinIcon size={25} round />
                        </LinkedinShareButton>

                    </div>
                </div>

                <div className='followers-listsss mt-5'>
                    {dataget.map((items, index) => {
                        return (
                            <div className='main-cardss col-md-12 col-xs-12 col-sm-12 mt-2 mb-5'>
                                <div>
                                    <div className='d-flex gap-2 kalaigap mt-2 mb-3 ms-2'>
                                        {items.image.length > 10 ? <img src={items.image} style={{ width: 40, height: 40, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />}
                                        <div className='kalaies'>
                                            <h6 className='name'>{items?.name}</h6>
                                            <h6 className='mt-2 date'>{items?.date}</h6>
                                        </div>
                                    </div>

                                    <div>
                                        {items?.image.length > 10 ? <img src={items?.image} alt={items.name} className="mobile-image-picture" /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" className="mobile-image-picture" />}
                                    </div>
                                    <div className='mt-4 mb-3'>
                                        <h6>{items?.comments}</h6>
                                    </div>

                                    <div className='likes-sections mt-4 mb-4'>
                                        <div className='middle-shres'>
                                            <i class="fa-solid fa-heart"></i>Like
                                        </div>

                                        <div className='middle-shres'>
                                            <i class="fa-solid fa-message-lines"></i> Comment
                                        </div>
                                        <div className='right-shres' onClick={handleShow}>
                                            <i class="fa-solid fa-share"></i> Share
                                        </div>
                                    </div>

                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                        style={{ zIndex: "9808080808089808980890898098089088098089089809808908980", cursor: "pointer" }}

                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Share</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div class="modal-bodys" style={{ display: "flex", alignItems: "center", gap: "20px", paddingTop: "30px", paddingBottom: "30px", paddingLeft: "20px" }}>
                                                <FacebookShareButton
                                                    url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                                                    <FacebookIcon size={32} round />
                                                </FacebookShareButton>
                                                <PinterestShareButton

                                                    url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                                                    <PinterestIcon size={32} round />
                                                </PinterestShareButton>
                                                <RedditShareButton

                                                    url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                                                    <RedditIcon size={32} round />
                                                </RedditShareButton>
                                                <WhatsappShareButton

                                                    url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                                                    <WhatsappIcon size={32} round />
                                                </WhatsappShareButton>
                                                <LinkedinShareButton

                                                    url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                                                    <LinkedinIcon size={32} round />
                                                </LinkedinShareButton>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={handleClose}>
                                                Close
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </div>
    )
}

export default MobileProfile
