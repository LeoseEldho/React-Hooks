import React ,{useState,useEffect}from 'react'

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

  
let logMousePosition=e=>{
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
}
useEffect(()=>{
    console.log('use')
    window.addEventListener('mousemove',logMousePosition)

    return ()=>{
        console.log('Component unmounting code ')
        window.removeEventListener('mousemove',logMousePosition)
    }
},[]) 

  return (
    <div>
      Hooks x:-{x} y:{y}
    </div>
  )
}

export default HookMouse
