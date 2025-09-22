import React,{useState,useEffect} from 'react'
import UseDocumentTitle from '../Hooks/UseDocumentTitle'

function DocTitleTwo() {
    const [count,setCout]=useState(0)    
    UseDocumentTitle(count)
  return (
    <div>
      <button onClick={()=> setCout(count+1)}>Increment: {count} Count</button>
      
    </div>
  )
}
//djkcisnfk
export default DocTitleTwo
