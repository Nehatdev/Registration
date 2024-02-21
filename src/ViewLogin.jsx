import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


export const ViewLogin = () => {
    const {id} =useParams()
    const [data,setData]=useState('')
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response= await axios.get(`http://localhost:4000/findOne/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[])
 return (
    <div className='d-flex gap-3 m-3 flex-wrap'>
        <div style={{backgroundColor:'black',color:'hotpink',padding:'20px'}}>
            <p>username:{data.username}</p>
            <p>password:{data.password}</p>
            <p>firstname:{data.firstname}</p> 
            <p>lastname:{data.lastname}</p> 
        </div>
       
    </div>
  )
}
