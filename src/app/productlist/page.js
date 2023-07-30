import Image from "next/image";
import Product from "./product";
import bk from '../../../public/bk.jpg'

async function datalist(){
    const res = await fetch("https://dummyjson.com/products");
    const datas = await res.json();
    return datas.products
  }
export default async function Page() {
 let products= await datalist()

  return (
    <>
      <h1>Product List</h1>
      <Image priority={true} alt="Img" src={bk} width='200' height='200'/>
      {products.map((item) =>(  
        <div key={item.id}>
            <h4>{item.title}, Price: $ {item.price}</h4>
            {/* <img src={item.images[0]} width='200' height='200'/> */}
      <Image alt="Img" priority={true} src={item.images[0]} width='200' height='200'/>

            <Product title={item.title}/>
        </div>

        )
       
      )}
    </>
  );
}
export function generateMetadata(){
  return{
    title:"Mobile List",
    description:"Mobile description"
  }
}