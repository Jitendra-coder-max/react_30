import React, { useState } from 'react'
import Child from './Child'
const Parent = () => {

  const [count,setCount] = useState(0)
  return (
    <div>Parent

      {count}
      <Child  setCount={setCount}/>
    </div>
  )
}

export default Parent