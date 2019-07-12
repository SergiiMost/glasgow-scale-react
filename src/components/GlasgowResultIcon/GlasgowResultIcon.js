import React from 'react'
import './GlasgowResultIcon.css'

const GlasgowResultIcon = (props) => {
  let icon
  props.totalScore == props.userAnswer ? icon = <i className="material-icons animated fadeIn green ">check_circle</i> : icon = <i className="material-icons animated fadeIn red">cancel</i>
  return <p>{icon}</p>
}

export default GlasgowResultIcon

