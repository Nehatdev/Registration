import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

export const View = () => {
    const [data,setData]=useState([''])
    const [refresh,setrefresh]=useState(false)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response= await axios.get('http://localhost:4000/find')
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[refresh])
    

    let handleDelete=async (id)=>{
        console.log(id);
        setrefresh(!refresh)
        let response= await axios.delete(`http://localhost:4000/delete/${id}`)
        console.log(response);
        
        console.log(refresh);
    }
  return (
    <div className='d-flex gap-3 m-3 flex-wrap'>
        {data.map((item,index)=>(
            <div style={{backgroundColor:'lightblue',color:'hotpink',padding:'20px'}}>
            <h2>username:{item.username}</h2>
            <h2>password:{item.password}</h2>
            <h2>firstname:{item.firstname}</h2>
            <h2>secondname:{item.lastname}</h2>
            <h2>age:{item.age}</h2>
            <h2>user type: {item._id}</h2>
            <Link to={`/update/${item._id}`}><button>update</button></Link>
            <button onClick={()=>{
                handleDelete(item._id)}}>delete</button>
            </div>
        ))}
    </div>
  )
}
