import React,{useRef} from 'react'


const RefComp = () => {

       const num =     useRef(null)

       const handleClick =()=>{

        // console.log(num.current)
         num.current.value = '1000'
         num.current.focus()
         num.current.style.color='red'
        
        //  num.current.style.display='none'
       }
     
  return (
    <div>RefComp

        <input  type="number" ref={num}/>

        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default RefComp

// import React, { useRef } from 'react';

// const RefComp = () => {
//   const count = useRef(0);

//   const handleClick = () => {
//     count.current += 1;
//     console.log('clicked');
   

//     console.log(count.current)
//   };

  

//   return (
//     <div>
//       RefComp
//       <p>{count.current}</p>
//       <button onClick={handleClick}>click</button>
//     </div>
//   );
// };

// export default RefComp;
