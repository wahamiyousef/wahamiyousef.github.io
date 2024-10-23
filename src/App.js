import logo from './logo.svg';
import './App.css';
import './styles/meteor.css'
import './styles/location.css'
import Github from './assets/github.svg'
import Linkedin from './assets/linkedin.svg'
import Email from './assets/email.svg'
import Blob from './assets/blob8.png'
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
import Home from './components/Home';
import Experience from './components/Experience';

const MeteorShower = () => {
  const meteorCount = 10;

  return (
    <div>
      {Array.from({ length: meteorCount }).map((_, index) => (
        <Meteor key={index} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className='page'> 
      <div className='background' style={{position: 'fixed', paddingTop: '100px'}}>
        <img src={Blob} style={{height: '800px'}}/> 
        <MeteorShower />
        {/* <img src={Blob} style={{height: '800px'}}/> 
        #98a869 sage green 
        013f26 dark green*/}
      </div> 
      <div style={{display: 'flex', height: '80vh', justifyContent: 'space-between', width: '100vw'}}>

        <div style={{position: 'sticky', top: '0', height: '80vh', overflow: 'hidden' , minWidth: '700px',}}>
          <Home />
        </div>
        
        <div className='scrollable-content' style={{  width: '50%', overflowY: 'scroll', height: '100vh' }}>
          <Experience />
          <Experience />
          <Experience />
          <div id='projects' className='card'>
            <h1>Projects</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
