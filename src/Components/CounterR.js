import React, { useReducer } from 'react'

const CounterR = () => {

    const initialState={count:0}


    const reducer =(state,action)=>{
      switch(action.type){
        case 'increment':
            return {count: state.count+1};
      
      case 'decrement':

      return {count: state.count-1};

      case 'reset':
        return{count:0}
      
        default:

         throw new Error('unexpected Error')

      }

    }


    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>CounterR

        <button onClick={()=> dispatch({type:'increment'})}>INCREMNET</button><br/>
<button  onClick={()=> dispatch({type:'decrement'})}>DECREMENT</button>
<button onClick={()=> dispatch({type:'reset'})}>RESET</button>

<h1>{state.count}</h1>
    </div>
  )
}

export default CounterR