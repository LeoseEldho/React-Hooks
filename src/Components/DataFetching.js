import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const[post,setpost]=useState({})
    const[id,setId]=useState(1)
    const[idBtn ,setIdBtn]=useState(1)

let clickHandler=()=>{
  setIdBtn(id)
}

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
        .then(response=>{
            console.log(response)
            setpost(response.data)
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[idBtn])

  return (
    <div>
      <input type='text' value={id} onChange={e=> setId(e.target.value)} ></input>
      <button onClick={clickHandler}>Fetch Post</button>
      <div>{post.title}</div>
    </div>
  )
}

export default DataFetching
