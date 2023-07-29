"use client"
import Link from 'next/link'
import React from 'react'

function Lecture({params}) {
    console.log(params)
  return (
    <div>
        <h1 style={{color:'blue'}}>All Segments of Students</h1>
    <h2>Student Name:{params.allsegments[0]} </h2>
    <h2>Student Roll No.:{params.allsegments[1]} </h2>
<Link href='/studentlist'>Go to Student List</Link>
    </div>
  )
}

export default Lecture