import React, { Component } from 'react'

class ClassTimer extends Component {
    intervel
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    componentDidMount(){
        this.intervel=setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervel)
    }

  render() {
    return (
      <div>
        ClassTimer-{this.state.timer}<br></br>
        <button onClick={()=> clearInterval(this.intervel)}>clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer
