import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'
import Counter from './components/Counter'
import Restart from './components/Restart'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      boxesArray: [...Array(25).fill("?")],
      currentIndex: [],
      treasure: Math.floor(Math.random() * 25),
      bomb1:Math.floor(Math.random() * 25),
      bomb2:Math.floor(Math.random() * 25),
      bomb3:Math.floor(Math.random() * 25),
      clickCounter: 10
    }
  }
  locationChecker = () =>{
    let {treasure, bomb1, bomb2, bomb3} = this.state
    while(bomb1 === bomb2 || bomb1 === bomb3 ) {
      bomb1 = Math.floor(Math.random() * 25)
      this.setState({bomb1: bomb1})
    }
    while(bomb2 === bomb1 || bomb2 === bomb3 ) {
      bomb2 = Math.floor(Math.random() * 25)
      this.setState({bomb2: bomb2})
    }
    while(bomb3 === bomb1 || bomb3 === bomb2 ) {
      bomb3 = Math.floor(Math.random() * 25)
      this.setState({bomb3: bomb3})
    }
    while (treasure === bomb1 || treasure === bomb2 || treasure === bomb3) {
      treasure = Math.floor(Math.random() * 25)
      this.setState({treasure: treasure})
    }
  }

  treasureHunt = (index) =>{
    //replace string of "?" to tree icon
    let {boxesArray, treasure, clickCounter, bomb1, bomb2, bomb3} = this.state
    console.log("treasure:", treasure, "bomb1:", bomb1, "bomb2:", bomb2, "bomb3:", bomb3)
    if (clickCounter > 0) {
        if (index === treasure) {
          boxesArray[index] = "💰"
          setTimeout(function () {
             alert("You win!")
          }, 350)
        } else if (index === bomb1 || index === bomb2 || index === bomb3) {
          boxesArray[index] = "💣"
          setTimeout(function () {
             alert("You lose!")
          }, 350)
        }else {
          boxesArray[index]= "🧗‍♂️"
          clickCounter -= 1
          }
      this.setState({clickCounter: clickCounter})
      this.setState({boxesArray: boxesArray})
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
        <h1 id="title">Spelunk for Treasure!</h1>
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
