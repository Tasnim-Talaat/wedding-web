import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { axiosistance } from '../../network/axiosistance';
import { Link } from 'react-router-dom'

export default function Users() {
          
        const [myData, setMyData]=useState([])
        const [error ,setError]=useState('')

        let navigate =useNavigate()
        const config = {
                headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                  
                },
              };

        async function sendLoginToApi(){
        try{
                const {data}=await axiosistance.get(`/allUser/`,config)
                setMyData(data)
        }
        catch(error){
          console.log(error)
          setError(error.response.data.detail)
        
         }
        }
        useEffect(()=>{
                sendLoginToApi()
               },[])
  return <>
  <div className="users">

<div className="container">
      <h1 className='fs-1 my-3'>Users:</h1>
<table className="table table-striped bg-light">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">UserName</th>
    <th scope="col">Email</th>
    <th scope="col">IsAdmin</th>
  </tr>
</thead>
<tbody>
      {myData.map((invit,index)=>
      
      <tr key={index}>
      <th scope="row">{invit.id}</th>
      <td>{invit.username}</td>
      <td>{invit.email}</td>
      {invit.is_superuser ? <td className='text-success'> <i className='fa-solid fa-check text-success'></i> </td>:<td className='text-danger'> <i className='fa-solid fa-xmark text-danger'></i> </td>}
    </tr>
      
      )}
 
</tbody>
</table>
</div>
</div>
  </>
}

