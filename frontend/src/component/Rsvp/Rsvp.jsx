import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosistance } from '../../network/axiosistance';

export default function Rsvp() {
        const[fname,setFname]=useState('')
        const[lname,setLname]=useState('')
        const[email,setEmail]=useState('')
        const[is_going,setIsGoing]=useState(true)
        const [isLoading , setIsLoading]=useState(false)
        const [error ,setError]=useState('')

        let navigate =useNavigate()
        const config = {
                headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                //  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OX0.YloabzTSa-CCVAF2N-cghyoha0bmkOEE29vcL8aj3GY`,
                  
                },
              };
        async function sendRSVPToApi(){
        try{
                await axiosistance.post(`/create/`,{fname:fname,lname:lname,email:email,is_going:is_going},config)
                
                setIsLoading(false)
                navigate('/home')
        }
        catch(error){
          console.log(error.response.data)
          setError(error.response.data,email)
              setIsLoading(false)
        }
         }

        function rsvpSubmit(e){
                e.preventDefault()
                sendRSVPToApi()
                setIsLoading(true)
               
             

        }
  return <>
  <section className="rsvp-invite d-flex justify-content-center align-items-center">
        <div className="container">
                <div className="row ">
                        <div className="col-md-6  d-flex justify-content-center align-items-center ">
                                <h1 className='fs-2'>Deja & Oliver's Wedding</h1>
                        </div>
                        <div className="col-md-6  bg-transparent d-flex justify-content-center align-items-center ">
                                <div className="card-wedding text-dark bg-transparent " >
                                        <div className=" m-3">Deja & Oliver's Wedding</div>
                                        <div className="line "></div>
                                        <div className="m-3">
                                                <p className="">Oct 20, 2035, 4:00 PM – 8:00 PM</p>
                                                <p className="">PDT</p>
                                                <p className="">The Old Chaple</p>
                                        </div>
                                </div>
                        </div>

                        <div className="row">
                                <div className="col-md-6">
                        <form onSubmit={rsvpSubmit} className="py-3">
                        <div className="text-danger text-center" id="errors">{error}</div>

                                <div className="row  ">
                                        <div className="form-ra d-flex justify-content-between ">
                                        <div >
                                                <input  type="radio"  value='1' className="form-check-input "  name='is_going' onChange={(e)=>setIsGoing(e.target.value)}/>
                                                <label  htmlFor="" className='ms-2'>  I'm Going</label>
                                        </div>
                                        <div >
                                                <input  type="radio" className="form-check-input" value="0"  name='is_going' onChange={(e)=>setIsGoing(e.target.value)}/>
                                                <label  htmlFor="" className='ms-2'>Not Going</label>
                                        </div>
                                        </div>
                               
                                </div>



                                <div className="row py-3">
                                        <div className="col-md-6">
                                                <label htmlFor="fname">*First Name</label>
                                                <input type="text" className="form-control" id="fname" name='fname' onChange={(e)=>setFname(e.target.value)}/>
                                        </div>
                                        <div className="col-md-6">
                                                <label htmlFor="lname">*Last Name</label>
                                                <input type="text" className="form-control" id="lname" name='lname' onChange={(e)=>setLname(e.target.value)}/>
                                        </div>
                                </div>
                                <div className="col-md-12">
                                        <label htmlFor="email">*Email</label>
                                        <input type="email" className="form-control" id="email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                              
                                       <button className="btn btn-rscvp my-3 rounded form-control  py-2 px-5 "  >{isLoading === true ? (<i className='fa-solid fa-spinner fa-spin'></i>) : ("RSVP")}</button>
                                </div>
                        </form>
                </div>
        </div>
        </div>
        </div>
        </section>
  </>
}
