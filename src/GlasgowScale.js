import React, { Component } from 'react'
import GlasgowQuestion from './components/GlasgowQuestion/GlasgowQuestion'
import GlasgowForm from './components/GlasgowForm/GlasgowForm'
import GlasgowResultIcon from './components/GlasgowResultIcon/GlasgowResultIcon'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import './GlasgowScale.css'

import { scale } from './data/GlasgowData'
import { getRandomIntInclusive } from './helpers/randomIntInclusive'


class GlasgowScale extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalScore: '',
      userAnswer: '',
      userInput: '',
      elements: [],
      displayAnswers: false,
      soloQuestion: false
    }
  }

  componentDidMount() {
    this.generateRandom()
  }

  generateRandom = () => {
    let eyeNum = getRandomIntInclusive(1, 4)
    let verbalNum = getRandomIntInclusive(1, 5)
    let motorNum = getRandomIntInclusive(1, 6)
    this.setState({
      elements: [scale.eye[eyeNum], scale.verbal[verbalNum], scale.motor[motorNum]],
      totalScore: eyeNum + verbalNum + motorNum,
      userAnswer: '',
      userInput: '',
      displayAnswers: false
    })
  }

  generateRandomSolo = () => {
    let num = getRandomIntInclusive(1, 3)
    let obj
    if (num === 1) obj = scale['eye']
    else if (num === 2) obj = scale['verbal']
    else obj = scale['motor']
    let num2 = getRandomIntInclusive(1, Object.keys(obj).length)
    this.setState({
      elements: [obj[num2]],
      totalScore: num2,
      userAnswer: '',
      userInput: '',
      displayAnswers: false
    })
  }

  addUserAnswer = (num) => {
    this.setState({ userAnswer: '' }, () => {
      this.setState({ userAnswer: num })
    })
  }

  userInputChange = (input) => {
    this.setState({ userInput: input })
  }

  handleSoloClick = () => {
    this.setState(oldState => {
      return { soloQuestion: !oldState.soloQuestion }
    }, () => { this.state.soloQuestion ? this.generateRandomSolo() : this.generateRandom() })
  }

  handleDisplayAnswers = () => {
    this.setState({ displayAnswers: !this.state.displayAnswers })
  }

  handleNextQuestion = () => {
    this.state.soloQuestion ? this.generateRandomSolo() : this.generateRandom()
  }

  render() {
    let elements = this.state.elements.map(e => <GlasgowQuestion gElement={e.text} gScore={e.score} displayAnswers={this.state.displayAnswers} />)
    let icon = this.state.userAnswer === '' ? '' : <GlasgowResultIcon totalScore={this.state.totalScore} userAnswer={this.state.userAnswer} />
    let color = '#e3f2fd';
    if (this.state.userAnswer !== '') {
      this.state.userAnswer == this.state.totalScore ? color = '#c8e6c9 ' : color = '#ffcdd2 '
    }

    return (
      <div>
        <Navbar />
        <div className='GlasgowScale-container'>
          <div className='GlasgowScale-btn'>
            <button onClick={this.handleSoloClick}>{this.state.soloQuestion ? 'Glasgow scale' : 'Solo element'} &rarr;</button>
            <button onClick={this.handleDisplayAnswers}>{this.state.displayAnswers ? 'Hide answer' : 'Display answer'} &rarr;</button>
          </div>
          <div className='GlasgowScale-controlers ' style={{ backgroundColor: color }}>
            <GlasgowForm addUserAnswer={this.addUserAnswer} userInputChange={this.userInputChange} userInput={this.state.userInput} />
            <div className='GlasgowScale-controlers-icon'>{icon}</div>
            <button onClick={this.handleNextQuestion} className='GlasgowScale-controlers-next' >Next </button>
          </div>
          <div className='GlasgowScale-elements-container'>
            <div className='GlasgowScale-elements'>
              <p> Patient: </p>
              {elements}
              {this.state.displayAnswers ? <p className='GlasgowScale-answer'>Total: {this.state.totalScore}</p> : ''}
            </div>
          </div>
        </div>
        <About />
        <Footer/>
      </div>
    )
  }
}

export default GlasgowScale

