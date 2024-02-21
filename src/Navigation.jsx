import React,{useContext} from 'react'
import './App.css'
import './Form'
import './Login'
import { Link,Outlet } from 'react-router-dom'


export const Navigation = () => {
  

  
  
  return (
<>

<div className='flex'>
<div className='head'>
        <h2>DATA</h2>
    </div>
    <div className='list'>
      <span>Home</span>
      <Link to='/register'> <span>Registers</span></Link>
      <Link to='/login'> <span>Login</span></Link>
    </div> 
 </div>
 


<Outlet/>

</>
  )}

