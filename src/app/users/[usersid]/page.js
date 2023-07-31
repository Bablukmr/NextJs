import Link from "next/link";

async function userData() {
     const res = await fetch(`http://localhost:3000/api/data/`);
    return res.json();
 }
export default async function SingleUser({params}) {
  const user=await userData()
 const newUser= user.filter((item)=>item.id==params.usersid)
  // console.log(newUser)
  // console.log(params.usersid)

  return (
    <>
    <div>SingleUser</div>
    {
      newUser.map((item,id)=>
      <div key={id}>
      <h2>Name: <span style={{color:"blue"}}>{item.name}</span></h2>
      <h2>Email: <span style={{color:"blue"}}>{item.email}</span></h2>
      <h2>Address: <span style={{color:"blue"}}>{item.address.city}</span></h2>
      </div>
      )
    }
    <Link href={'/users'}>Go To User List</Link>
  </> )
 
}


