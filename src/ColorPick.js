import React, { useState } from 'react'

const ColorPick = () => {

    const [selecctedColor, setSelectedColor] = useState('#000000');

    const handleChange =(e)=>{
        setSelectedColor(e.target.value)
    }
  return (
    <div>ColorPick

        <input type='color' onChange={handleChange}  />
        <div style={{width:500, height:100, backgroundColor:selecctedColor, margin:100}}>box</div>
    </div>
  )
}

export default ColorPick