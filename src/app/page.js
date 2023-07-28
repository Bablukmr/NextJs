'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [data,setData]=useState(0)
  function handleClick(){
    setData(data+1)
  }
  function handledec(){
    if(data>0){
      setData(data-1)
    }
  }
  return (
    <main className={styles.main}>
      <h1>Bablu kumar</h1>
      {data}
      <button onClick={handleClick}>Click Me +</button>
      <button onClick={handledec}>Click Me -</button>
    </main>
  )
}

