import logo from './logo.svg';
import './App.css';
import './styles/meteor.css'
import './styles/location.css'
import Github from './assets/github.svg'
import Linkedin from './assets/linkedin.svg'
import Email from './assets/email.svg'
import Blob from './assets/blob7.png'
import nodejs from './assets/nodejs.svg'
import ts from './assets/typescript.svg'
import py from './assets/python.svg'
import java from './assets/java.svg'
import cpp from './assets/cpp.svg'
import js from'./assets/javascript.svg'
import blaise from'./assets/blaise.png'
import Card from './components/Card';
import Exp from './components/Exp';
import Button from './components/Button';

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
        {/* <img src={Blob} style={{height: '800px'}}/> 
        #98a869 sage green 
        013f26 dark green*/}
      </div> 
      <div>
        <div id='home' className='card' style={{marginBottom: '150px'}}>
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

            <div style={{paddingBottom: '30px'}}>
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
            </div>

            <h2 style={{marginTop: '20px'}}>Socials</h2>
            <div
            style={{
              display: 'grid', gridTemplateColumns: '50px 50px 50px',
              gap: '10px', margin: '10px'
            }}>
              <Button target="_blank" link='https://www.github.com/wahamiyousef' photo={Github} variant='socials'></Button>
              <Button target="_blank" link='https://www.linkedin.com/yousef-alwahami' photo={Linkedin} variant='socials'></Button>
              <Button target="_blank" link='mailto:alwahami.yousef@gmail.com' photo={Email} variant='socials'></Button>
            </div>
          </div>
        </div>


        <div id='experience' className='card'>
          <div class='exp-title'>
            <h1 style={{marginBottom: '20px'}}>Experience</h1><h5>(Click on company for more info)</h5>
          </div>
          <Exp photo={blaise} time='Fall 2024' position='Backend Developer Intern' company='Blaise Transit'>
            <p></p>
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

        <div className='projects'>
          <h1>Projects</h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
