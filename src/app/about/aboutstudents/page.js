"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Students() {
  const Router=useRouter()
  return (
    <div><h1>
      This Is About Students Page
      </h1>
      <button onClick={()=>Router.push('/')}>Go To Home Page</button>
      </div>   
  )
}

export default Students