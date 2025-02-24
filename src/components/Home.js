import React from 'react'
import TechCard from './TechCard'
import Button from './Button'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Email from '../assets/email.svg'
import nodejs from '../assets/nodejs.svg'
import ts from '../assets/typescript.svg'
import py from '../assets/python.svg'
import java from '../assets/java.svg'
import cpp from '../assets/cpp.svg'
import c from '../assets/c.png'
import js from'../assets/javascript.svg'
import mysql from '../assets/mysql.png'
import '../styles/home.css'

function Home() {
  return (
    <div id='home' style={{marginBottom: '150px'}}>
      <div className='homePage'>
        <div className='homeIntro'>
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

        <div className='wrapper'>
          <div style={{width: '200px'}}>
            <Button style={{width: '200px'}} link="/alwahami.yousef.pdf" target="_blank" variant='resume'>View Resume</Button>
          </div>
          

          <div>
            <h2>My Tech Stack</h2>
            <div className='techStack'>
              <TechCard variant='tech' photo={ts}>TypeScript</TechCard>
              <TechCard variant='tech' photo={py}>Python</TechCard>
              <TechCard variant='tech' photo={nodejs}>Node.js</TechCard>
              <TechCard variant='tech' photo={java}>Java</TechCard>
              <TechCard variant='tech' photo={c}>C</TechCard>
              <TechCard variant='tech' photo={js}>JavaScript</TechCard>
              <TechCard variant='tech' photo={mysql}>MySQL</TechCard>
            </div>
          </div>

          <h2>Socials</h2>
          <div className='socials'>
            <Button target="_blank" link='https://www.github.com/wahamiyousef' photo={Github} variant='socials'></Button>
            <Button target="_blank" link='https://www.linkedin.com/in/yousef-al-wahami/' photo={Linkedin} variant='socials'></Button>
            <Button target="_blank" link='mailto:alwahami.yousef@gmail.com' photo={Email} variant='socials'></Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home