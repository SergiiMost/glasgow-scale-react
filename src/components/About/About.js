import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About-container'>
      <h2>User Manual <i className="material-icons">book</i></h2>
      <p>&nbsp; This tool was created for medical professionals to help them practise and  memorize the <span className='highlighted'> Glasgow Coma Scale</span>. </p>
      <p>&nbsp; The <span className='highlighted'>Glasgow Coma Scale (GCS)</span> is a neurological scale that provides
        a way of recording the state of a person's consciousness for initial as well as subsequent
        assessments.</p>
      <p>&nbsp; A patient can score between 3 and 15, where 3 indicates deep unconsciousness.
        The  scale  has 3 components  where a patient's response is scored from 1 (no response)  up to
        normal values: best eye response (1-4), best verbal response(1-5), best motor response (1-6).&nbsp;
        <span className='highlighted'>Therefore, a correct answer may be in the range from 3 to 15.</span>
      </p>
      <p>&nbsp;  Sometimes, it may generate unlikely scenarios, however, there was no goal to prevent it from happening  because it
        doesn't affect the general idea behind this tool. An example of unlikely scenario would be: best eye opening - no eye
        opening (1), best verbal response - orientated(5),  best motor response - obeys commands(6).</p>
      <p>When the <span className='highlighted'>'Solo component ->' </span> option is chosen, a random  question from one of 3 components is displayed. <span className='highlighted'>Therefore,  a correct
        answer may be in the range  from 1 to 6.</span> </p> 
      <p>&nbsp; Detailed information about  the Glasgow Coma Scale can be found on <a href="https://en.wikipedia.org/wiki/Glasgow_Coma_Scale" target='_blank' rel="noopener noreferrer">Wikipedia</a>.</p>
    </div>
  )
}

export default About

