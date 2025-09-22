import React,{useState} from 'react'

function HookCounterFour() {
    const [items,setItems]=useState([])

let addItem=()=>{
    setItems([...items,{
        id:items.length,
        value: Math.floor(Math.random()*10)+1
        
    }])
}
  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.forEach(x=>{
            <li key={x.key}>{x.value}</li>
        })}
      </ul>
    </div>
  )
}
export default HookCounterFour
