import Link from "next/link";
import UserData from "../../../../pages/page";

export default async function SingleUser({params}) {
    const data=UserData()
    const newdata = await data
    const singaluser=newdata[params.users-1]
    // console.log(singaluser);

  return (
    <div>
        <h1>This is {singaluser.name} Page</h1>
        <h2 style={{color:'green'}}>User Name: <span style={{color:'blue'}}>{singaluser.name}</span> </h2>
        <h2 style={{color:'green'}}>User email: <span style={{color:'blue'}}>{singaluser.email}</span> </h2>
        <h2 style={{color:'green'}}>User address: <span style={{color:'blue'}}>{singaluser.address.city},{singaluser.address.street}</span> </h2>
        <h2 style={{color:'green'}}>User website: <span style={{color:'blue'}}>{singaluser.website}</span> </h2>
        <Link href={'/users'}>Back</Link>
    </div>
  )
}

export async function gennerateStaticParams(){
  const data=UserData()
  const newdata = await data
  return newdata.map((user)=>(
{
    users:user.id.toString()
    }
    )
  )
}