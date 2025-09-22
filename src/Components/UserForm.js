import React ,{useState}from 'react'
import Useinput from '../Hooks/Useinput'

function UserForm() {

   const[firstName,bindfirstName,resetfirstName]= Useinput('')
   const[lastName,bindlastName,resetlastName]=Useinput('')

    let submitHandler=(e)=>{
      e.preventDefault()
      alert(`Hello ${firstName} ${lastName}`)
      resetfirstName()
      resetlastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
            <label>FirstName</label>
            <input {...bindfirstName} type='text'/>
            </div>
            <div>
            <label>LastName</label>
            <input {...bindlastName}type='text'/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm
