import React from 'react'
import im1 from '../../image/1.webp'
import im2 from '../../image/middle.webp'
import im3 from '../../image/dog.webp'
import im4 from '../../image/home.webp'
import im5 from '../../image/cou.webp'
import im6 from '../../image/playlist.jpg'
import audi from '../../audio/Wedding Invitation Website Template - WIX.mp3'
import { Link } from 'react-router-dom'
import IconTop from '../IconTop/IconTop'



export default function Home() {
  return <>
  <IconTop />
   <header className="banner  d-flex justify-content-center align-items-center  ">
    <div className="container  ">
      <div className="row d-flex justify-content-center align-items-center position-relative ">
       
                  
        <div className="col-md-3 where "> 
          <div className=" d-flex justify-content-center align-items-center flex-column ">
            <h3> When:</h3>
            <h5>Friday </h5>
            <h5>20 Oct. 2035 </h5>
          </div>
        </div>
        <div className="col-md-6    "> 
          <div className="image ">
            <div className="caption-image text-center position-absolute d-none d-md-block ">
              <h1>Deja and Oliver</h1>
            <h4 >Invite You To Celebrate Their Wedding</h4>
          </div>
            <div className="position-absolute image-banner " >
            <img src={im1} className="w-100 "  alt=""/>
          </div>
        
        </div>
        </div>

        <div className="col-md-3 when  "> 
          <div className=" d-flex justify-content-center align-items-center flex-column ">
            <h3> Where:</h3>
            <h5>The Old Chapel,</h5>
            <h5>San Francisco </h5>
          </div>
        </div>
                </div>
       

     
     
    </div>
  </header>
    {/* <!-- --------------date---------- --> */}
    <section className="date d-flex justify-content-center align-items-center ">
    <div className=" container">
      <div className="row pt-5">
        <div className="col-md-5 d-flex justify-content-center align-items-center flex-column">
          <h3 >Ceremony</h3>
          <h1>4 pm</h1>
          <h3>The Parlour</h3>
          <p>Terry Francine Street,
            </p>
            <p>San Francisco</p>
        </div>
        <div className="col-md-2  d-flex justify-content-center align-items-center ">
          <i className="text-center py-5 fa-solid fa-star "></i>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center flex-column">
          <h3 >Reception</h3>
          <h1>6 pm</h1>
          <h3>The Main Foyer</h3>
          <p>Terry Francine Street,
            </p>
            <p>San Francisco</p>
        </div>
        </div>
      </div>
    

  </section>
    {/* // <!-- ----------middle--------- --> */}
 <section className="middle ">
  <div className="container position-relative ">
    
    <div className="row  d-flex justify-content-center align-items-center flex-column "> 
       <div className="col-md-3 d-flex justify-content-center align-items-center">   
          <i className="text-center py-4 fa-solid fa-star text-white"></i>
</div>
      <div className="col-md-6">
        <p className="lead  text-wrap  text-center fs-1 text-white">Once in a while, right in the middle of an ordinary life, love gives us a
          fairy tale.</p>

      </div>
      <div className="col-lg-3 col-md-12">
      <img src={im2} className=" w-50 position-absolute images img-fluid py-4 " alt=""/>

      </div>
    </div>

  </div>
</section>
  {/* ------------thisisus------- */}
  <section>
  <div className="countainer p-5">
    <div className="thisisus py-5 d-flex justify-content-center align-items-center flex-column ">
      <i className="fa-solid fa-star py-5"></i>
      <h2 className="py-5">This Is Us</h2>
      
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <p className="lead  text-wrap  text-center">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>

        </div>
        <div className="col-md-3"></div>
      </div>
    <div className="thisisus-images position-relative ">
        <div className="container">
      <div className="row gx-5 ">
      <div className="col-md-3"><img src={im3} className="py-5"  alt=""/></div>
      <div className="col-md-3"><img src={im4} className="position-absolute img-fluid image-thisisus  " alt=""/></div>
      <div className="col-md-6"><img src={im5} className=" w-100" alt=""/></div>
      </div>
      </div>
      {/* <img src={im3} className="mx-5"  alt=""/>
      <img src={im4} className="position-absolute image-thisisus me-5" alt=""/>
      <img src={im5} className="ms-5 ps-5" alt=""/> */}
    </div>
    </div>
  </div>
  
</section>
<section style={{height: "350px"}}>

</section>
  {/* <!-- ---------------playlist------------ --> */}
<section className="playlist position-relative">
  <div className="container d-flex justify-content-center align-items-center flex-column  ">
  <div className="row d-flex justify-content-center align-items-center   ">

  <div className="col-md-6  py-5 ">
    <div className="caption  ">
      <h2 className='fs-2' >Every Song Tells a</h2>
      <h3 className='fs-3'>  Story, Here Is Ours.</h3>
      <p className='mb-5'>Check out the playlist we’ve curated together.</p>
    </div>
    
  </div>
<div className="col-md-6  image-playlist  ">
      <img src={im6} className=" w-100" alt=""/>
      <h3 className='fs-3 my-3'>Time Goes By</h3>
      <p>The Pimples / L&D-Playlist</p>
      <audio controls>
        <source src={audi} type="audio/ogg"/>
      </audio>
  </div>
 
</div> 
  </div>
 
</section>
{/* <!-- --------------rsvp---------- --> */}
<section className="rsvp-section  d-flex justify-content-center align-items-center flex-column ">
  <p className=" fs-1 text-white text-center">Hoping to celebrate with you!</p>
    <Link className="btn btn-outline-light btn-rsvp-section rounded-pill text-white w-25" to="rsvpdate">RSVP</Link>

  

</section>
  </>
}
