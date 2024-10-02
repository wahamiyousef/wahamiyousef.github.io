import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='background'>
        <img src="" style={{height: '800px'}}/>
      </div>
      <div>
        <div className='home'>
          <h1>Yousef Al-Wahami</h1>
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
