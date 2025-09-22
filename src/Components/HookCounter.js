import React,{useState} from 'react'

function HookCounter() {
   let [count,ClickHandler] = useState(0)
  return (
    <div>
      <button onClick={()=> ClickHandler(count+1)}>The Count: {count}</button>
    </div>
  )
}
export default HookCounter
