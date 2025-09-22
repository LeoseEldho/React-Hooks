import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer,settimer]=useState(0)
    const intervelRef=useRef()
    
    useEffect(()=>{
         intervelRef.current=setInterval(() => {
            settimer(x=> x+1)
        },1000 )
        return()=>{
            clearInterval(intervelRef.current)
        }
    },[])
  return (
    <div>
        {timer}<br></br>
      <button onClick={()=> clearInterval(intervelRef.current)}>Clear Timer</button>
    </div>
  )
}
//dhdfhuc
export default HookTimer
