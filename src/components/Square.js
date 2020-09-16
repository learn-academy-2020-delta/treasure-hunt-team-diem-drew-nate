import React, { Component } from 'react'

class Square extends Component{
  render(){
    let { index } = this.props
    return(
      <div id = "square" onClick = { () => {this.props.treasureHunt(index)} }>
        {this.props.questionMark}
      </div>
    )
  }
}
export default Square
