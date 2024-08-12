import React, { useEffect, useState } from 'react'

const Items = () => {


    const [fruites, setFruites] = useState(['Apple','Banana', 'Popaya', 'Orange'])

    const [value, setValue] = useState('');

    const [editFruit, setEditfruit] = useState([])

    const handleChange =(e)=>{

        setValue(e.target.value)
    }
              

    useEffect(()=>{

        const filteredList=  fruites.filter((fruit) => fruit.toLowerCase().includes(value.toLowerCase()))

        setEditfruit(filteredList)

    },[editFruit])

         

  return (
    <div>Items

        <input  type='text' value={value}  onChange={ handleChange}/>

        <ul>
            {editFruit.map((fruit,index) =>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    </div>
  )
}

export default Items