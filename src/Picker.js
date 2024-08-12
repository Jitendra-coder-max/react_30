import React, { useState } from 'react'

const Picker = () => {

    const [colors, setColor]= useState(`00000`)

    
           const handleClick =()=>{

            // const letters = '0123456789ABCDEF'

            // let color = '#'

            // for(let i =0; i<6;i++){
            //  const indexColor= Math.floor(Math.random()*letters.length)

            //   color +=   letters[indexColor]   

           
            // }

            // setColor(color)
            const letters = ['red','blue', 'green', 'yellow']

            const findexColor =      Math.floor(Math.random()*letters.length)

            setColor(letters[findexColor])


            
          
}



           

  return (
    <div>Picker

        <button onClick={handleClick}>Click</button>
        <div style={{width:100,height:100, border:'1px solid gray', margin:'auto 100px',
          backgroundColor:colors
        }}>BOX</div>
    </div>
  )
}

export default Picker