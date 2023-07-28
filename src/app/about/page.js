"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function index() {
  const router=useRouter()
  return (
    <>
    <div>This is index Page</div>
    <Link href='/'>Go To Home Page</Link><br/>
    <button onClick={()=>router.push('/')}>Go To Home Page</button>
    </>
  )
}
