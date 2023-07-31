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
        <div>
         <h4> <Link href={`/users/${item.id}`}>{item.name}</Link></h4>
        </div>
      ))}
      <Link href={'/'}>Go To Home</Link>
    </div>
  );
}
