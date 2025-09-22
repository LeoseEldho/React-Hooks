import React ,{useContext}from 'react'
import {  countContext } from '../App'

function ComponentA() {
    const countCtx=useContext(countContext)
    
  return (
    <div>
      <button onClick={()=>countCtx.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countCtx.countDispatch('decremnt')}>Decrement</button>
      <button onClick={()=>countCtx.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
