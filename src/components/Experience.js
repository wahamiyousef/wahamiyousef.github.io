import React from 'react'
import Exp from './Exp'
import blaise from '../assets/blaise.png'
import js from'../assets/javascript.svg'

function Experience() {
  return (
    <div id='experience' className='card' style={{marginBottom: '50px'}}>
      <div className='exp-title'>
        <h1 style={{marginBottom: '20px'}}>Experience</h1><h5>(Click on company for more info)</h5>
      </div>
      <Exp photo={blaise} time='Fall 2024' position='Backend Developer Intern' company='Blaise Transit'>
        {[
          "Startup providing on-demand transit solutions to enhance sustainability and accessibility in public transportation",
          "Achieved over 85% high test coverage using Jest, ensuring robustness and reliability of backend systems",
          "Managed CI/CD pipelines, version control, and task tracking using Azure DevOps while reviewing pull requests to ensure coding standards and optimize code quality",
        ]}
      </Exp>
      <Exp time='Winter 2024' position='Software Developer Intern' company='NextRipple'>
        {[
          "Developed a full-stack Task Management System for admin task assignment and status tracking using React.js, Node.js, Express.js, and MongoDB",
          "Built and maintained RESTful APIs using Node.js and Express.js for efficient communication between the front-end and back-end",
          "Utilized Mongoose to connect, query, and manage data in MongoDB"
        ]}
      </Exp>
    </div>
  )
}

export default Experience