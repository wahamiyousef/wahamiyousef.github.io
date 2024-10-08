import React from 'react'
import { useState } from 'react'

const Exp = ({ children, photo, time, company, position }) => {
  const [hover, setHover] = useState(false);

  const defaultStyles = {
    display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'default',

    backgroundColor: hover ? '#141414' : '#1E1E1E',
    backgroundColor: hover ? 'rgba(255, 255, 255, 0.1)' : '#1E1E1E',
    backdropFilter: hover ? 'blur(10px)' : 'none',
    transform: hover ? 'translateY(-5px)' : 'translateY(0px)',
    color: '#DDDDDD',
    padding: '8px',
    height: '40px',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 150ms, transform 300ms',
    /*
    hover:bg-white/10 
    hover:backdrop-blur 
    rounded-md 
    p-2 
    transition-colors 
    duration-90000 
    items-center
    */
  };

  const styles = {
    tech: {
      padding: '10px 10px',
      width: '120px',
      border: '1px solid #4C4C4C',
      color: '#333333',
      backgroundColor: hover ? '#141414' : '#1E1E1E',
      transform: hover ? 'translateY(-5px)' : 'translateY(0px)',
      transition: 'all 300ms',
      color: '#DDDDDD',
    },
    exp: {
      
    },
  }


  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={defaultStyles}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px'
        }}>
        <img src={photo} style={{height: '27px'}}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>{position}</span>
          <span>{company}</span>
        </div>
      </div>
      {time}
    </div>
  );
}

export default Exp