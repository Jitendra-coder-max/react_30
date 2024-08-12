import React, { useState } from 'react'

const Child = ({setCount}) => {
const handleClick =()=>{

  setCount('hello')
}
  
  return (
    <div>Child
<button onClick={handleClick} >increment</button>

    </div>
  )
}

export default Child