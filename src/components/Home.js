import React from 'react'
import Card from './Card'
import Button from './Button'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Email from '../assets/email.svg'
import nodejs from '../assets/nodejs.svg'
import ts from '../assets/typescript.svg'
import py from '../assets/python.svg'
import java from '../assets/java.svg'
import cpp from '../assets/cpp.svg'
import js from'../assets/javascript.svg'
import mysql from '../assets/mysql.png'
import resume from '../assets/yousefalwahami.pdf'
import '../styles/home.css'

function Home() {
  return (
    <div id='home' style={{marginBottom: '150px'}}>
      <div style={{padding: '20px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '50px'}}>
          <div>
            <h1>Hello I'm</h1>
            <h1>Yousef Al-Wahami</h1>
            <h2>A Software Engineer</h2>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', paddingBottom: '30px'}}>
            <div className="circle-container">
              <div className="inner-circle"></div>
              <div className="pulsating-circle"></div>
            </div>
            <h4>Ontario, Canada</h4>
          </div>
        </div>

        <div style={{width: '200px'}}>
          <Button link={resume} target="_blank" variant='resume'>View Resume</Button>
        </div>
        

        <div style={{paddingBottom: '30px'}}>
          <h2>My Tech Stack</h2>
          <div className='techStack'>
            <Card variant='tech' photo={ts}>TypeScript</Card>
            <Card variant='tech' photo={py}>Python</Card>
            <Card variant='tech' photo={nodejs}>Node.js</Card>
            <Card variant='tech' photo={java}>Java</Card>
            <Card variant='tech' photo={cpp}>C/C++</Card>
            <Card variant='tech' photo={js}>JavaScript</Card>
            <Card variant='tech' photo={mysql}>MySQL</Card>
          </div>
        </div>

        <h2 style={{marginTop: '20px'}}>Socials</h2>
        <div className='socials'>
          <Button target="_blank" link='https://www.github.com/wahamiyousef' photo={Github} variant='socials'></Button>
          <Button target="_blank" link='https://www.linkedin.com/in/yousef-al-wahami/' photo={Linkedin} variant='socials'></Button>
          <Button target="_blank" link='mailto:alwahami.yousef@gmail.com' photo={Email} variant='socials'></Button>
        </div>
      </div>
    </div>
  )
}

export default Home