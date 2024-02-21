import React from 'react'
import { useSelector } from 'react-redux';

export const Teacher = () => {
  const person=useSelector((state)=>state.reg.data)
  console.log(person);
  return (
    <div>
        <h2 >Teacher</h2>
        <p>FirstName: {person.firstname}</p>
        <p>LastName: {person.lastname}</p>
        <p>Age: {person.age}</p>
        <p>UserName: {person.username}</p>
        <p>Password: {person.password}</p>
    </div>
 )
}
