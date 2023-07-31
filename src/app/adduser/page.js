"use client"
import React, { useState } from 'react'
import './styles.css'
import { POST } from '../api/data/route'
function AddUser() {

  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [email,setEmail]=useState("")
const handleData=async()=>{

  let res =await fetch("http://localhost:3000/api/data",{
    method:'Post',
    body:JSON.stringify({name,age,email})
  })
let data=await res.json()
// console.log(res);
if(data.success){
 alert("User Added Sucessfully")
  console.log(data)
  }
  else{
    alert("Somthing Wrong Try Again")
  console.log(data)
  }

}
  return (
    <div className='main-box'>
      <input placeholder='Inter user Name' type='text' value={name} onChange={(e)=>setName(e.target.value)} className='inp-box' />
      <input placeholder='Inter Age' type='text' value={age} onChange={(e)=>setAge(e.target.value)} className='inp-box'/>
      <input placeholder='Inter Email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='inp-box'/>
      <button onClick={handleData} className='btn'>Add User</button>
    </div>
  )
}

export default AddUser