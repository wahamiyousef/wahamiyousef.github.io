import logo from './logo.svg';
import './App.css';
import './MeteorEffect.css'
// import MeteorEffect from './MeteorEffect';

function App() {
  return (
    <div className=''>
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
        <img src="../assets/blob2.png" style={{height: '800px'}}/>
      </div> 
      <div>
        <div className='home'>
          <h1>Yousef Al-Wahami</h1>
          <h4 className='location'>Ontario, Canada</h4>
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
            <li>C#</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default App;
