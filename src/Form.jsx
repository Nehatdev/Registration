import React, { useState } from 'react'
import { Navigation } from './Navigation'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux'
import { adddata} from './counterslice'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'





export const Form = () => {
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
        let response= await axios.post('http://localhost:4000/insert',data)
        toast.success('Reg success')
        setData('')
        navigate('/login');
    }
    console.log(data);
    return (
    <>
    <div>
        <form onSubmit={handlesubmit} className='p-3 w-50 m-auto '>
        <input type="text" onChange={handleChange}   className='form-control mt-3 mb-3' name="firstname" id=""  placeholder='firstname' />
        <input type="text" onChange={handleChange}   className='form-control mt-3 mb-3' name="lastname" id=""  placeholder='lastname' />
        <input type="text" onChange={handleChange}  className='form-control mt-3 mb-3' name="age" id=""  placeholder='age' />
        <input type="text" onChange={handleChange}  className='form-control mt-3 mb-3' name="username" id=""   placeholder='username' />
        <input type="text" onChange={handleChange}   className='form-control mt-3 mb-3' name="password" id=""  placeholder='password' />
        {/* <input type="text" onChange={handleChange}   className='form-control mt-3 mb-3' name="address" id=""  placeholder='address' /> */}
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