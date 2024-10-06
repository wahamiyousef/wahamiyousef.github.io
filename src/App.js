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
import Card from './components/Card';

function App() {
  return (
    <div className='page'>
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
        <div className='home'>
          <h1>Hello I'm</h1>
          <h1>Yousef Al-Wahami</h1>
          <h2>A Software Engineer</h2>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div className="circle-container">
              <div className="inner-circle"></div>
              <div className="pulsating-circle"></div>
            </div>
            <h4>Ontario, Canada</h4>
            <h4>Github, Linkedin, Email</h4>
          </div>
          <h2>My Tech Stack</h2>
          <div style={{display: 'flex', gap: '10px'}}>
            <Card photo={nodejs}>NodeJs</Card>
            <Card photo={ts}>TypeScript</Card>
            <Card photo={py}>Python</Card>
            <Card photo={java}>Java</Card>
          </div>
          
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
        
      </div>
    </div>
  );
}

export default App;
