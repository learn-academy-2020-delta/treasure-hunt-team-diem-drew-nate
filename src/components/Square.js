import React, { Component } from 'react'

class Square extends Component{
  render(){
    return(
      <div id = "square" onClick = { () => {this.props.alert(currentBox, currentIndex)} }>
        {this.props.questionMark}
      </div>
    )
  }
}
export default Square
