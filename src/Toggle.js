import React, { useState } from 'react'

const Toggle = () => {

    const [show, setShow] = useState(false)


  return (
    <div>

        {/* <button  onClick={ ()=> setShow(!show)} >{show? 'hide': 'show'}</button> */}

        <input type="checkbox"  onChange={()=> setShow(!show)}/>

        {show ? <div>Show value </div>: null}
    </div>
  )
}

export default Toggle