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
import mysql from './assets/mysql.png'
import blaise from'./assets/blaise.png'
import Card from './components/Card';
import Exp from './components/Exp';
import Button from './components/Button';
import Meteor from './components/Meteor';

const MeteorShower = () => {
  const meteorCount = 10; // You can adjust the number of meteors

  return (
    <div className="meteor-container">
      {Array.from({ length: meteorCount }).map((_, index) => (
        <Meteor key={index} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className='page' style={{paddingTop: '100px'}}>
      <div className='background' style={{position: 'fixed',}}>
        <img src={Blob} style={{height: '800px'}}/> 
        <MeteorShower />
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
                <Card variant='tech' photo={mysql}>MySQL</Card>
              </div>
            </div>

            <h2 style={{marginTop: '20px'}}>Socials</h2>
            <div
            style={{
              display: 'grid', gridTemplateColumns: '50px 50px 50px',
              gap: '10px', margin: '10px'
            }}>
              <Button target="_blank" link='https://www.github.com/wahamiyousef' photo={Github} variant='socials'></Button>
              <Button target="_blank" link='https://www.linkedin.com/in/yousef-al-wahami/' photo={Linkedin} variant='socials'></Button>
              <Button target="_blank" link='mailto:alwahami.yousef@gmail.com' photo={Email} variant='socials'></Button>
            </div>
          </div>
        </div>


        <div id='experience' className='card' style={{marginBottom: '150px'}}>
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

        <div id='projects' className='card'>
          <h1>Projects</h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
