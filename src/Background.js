import React, { useState } from 'react'
import './background.css'
const Background = () => {

  const [show, setShow] = useState(true)


  // const  handleClick=()=>{
  //   setShow(!show)
    
  // }
  return (
    // <div   style={{backgroundColor:show? 'on':'off'}}>Background
    <div   className={show? 'on': 'off'}>Background


      <button onClick={ ()=> setShow(!show)}
     > Background</button>
    </div>
  )
}

export default Background