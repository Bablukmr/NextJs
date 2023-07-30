import Link from 'next/link'
import UserData from '../../../pages/page'

export default async function Pages() {
    const data=UserData()
    const newdata=await data
    // console.log(newdata)
  return (
    <div>
        <h1>All User List</h1>
        {
           newdata.map((item)=>
           <h2 key={item.id}>
           <Link href={`/users/${item.id}`}>{item.name}</Link>
           </h2>
           )
        }
    </div>
  )
}
