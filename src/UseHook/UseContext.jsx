import React, { createContext, useState } from 'react'
import { FileTwo } from './FileOne'

export const userContext=createContext()

 const UseContext = ({children}) => {
    const [count,setcount]=useState(0)
    const obj=[
        {car:'ford',
        color:'red'},
        {
            car:"bmw",
            color:"black"
        }
        ]
  return (
    <div>
      <userContext.Provider value={{count,setcount,obj}}>
        {/* <FileTwo/> */}
        {children}
      </userContext.Provider>
    </div>
  )
}
//ssdfhuk
export default UseContext
