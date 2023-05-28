import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { axiosistance } from '../../network/axiosistance';

export default function Register() {
        const[username,setUsername]=useState('')
        const[email,setEmail]=useState('')
        const[password,setPassword]=useState('')
       
        const [error ,setError]=useState([])

        const [isLoading , setIsLoading]=useState(false)
        let navigate =useNavigate()

        async function sendRegisterToApi(){
        try{
                let {data}=await axiosistance.post(`/register/`,{username:username,email:email,password:password})
                
            //     console.log(data)
                setIsLoading(false)
                navigate('/login')
        }
        catch(error){
            console.log(error.response.data.error)
              setError(error.response.data.error)
              setIsLoading(false)


        }

       
         }

        function registerSubmit(e){
                e.preventDefault()
                sendRegisterToApi()
                setIsLoading(true)
         

        }

       
  return <>
  <section className="rsvp-invite ">
  <div className="container">
        <form onSubmit={registerSubmit} className='py-5 n'>
            <h1 className='mb-3 fs-1 text-center'> Register NewUser </h1>
            <div className="text-danger text-center" id="errors">{error}</div>
            <div className="username">
            <label htmlFor="username">*Username</label>
        <input type="text" name='username' id='username' className='form-control mb-3'onChange={(e)=>setUsername(e.target.value)} required/>
            </div>
            <div className="email">
            <label htmlFor="email">*Email</label>
        <input type="email" name='email' id='email' className='form-control mb-3'onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className="pass">
            <label htmlFor="password">*Password:</label>
        <input type="password" name='password' id='password' className='form-control mb-3'  onChange={(e)=>setPassword(e.target.value)} required/>
      
            </div>
       
       <div className="submit d-flex justify-content-center align-items-center ">
       <button className='btn btn-rscvp rounded  py-2 px-5'>{isLoading === true ? (<i className='fa-solid fa-spinner fa-spin'></i>) : ("SignUp")}</button>

       </div>
        </form>
        
  </div>
  </section>
  </>
}



