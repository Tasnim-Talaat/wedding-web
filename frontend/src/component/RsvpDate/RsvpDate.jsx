import React from 'react'
import house from '../../image/house.webp'
import IconTop from '../IconTop/IconTop'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function RsvpDate() {
  return <>
    <section >
  <IconTop/>
        <div className="rsvpdate">
        <div className="container">
                <div className="row  ">
                        <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
                                <h1 className='fs-1'>Deja & Oliver's Wedding</h1>
                                <p className='fs-6'>Friday, 20 Oct. 2023, The Old Chapel, San Francisco</p>
                                <Link to="/rsvp" className="btn  btn-rsvpdate my-4 " >RSVP</Link>     
                        </div>
                        
                        <div className="col-md-12 d-flex justify-content-center ">
                        <img src={house} alt="" className='w-100 rounded-sm'/>                     
                                 </div>
                        
                </div>

       
                <div className="row">
                        <div className="col-md-12 d-flex justify-content-center flex-column align-items-center ">
                                <h2 className='fs-1'>Time & Location</h2>
                                  <p> Oct 20, 2035, 4:00 PM – 8:00 PM PDT </p>
                                  <p>The Old Chaple, 500 Terry Francois Street, San Francisco, CA 94158</p>   
                                  
                                                
                                         </div>
                                         
                                                <div className="col-md-12 d-flex justify-content-center flex-column">
                                                        <h2 className="text-center fs-1">Schedule</h2>
                                                <div className="container d-flex  fs-3">
                                                        <div className="d-flex  flex-column ">
                                                                <p> 4:00 PM - 6:00 PM</p>
                                                                <p className="fs-6">2 hours</p>
                                                        </div>
                                                        <p className="ms-4">Ceremony</p>
                                                </div>                                                       
                                                <div className="container d-flex  fs-3">
                                                        <div className="d-flex  flex-column ">
                                                                <p> 6:00 PM - 8:00 PM</p>
                                                                <p className="fs-6">2 hours</p>
                                                        </div>
                                                        <p className="ms-4 ">Reception</p>
                                                </div>   
                                                <div className="seeAll d-flex justify-content-end ">

                                                        <button className="btn btn-seeAll  me-4">See All</button>        
                                                </div>
                                                                                            
                                                                 </div>
                                                                 <div className="col-md-12 d-flex justify-content-center flex-column align-items-center ">
                                                                        <div className="seeAll d-flex justify-content-end " id="ss">

                                                                                <Link to="/rsvp" className="btn  btn-rsvpdate my-4 " >RSVP</Link>     
                                                                        </div>
                                                                       </div>
                                                                 <div className="col-md-12 d-flex justify-content-center flex-column align-items-center ">
                                                                        <div className="mapouter">
                                                                                <div className="gmap_canvas">
                                                                                        <iframe className="gmap_iframe" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600;height=400&amp;hl=en&amp;q=egypt&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

                                                                                        </iframe>
                                                                                        
                                                                                </div>
                                                                                
                                                                </div>
                                                                        
                                                                       </div>
                </div>

</div>
        </div>
       </section>
  </>
}
// $(document).ready(function(){
//   // $('footer').fadeIn(1000,function(){
//       $('section').fadeIn(2000)
//       $('.rsvpdate').slideDown(2000)
         
//   // })
// })