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
      <h2>This Is Home Page</h2>
      <h1>Bablu Kumar</h1>
      <Link href='/login'> Go To LogIn Page</Link><br/>
      <Link href='/about'> Go To About Page</Link><br/><br/><br/>
      <button onClick={()=>navigate('/navigation')}>Navigate</button><br/>
      <button onClick={()=>navigate('/login')}>Login</button><br/>
      <button onClick={()=>navigate('/about/aboutstudents')}>AboutS Students</button>

    </div>
  )
}