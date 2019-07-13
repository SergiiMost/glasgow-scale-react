import React from 'react'
import './GlasgowQuestion.css'

const GlasgowQuestion = (props) => {
  let show = props.displayAnswers ? 'inline-block' : 'none'
  return (
    < div className='GlasgowQuestion-container' >
      <span>{props.gElement}</span>
      <span  style={{ display: show }}>{props.gScore}</span>
    </div >
  )
}

export default GlasgowQuestion