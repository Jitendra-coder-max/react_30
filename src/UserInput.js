import React, { useState } from 'react'

const UserInput = () => {

    const [inputVal, setInputVal] = useState('')

    console.log(inputVal)
  return (
    <div>UserInput
<h1>{inputVal}</h1>
        <input  type="text" placeholder='enter text'  value={inputVal}  onChange={(e)=> setInputVal(e.target.value)}/>
    </div>
  )
}

export default UserInput