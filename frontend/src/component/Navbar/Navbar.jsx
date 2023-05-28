import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux';


export default function Navbar() {
  // const isAdmins=useSelector((state)=>state.isAdmin)
  // console.log(isAdmins)
  const isLogin=localStorage.getItem("isLogin")
  const isAdmins=localStorage.getItem("isAdmin")
  let navigate =useNavigate()
  const LogOut=()=>{
    // localStorage.removeItem("isLogin")
    localStorage.clear();
    navigate('/')
  }
  
  return <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand fs-1" to="#">D&O</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">The Wedding</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#story">Story</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#playlist">Playlist</Link>
        </li>
      </ul>
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      { isAdmins == 'true' &&
      <li className="nav-item ">
        <div className="dropdown">
  <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Admin <i className='fa-solid fa-circle-chevron-down'></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item" to="users">Users</Link></li>
    <li><Link className="dropdown-item" to="invites"> Invites</Link></li>
    
  </ul>
</div>
          
          
      </li>
      
}
{isLogin?
        <div class="dropdown">
 <Link class="btn  dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
 {localStorage.getItem("email").split('@')[0]} 
 </Link>

  <ul class="dropdown-menu">
    {/* <li><Link class="dropdown-item" to="profile">Profile</Link></li> */}
    <li><Link class="dropdown-item" to="/" onClick={LogOut}>Logout</Link></li>
  </ul>
</div>

       
      
      
        
      :
      
        <li className="nav-item ">
          <Link className="nav-link" to="login"> <i className='fa-regular fa-circle-user mx-2 fs-6 rounded'></i>Log In</Link>
        </li>
       
      }
       <li className="nav-item rsvp ">
          <Link className="nav-link text-white text-center" to="rsvpdate"  >RSVP</Link>
        </li>

      </ul> 


      
     
     
    </div>
  </div>
</nav>

  </>
}
