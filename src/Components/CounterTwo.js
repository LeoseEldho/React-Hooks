import React,{useReducer} from 'react'


let initialstate={
    firstCounter:0
}
const reduser=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter+action.value}
        case 'decremnt':
            return {firstCounter:state.firstCounter-action.value}
        case 'reset':
            return initialstate
        default: 
            return state
    }
}

function CounterTwo() {
 const [count,dispatch]= useReducer(reduser,initialstate)
  return (
    <div>
        <div>Countm={count.firstCounter}</div>
      <button onClick={()=>dispatch({type: 'increment',value:1})}>Increment</button>
      <button onClick={()=> dispatch({type : 'decremnt',value:1})}>Decrement</button>
      <button onClick={()=> dispatch({type:'increment',value:5})}>Increment + 5</button>
      <button onClick={()=> dispatch({type:'decremnt',value:5})}>Decrement - 5</button>
      <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo
