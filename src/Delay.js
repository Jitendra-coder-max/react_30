import React from 'react'

const Delay = () => {


    const debounce =(func,delay)=>{
let timer

     return (...args)=>{

    clearTimeout(timer);

   timer= setTimeout(()=>{  func.apply(this,args)}, delay)
     }
    }

   const handleChange = debounce((e)=>{
    console.log(e.target.value)
   },3000)
  return (
    <div>Delay

        {/* <input onChange={handleChange}/> */}
        <input onChange={handleChange} />
    </div>
  )
}

export default Delay