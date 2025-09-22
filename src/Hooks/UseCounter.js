import {useState} from 'react'

function UseCounter(intinalCont=0) {
  let [count,setCount]=useState(intinalCont)
    let increment=()=>{
        setCount(prev=> prev+1)
    }
    let reset=()=>{
        setCount(0)
    }
    let decremnt=()=>{
        setCount(prev=> prev-1)
    }
    return [count,increment,reset,decremnt]
}


export default UseCounter
