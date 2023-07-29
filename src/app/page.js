'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home(){

  function navigate(name){
    router.push(name)
  }
const router=useRouter()
  return(
    <div>
     <h1>Fetch Product List With API</h1>
     <Link href='/productlist'>Go To Product Page</Link>
    </div>
  )
}