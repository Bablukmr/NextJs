"use client"
import Link from "next/link";

export default function Student({params}){
    // console.log(params)
    return(
        <>
        <h1>Student </h1>
        <h4>Name:{params.student} </h4>
        <Link href='/studentlist'>Go To Student List</Link>
        </>
    )
}