

async function UserData() {
 
const  res= await fetch("https://jsonplaceholder.typicode.com/users")
//  const data= await res.json()
//  console.log(data)
return res.json()
}

export default UserData