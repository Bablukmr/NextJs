"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
  const router=useRouter()
    function rout(name){
        router.push(name)
    }
  return (
   <> <div>This Is Login Page</div>
    <Link href='/'>Go To Home Page</Link><br/>
    <button onClick={()=>router.push('/')}>Go To Home Page</button><br/>
    <button onClick={()=>rout('/login/loginteacher')}>Login Teacher</button><br/>
    <button onClick={()=>rout('/login/loginstudents')}>Login Students</button>
    </>
  )
}
