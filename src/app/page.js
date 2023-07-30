import Link from "next/link";
import {Roboto} from 'next/font/google'

const roboto=Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})

export default function Home(){

  return(
    <div>
     <h1>Fetch Product List With API</h1>
     <h1 className={roboto.className}> This Is Google font wit Next.js</h1>
     <Link href='/productlist'>Go To Product Page</Link>
    </div>
  )
}