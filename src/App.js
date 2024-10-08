import logo from './logo.svg';
import './App.css';
import './styles/meteor.css'
import './styles/location.css'
import Github from './assets/github.svg'
import Linkedin from './assets/linkedin.svg'
import Email from './assets/email.svg'
import Blob from './assets/blob2.png'
import nodejs from './assets/nodejs.svg'
import ts from './assets/typescript.svg'
import py from './assets/python.svg'
import java from './assets/java.svg'
import cpp from './assets/cpp.svg'
import js from'./assets/javascript.svg'
import Card from './components/Card';
import Exp from './components/Exp';

function App() {
  return (
    <div className='page' style={{paddingTop: '100px'}}>
      <div className='background'>
        <span 
          className="meteor" 
          style={{
            top: '0px', 
            left: '136px', 
            animationDelay: '0.208s', 
            animationDuration: '3s'
          }}
        ></span>
        <span 
          className="meteor" 
          style={{
            top: '100px', 
            left: '50px', 
            animationDelay: '1s', 
            animationDuration: '10s'
          }}
        ></span>
        <img src={Blob} style={{height: '800px'}}/>
      </div> 
      <div>
        <div id='home' className='card'>
          <h1>Hello I'm</h1>
          <h1>Yousef Al-Wahami</h1>
          <h2>A Software Engineer</h2>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div className="circle-container">
              <div className="inner-circle"></div>
              <div className="pulsating-circle"></div>
            </div>
            <h4>Ontario, Canada</h4>
          </div>
          <h2>My Tech Stack</h2>
          <div className='techStack'
          style={{
            display: 'grid', gridTemplateColumns: '142px 142px 142px 142px',
            gap: '10px', margin: '10px'
          }}>
            <Card variant='tech' photo={ts}>TypeScript</Card>
            <Card variant='tech' photo={py}>Python</Card>
            <Card variant='tech' photo={nodejs}>Node.js</Card>
            <Card variant='tech' photo={java}>Java</Card>
            <Card variant='tech' photo={cpp}>C/C++</Card>
            <Card variant='tech' photo={js}>JavaScript</Card>
          </div>
          <h2 style={{marginTop: '20px'}}>Socials</h2>
          <h4>Github, Linkedin, Email</h4>
        </div>

        <div className='about'>
          <h1>About Me</h1>
          <p>I am currently a student at the University of Windsor studying Computer Science.</p><br />
          <p>Here are some technologies I work with:</p>
          <ul className='techStack'>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
          </ul>
        </div>

        <div id='experience' className='card'>
          <h1>Experience</h1>
          <Exp photo={js} time='Fall 2024' position='Backend Developer Intern' company='Blaise Transit' />
          <Exp photo={js} time='Summer 2025' position='Software Engineer Intern' company='Company' />
        </div>

        <div className='projects'>
          <h1>Projects</h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
