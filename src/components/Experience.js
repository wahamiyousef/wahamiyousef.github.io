import React from 'react'
import Exp from './Exp'
import blaise from '../assets/blaise.png'
import winhackslogo from '../assets/winhackslogo.png'
import gadgetrixlogo from '../assets/gadgetrixlogo.png'

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
      <Exp photo={winhackslogo}  time='Sep 2023 - Feb 2024' position='Software Developer' company='WinHacks (Hackathon)'>
        {[
          "Maintained and enhanced the website with Bootstrap serving over 180 users, ensuring robust performance and user satisfaction",
          "Coordinated with hackathon organizers to define project requirements, align on development strategies, and ensure timely delivery of features",
          "Contributed to website development through coding, UI/UX design, and content creation, improving overall functionality and user experience",
        ]}
      </Exp>
      <Exp photo={gadgetrixlogo} time='Oct 2021 - May 2022' position='Software Developer Team Lead' company='Gadgetrix'>
        {[
          "Local non-profit organization/club providing valuable information to the community about technology",
          "Directed a team in creating and curating engaging content, including blogs, videos, and posts, to educate and inform about technology trend",
          "Held weekly meetings to set goals, discuss future objectives, and stay updated on the latest relevant information for the website",
        ]}
      </Exp>
    </div>
  )
}

export default Experience