import React from 'react'

const Disp = () => {

    const items = ['Apple', 'Banana', 'Orange', 'Popaya']
  return (
    <div>

        <ul>{items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))
            
            
            }</ul>
    </div>
  )
}

export default Disp