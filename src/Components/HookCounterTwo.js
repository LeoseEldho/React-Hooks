import React,{useState} from 'react'

function HookCounterTwo() {
    let initialcount=0
    const[count,setCount]=useState(initialcount)
   let incremntFive=()=>{
        // setCount(count+5)
        for(let i=0; i<5; i++){
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
      <h2>Count:{count}</h2>
        <br></br>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Incremtn</button>
      <button onClick={()=> setCount(initialcount)}>Reset</button>
      <button onClick={()=> setCount(prevCount=>prevCount-1)}>Decremnt</button>
      <br></br>
      <button onClick={incremntFive}>Incremnt Five</button>
    </div>
  )
}
export default HookCounterTwo
