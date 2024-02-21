import React, { useState } from 'react'
import { Navigation } from './Navigation'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux'
import { adddata} from './counterslice'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';





export const Update = () => {
    const {id}=useParams()
    useEffect(()=>{
        const fetchData=async()=>{
        let response= await axios.get(`http://localhost:4000/findOne/${id}`)
        console.log(response.data);
        setViewData(response.data)
        }
        fetchData()
    },[])
   
    console.log(id);
    const [Viewdata,setViewData]=useState('')
const dispatch=useDispatch()
const [data,setData]=useState('')
// const reg=useSelector((state)=>state.form.value)
const navigate=useNavigate()

const handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

}
const handlesubmit= async (event)=>{
    event.preventDefault()
        dispatch(adddata(data))
        let response= await axios.put(`http://localhost:4000/update/${id}`,data)
        toast.success('Reg success')
        setData('')
        navigate('/login');
    }
    console.log(data);
    return (
    <>
    <div>
        <form onSubmit={handlesubmit} className='p-3 w-50 m-auto '>
        <input type="text" onChange={handleChange}   className='form-control mt-3 mb-3' name="firstname" id=""  placeholder={Viewdata.firstname} />
        <input type="text" onChange={handleChange}   className='form-control mt-3 mb-3' name="lastname" id=""  placeholder={Viewdata.lname}ast />
        <input type="text" onChange={handleChange}  className='form-control mt-3 mb-3' name="age" id=""  placeholder={Viewdata.age}/>
        <input type="text" onChange={handleChange}  className='form-control mt-3 mb-3' name="username" id=""   placeholder= {Viewdata.username}/>
        <input type="text" onChange={handleChange}   className='form-control mt-3 mb-3' name="password" id=""  placeholder={Viewdata.password} />
        <select name="usertype" onChange={handleChange} className='form-control mt-3 mb-3'>
            <option value="">-Select-</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
        </select>
        <input type="submit" className='btn btn-dark  w-100 ' name="" id="" />
        </form>
    
    </div>
    <ToastContainer/>
    </>
    )
}
