import React from 'react'
import { useState } from 'react'
import '../styles/techcard.css'

const TechCard = ({ children, photo }) => {
  const [hover, setHover] = useState(false);

  const defaultStyles = {
    display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    padding: '10px 10px',
    width: '120px',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'default',
    border: '1px solid #4C4C4C',
    color: '#333333',
    backgroundColor: hover ? '#141414' : '#1E1E1E',
    transform: hover ? 'translateY(-5px)' : 'translateY(0px)',
    transition: 'all 300ms',
    color: '#DDDDDD',
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      //style={defaultStyles}
      className='techcard'
    >
      <img src={photo} style={{height: '27px'}}/>
      {children}
    </div>
  );
}

export default TechCard