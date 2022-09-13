import React from 'react'
import './styles/Profile.scss';
import kalai from '../../assests/whatsappkalai.jpeg';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heart from "react-animated-heart";
import MobileProfile from './componentprofile/MobileProfile';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebasefiles';
function ProfileSettings() {

  const [dataget, SetDataGet] = useState([]);

  const [dataslick, setDataLink] = useState();

  const [show, SetShow] = useState(false);
  const [isClick, setClick] = useState(false);
  const usercollectionRef = collection(db, "users");
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

  // let idlike = localStorage.getItem("likeid");


  // const likesdata = (id) => {
  //   dataget.forEach((e, index) => {
  //     if (index + 1 === id) {
  //       setClick(!isClick);
  //       setDataLink(id);
  //       localStorage.setItem("likeid", id)
  //     }
  //   })
  // }

  return (
    <>
      <div className='profile-main d-none d-lg-block'>
        <ToastContainer />
        <div className='inside-section-profile'>
          <div className='profile-section'>
            <div className='box' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={kalai} className='img-fluid kalaiprofile' />
              <h1 className='kalaisurya'>kalaisurya</h1>
            </div>
            <div className='box1 mt-2 '>
              <div className='mt-2 mb-2'>
                <h1>kalaisurya</h1>
                <div className='mt-3'>
                  <h2 className='fs-1' style={{ color: "orangered" }}>ReactJs Developer </h2><span>( 2 years of experience )</span>
                </div>
              </div>
              <div className='mt-3'>
                <div className='loreams'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                </div>
              </div>
            </div>
            <div className='follows'>
              <div className='following'>
                <h3>20</h3>
                <span className="text-follow"> Following</span>
              </div>
              <div className='following' data-bs-toggle="modal" data-bs-target="#exampleModal685555555555555">
                <h3>{dataget.length}</h3>
                <span className="text-follow"> Followers</span>
              </div>

            </div>
            <div className='card-section mt-4 mb-5'>
              <div className='card-section1' onClick={() => history.push("/welcomefirst")}>
                <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000" className='img-fluid e-commerces' />
                <h5>E-Commerce</h5>
              </div>
              <div className='card-section2'>
                <FacebookShareButton
                  url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                  <FacebookIcon size={42} round />
                </FacebookShareButton>
                <WhatsappShareButton

                  url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                  <WhatsappIcon size={42} round />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={'https://kalai-reactjsdeveloper-7c7ed.web.app/'} >
                  <LinkedinIcon size={42} round />
                </LinkedinShareButton>

              </div>
            </div>

          </div>

          <div className='carousels-sections'>
            <div className='left-carousel-section'>
            </div>
            <div className='middle-carousel-section'>
              {dataget.map((item, index) => {
                return (
                  <div className='kalai-card mt-3 mb-2 col-lg-6 col-xl-6'>

                    <div className='img-profile-name'>
                      <div>
                        {item.image.length > 10 ? <img src={item.image} style={{ width: 40, height: 40, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover" }} />}
                      </div>
                      <div>
                        <h4>{item?.name}</h4>
                        <h5>{item?.date}</h5>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='cards-left'>
                      {item.image.length > 10 ? <img src={item.image} style={{ width: "100%", height: "100%", borderRadius: "10%" }} alt="no image" /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />}
                    </div>
                    <div className='cards-right'>

                      <h5 className='email mt-3 mb-4'>{item.comments}</h5>
                    </div>
                    <div className='share-cuttons'>
                      <div className='left-shres'>
                        {/* <Heart  
                        isClick={dataslick == index + 1 ? isClick : <div></div>}
                        onClick={() => likesdata(index + 1)}
                        className="change-heart"
                      /> */}

                        <i class={`fa-solid fa-heart`}></i>Like

                      </div>
                      <div className='middle-shres'>
                        <i class="fa-solid fa-message-lines"></i> Comment
                      </div>
                      <div className='right-shres' data-bs-toggle="modal" data-bs-target={`#exampleModal${index + 1}`}>
                        <i class="fa-solid fa-share"></i> Share
                      </div>

                      {/* modal share start */}
                      <div class="modal fade" id={`exampleModal${index + 1}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5>Share Post {item?.name}</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
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
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

                            </div>
                          </div>
                        </div>
                      </div>


                      {/* modal share end */}

                    </div>
                  </div>
                )
              })}

            </div>
            <div className='right-carousel-section'>

            </div>
          </div>
        </div>
        {/* modal popup show image */}

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src={kalai} className="img-fluid" style={{ borderRadius: 20 }} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>


        {/* end modal popup show data */}


        {/* another followrrs modal popup */}

        <div class="modal fade" id="exampleModal685555555555555" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {dataget.map((item, index) => {
                  return (
                    <div className='cards mt-2 mb-4'>
                      <div className='cards-left'>

                        {item.image.length > 10 ? <img src={item.image} style={{ width: 100, height: 100, borderRadius: "50%" }} /> : <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/07/972998-dhonis.jpg" style={{ width: 100, height: 100, borderRadius: "50%" }} />}
                      </div>
                      <div className='cards-right'>
                        <h5 className='names'>{item.name}</h5>
                        <h4 className='email'>{item.email}</h4>
                        <h4 className='email'>{item.location}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='d-block d-lg-block'>
        <MobileProfile />
      </div>
    </>
  )
}

export default ProfileSettings;