import React ,{useState,useMemo}from 'react'

function Counter() {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)

let incrementBtn=()=>{
    setCounterOne(counterOne+1)
}

let incrementBtnTwo=()=>{
    setCounterTwo(counterTwo+1)
}

let isEven=useMemo(()=>{
    let i=0
    while(i<200000000)i++
    return counterOne%2==0
},[counterOne]
)

  return (
    <div>
      <div >{counterOne} {isEven?'Even':'Odd'}</div>
      <button onClick={incrementBtn}>incremnt One</button>
      <div>{counterTwo}</div>
      <button onClick={incrementBtnTwo} >  incremnt Two</button>
    </div>
  )
}

export default Counter
