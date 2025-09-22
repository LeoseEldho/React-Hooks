// import React,{useContext} from 'react'
// import ComponentF from './ComponentF'
// import { UserContext,ChannelContext } from '../App'
// function ComponentE() {
//     const user=useContext(UserContext)
//     const channel=useContext(ChannelContext)
//   return (
//     <div>
//       {/* <ComponentF></ComponentF> */}
//       {user}{channel}
//     </div>
//   )
// }

// export default ComponentE
import React from 'react'
import ComponentF from './ComponentF'

function ComponentE() {
  return (
    <div>
      <ComponentF></ComponentF>
    </div>
  )
}

export default ComponentE

