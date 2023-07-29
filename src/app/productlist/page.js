// "use client";
// import { useEffect, useState } from "react";

import Product from "./product";

async function datalist(){
    const res = await fetch("https://dummyjson.com/products");
    const datas = await res.json();
    // console.log(datas);
    return datas.products
  }
export default async function Page() {
//   const [data, setdata] = useState([]);
 let products= await datalist()
// console.log(products)
//   async function fetchData() {
//     const res = await fetch("https://dummyjson.com/products");
//     const datas = await res.json();
//     console.log(datas);
//     setdata(datas.products);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
  return (
    <>
      <h1>Product List</h1>
      {products.map((item) =>(  
        <div key={item.id}>
            <h4>{item.title}, Price: $ {item.price}</h4>
            <img src={item.images[0]}/>
            <Product title={item.title}/>
        </div>

        )
       
      )}
    </>
  );
}
