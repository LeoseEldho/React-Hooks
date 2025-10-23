import React,{useState,useEffect} from 'react'
import UseDocumentTitle from '../Hooks/UseDocumentTitle'

function DocTitleOne() {
    const [count,setCout]=useState(0)    
    UseDocumentTitle(count)
  return (
    <div>
      <button onClick={()=> setCout(count+1)}>Increment: {count} Count</button>
      
    </div>
  )
}

export default DocTitleOne
