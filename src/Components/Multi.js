import React, { useState } from 'react'

const Multi = () => {

    const [state, setState]= useState({count:0,text:'Hello World', isActive:true})

    const increment =()=>{

        setState({...state,count:state.count+1})

    }

    const changeText =()=>{

        setState({...state,text:'UPDATED TEXT'})

    }

    const toggleActive =()=>{

        setState({...state, isActive: !state.isActive})

    }
  return (
    <div>
        <h1>Multiple State Example</h1>
        <p>Count:{state.count}</p>
        <p>Text:{state.text}</p>
        <p>Active:{state.isActive ? 'YES': 'NO'}</p>

        <button  onClick={increment}>Increment</button>
        <button  onClick={changeText}>Text Change</button>
        <button onClick={toggleActive}> Toggle Active</button>
    </div>
  )
}

export default Multi