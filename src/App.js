import './App.css';
import './styles/meteor.css'
import './styles/location.css'
import Blob from './assets/realblob.png'
import Meteor from './components/Meteor';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='page'> 
      <div className='background' style={{position: 'fixed', }}>
        <img src={Blob} className='background-img'/> 
        <MeteorShower />
        {/* <img src={Blob} style={{height: '800px'}}/> 
        #98a869 sage green 
        013f26 dark green*/}
      </div>
      <div className='main-page'> {/* display: 'flex',  justifyContent: 'space-between', height: '80vh',paddingTop: '96px' */}

        <div className='page-content'>
          
          <div className='home-content'>
            <Home />
          </div>
          
          <div className='info-content'>
            <div>
              <Experience />
              <Projects />
              <span style={{display: 'block', paddingBottom: '40px'}}></span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
