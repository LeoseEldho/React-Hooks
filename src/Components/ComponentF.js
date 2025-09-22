// import React from 'react'
// import { UserContext,ChannelContext } from '../App'

// function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {user=>{
//             return (
//                 <ChannelContext.Consumer>
//                 {
//                     channel=>{
//                         return <div>User Contex value{ channel} {user}</div>
//                     }
//                 }
//                 </ChannelContext.Consumer>
//             )
//         }}
//       </UserContext.Consumer>
//     </div>
//   )
// }

// export default ComponentF
import React ,{useContext}from 'react'
import {  countContext } from '../App'

function ComponentF() {
    const countCtx=useContext(countContext)
    
  return (
    <div>
      <button onClick={()=>countCtx.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countCtx.countDispatch('decremnt')}>Decrement</button>
      <button onClick={()=>countCtx.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF
