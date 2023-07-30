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
     <h1>Fetch Product User And Create New Pages</h1>
     <h1 className={roboto.className}> Like sarkarinaukri.com</h1>
     <Link href='/users'>Go To List Page</Link>
    </div>
  )
}