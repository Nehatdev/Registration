import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';


export const Login = () => {
  const [data, setData] = useState({
    username: '', password: ''
  });
  const navigate = useNavigate()
  const person = useSelector((state) => state.reg.data)
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post('http://localhost:4000/loginOne', data)
      console.log(response.data);

      if (response.data) {
        console.log('success');
        toast.success('Login success')
        navigate(`/viewlogin/${response.data._id}`)
        // navigate(/viewlogin)
      }
      else {
        toast.error('Login Failed')
      }

    } catch (e) {
      toast.error('failed');
    }
  };


  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='p-3 w-50 m-auto'>
          <input type="text" onChange={handleChange} value={data.username} className='form-control mt-3 mb-3' name="username" placeholder='Username' />
          <input type="password" onChange={handleChange} value={data.password} className='form-control mt-3 mb-3' name="password" placeholder='Password' />
          <input type="submit" className='btn btn-dark mt-3 w-100' name="login" value="Login" />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
