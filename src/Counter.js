import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

   useEffect(() =>{

   },[])
    
const increment = ()=>{

   
    setInterval(()=>{
        setCount(prevCount=> prevCount+1)

    },1000)
   

    
  
   
}

const decrement = ()=>{

  setInterval(()=>{
        setCount(prevCount=> prevCount-1)

    },1000)
}





  return (
    <div>
<h1>{count}</h1>
        <button  onClick={increment} >Counter increment</button>
        <button  onClick={decrement}    >Counter increment</button>
    </div>
  )
}

export default Counter