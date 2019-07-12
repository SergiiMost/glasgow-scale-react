import React, { Component } from 'react'
import './GlasgowForm.css'

class GlasgowForm extends Component {

  handleChange = (e) => {
    this.props.userInputChange(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addUserAnswer(this.props.userInput)
  }

  render() {
    return (
      
        <form onSubmit={this.handleSubmit} className='GlasgowForm' >
          <input type='text' value={this.props.userInput} onChange={this.handleChange} maxLength="2" autoFocus />
          <button>Check </button>
        </form>
    
    )
  }
}

export default GlasgowForm