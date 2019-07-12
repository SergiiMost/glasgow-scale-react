import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About-container'>
      <h2>About <i className="material-icons">build</i> </h2>
      <p>&nbsp; This tool was created for medical professionals to help them practise and  memorize the Glasgow Coma Scale. </p>
      <p>&nbsp;  Sometimes, it may generate unlikely scenarios, however, there was no goal to prevent it from happening  because it 
        doesn't affect the general idea behind this tool. An example of unlikely scenario would be: best eye opening - no eye
        opening (1), best verbal response - orientated(5),  best motor response - obeys commands(6).</p>     
      <p>&nbsp; Detailed information about  the Glasgow Coma Scale can be found on <a href="https://en.wikipedia.org/wiki/Glasgow_Coma_Scale" target='_blank' rel="noopener noreferrer">Wikipedia</a></p>
    </div>
  )
}

export default About