import Link from "next/link";

async function userData() {
  const res = await fetch("http://localhost:3000/api/data");
  return res.json();
}

export default async function Pages() {
  const user = await userData();
  return (
    <div>
      <h1>All User List</h1>
      {user.map((item) => (
        <div style={{display:'flex',border:"1px solid black",margin:'10px',width:'20vw',padding:".5rem",borderRadius:".5rem"}}>
          <h4>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </h4>
          
          <h4 style={{marginLeft:"40px"}}><Link style={{color:"red"}} href={`/users/${item.id}/update`}>Edit</Link></h4>  
         
        </div>
      ))}
      <Link href={"/"}>Go To Home</Link>
    </div>
  );
}
