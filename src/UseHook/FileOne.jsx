import React, { useContext, useState } from 'react'
import {userContext} from './UseContext'

export default function FileOne() {
    const[name,setName]=useState("User!")
  return (
    <>
     <h1>Hello </h1> 
     <FileTwo />
    </>
  )
}

export function FileTwo(){
    const{count,setcount}=useContext(userContext)
    return(
        <>
        <h1>File 2 </h1>
        <button onClick={()=>setcount(count+1)}>Click {count}</button>
        <FileThree />
        </>
    )
}

export function FileThree({hello}){
    return(
        <>
        <h1>File 3 {hello}</h1>
        <FileFour name={hello}/>
        </>
    )
}

export function FileFour({name}){
    const{obj}=useContext(userContext)
    return(
        <>
        {
            obj.map((x)=>{
                return(
                    <div>{x.car} {x.color}</div>
                )
            })
        }
        <FileFive name={name}/>
        </>
    )
}

export function FileFive(){
const{count,setcount}=useContext(userContext)
    return(
        <>
        <h1>File 5 <br /> The Count is : {count}</h1>
        </>
    )
}



