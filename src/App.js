import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'
import Counter from './components/Counter'
import Restart from './components/Restart'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      boxesArray: [...Array(9).fill("?")],
      currentIndex: [],
      treasure: Math.floor(Math.random() * 9),
      bomb:Math.floor(Math.random() * 9),
      clickCounter: 5
    }
  }
  locationChecker = () =>{
    let {treasure, bomb} = this.state

    while (treasure === bomb) {
      treasure = Math.floor(Math.random() * 9)
      this.setState({treasure: treasure})
    }
  }

  treasureHunt = (index) =>{
    //replace string of "?" to tree icon
    let {boxesArray, treasure, clickCounter, bomb} = this.state

    if (clickCounter > 0) {
        if (index === treasure) {
          boxesArray[index] = "🎁"
          setTimeout(function () {
             alert("You win!")
          }, 350)
        } else if (index === bomb) {
          boxesArray[index] = "💣"
          setTimeout(function () {
             alert("You lose!")
          }, 350)
        }else {
          boxesArray[index]= "🌳"
          clickCounter -= 1
          }
      this.setState({clickCounter: clickCounter})
      this.setState({boxesArray: boxesArray})
      console.log(clickCounter);
    }else {
      setTimeout(function () {
         alert("You lose!")
      }, 350)
    }
  }

  restartButton = () =>{
    window.location.reload()
  }
    render(){
      let { boxesArray } = this.state
      let boxes = boxesArray.map((box, index) => {
        return (
        <Square
          questionMark = { box }
          index = { index }
          key = { index }
          treasureHunt = {this.treasureHunt}
        />

      )
    })
    return(
      <div>
        <h1>Treasure Hunt App</h1>
        <div id = "gameboard"> { boxes }</div>
        <Counter
        counter = { this.state.clickCounter }
        />
        <Restart
        restartButton = {this.restartButton}
        />
      </div>
    )
  }
}
export default App
