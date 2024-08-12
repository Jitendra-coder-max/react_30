import React, { useState } from 'react'

const Products = () => {


  const [cart, setCart] = useState([])

  const products = [
    {id:1, name: 'Product A'},
    {id:2, name: 'Product B'},
    {id:3, name:'Product C'}


  ]

  const addToCart =(product)=>{

    // setCart([...cart,product])

    // setCart((prevCart)=>([...prevCart,product]))

    setCart((prevCart)=>{

          const existingProdcut  =prevCart.find((item) => item.id===product.id )
          console.log('item',existingProdcut)

         if(existingProdcut){

                 return   prevCart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity+1} : item)
         }

         else{

          return [...prevCart,{...product, quantity:1}]
         }

    })

  }

  console.log(cart)
  return (
    <div>Products
<h1>Shoping cart</h1>
<h1>Product List</h1>

      <ul>
        {products.map(({id,name}) =>{
          return (
            <li key={id}>{name}
            <button onClick={()=> addToCart({id,name})}>Add to Cart</button></li>
          )
        })}
      </ul>

      <h1>Cart</h1>

      <ul>{
        cart.map(({id,name,quantity})=>{
          return(
            <li key={id}>{name} Quantity-{quantity}</li>
          )
        })}</ul>
    </div>
  )
}

export default Products