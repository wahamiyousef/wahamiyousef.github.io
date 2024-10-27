import React from 'react'
import Exp from './Exp'
import blaise from '../assets/blaise.png'
import js from'../assets/javascript.svg'

function Experience() {
  return (
    <div id='experience' className='card' style={{marginBottom: '50px'}}>
      <div class='exp-title'>
        <h1 style={{marginBottom: '20px'}}>Experience</h1><h5>(Click on company for more info)</h5>
      </div>
      <Exp photo={blaise} time='Fall 2024' position='Backend Developer Intern' company='Blaise Transit'>
        {[
          "Used jest to unit test with high coverage of over 85%",
          "Item 2",
          "Item 3"
        ]}
      </Exp>
      <Exp photo="/path/to/photo.png" time="Jan 2022 - Present" company="ABC Corp" position="Software Engineer">
        {[
          "Item 1",
          "Item 2",
          "Item 3"
        ]}
      </Exp>

      <Exp photo={js} time='Summer 2025' position='Software Engineer Intern' company='Company' />
    </div>
  )
}

export default Experience