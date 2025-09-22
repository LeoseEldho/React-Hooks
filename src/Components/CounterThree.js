import React,{useReducer} from 'react'

let initialstate=0
const reduser=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decremnt':
            return state -1
        case 'reset':
            return initialstate
        default: 
            return state
    }
}
//udfyul
function CounterThree() {
 const [count,dispatch]= useReducer(reduser,initialstate)
 const [countTwo,dispatchTwo]=useReducer(reduser,initialstate)
  return (
    <div>
        <div>Countm={count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decremnt')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>

      <div>Countm={countTwo}</div>
      <button onClick={()=>dispatchTwo('increment')}>Increment</button>
      <button onClick={()=>dispatchTwo('decremnt')}>Decrement</button>
      <button onClick={()=>dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree
