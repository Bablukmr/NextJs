"use client"
function Product(props) {
  return (
    <div>
        <button onClick={()=>alert(`This is ${props.title}`)}>Check Product</button>
    </div>
  )
}

export default Product