import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      boxesArray: [...Array(9).fill("?")],
      currentIndex: []

    }
  }

  alertForMark = (currentBox, currentIndex) => {
    alert(`That square has index ${this.state.boxesArray[currentIndex]}`)
  }

  render(){
    let { boxesArray } = this.state
    let boxes = boxesArray.map((box, index) => {
      return (
        <Square
          questionMark = { box }
          index = { index }
          key = { index }
          alert = {this.alertForMark}
        />
      )
    })
    return(
      <div>
        <h1>Treasure Hunt App</h1>
        <div id = "gameboard"> { boxes }</div>
      </div>
    )
  }
}
export default App
