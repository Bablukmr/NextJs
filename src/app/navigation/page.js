"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function Navigation() {
    const router=useRouter()
    return (
        <div>
            <h1>This Is Navigation Page</h1>
    <Link href='/'>Go To Home Page</Link><br/>
    <button onClick={()=>router.push('/')}>Go To Home Page</button>

        </div>
    );
}
