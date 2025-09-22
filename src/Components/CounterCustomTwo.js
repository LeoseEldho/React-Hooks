import React,{useState,useEffect} from 'react'
import UseCounter from '../Hooks/UseCounter'

function CounterCustomTwo() {
  const[count,increment,decremnt,reset]=UseCounter(10)
  return (
    <div>
    <h3>{count}</h3>
      <button onClick={increment}>Increment </button>
      <button onClick={reset}>Reset</button>
      <button onClick={decremnt}>Decremnt</button>
    </div>
  )
}

export default CounterCustomTwo