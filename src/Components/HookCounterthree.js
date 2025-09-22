import React ,{useState}from 'react'

function HookCounterthree() {
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <form>
      <input type='text' value={name.firstName} onChange={event=> setName({...name,firstName:event.target.value})}/>
      <input type='text' value={name.lastName} onChange={event=> setName({...name,lastName:event.target.value})}/>
      <h2>Your FirstName is -{name.firstName}</h2>
      <h2>Your LastName is -{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterthree
