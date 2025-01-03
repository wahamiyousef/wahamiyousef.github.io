import React, { useState, useEffect } from 'react';
import Default from '../assets/default.png';

const Exp = ({ children, photo=Default, time, company, position }) => {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Update screenWidth on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(screenWidth);
  console.log(hover);

  // Styles for the experience item
  const expStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    margin: '1rem 0',
    backgroundColor:
      screenWidth > 600 && hover
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(50, 50, 50, 0.3)', // Hover effect only for screenWidth > 600
    // backdropFilter: screenWidth > 600 && hover ? 'blur(10px)' : 'none',
    // transform: screenWidth > 600 && hover ? 'translateY(-5px)' : 'translateY(0px)',
    color: '#DDDDDD',
    padding: '8px',
    height: 
      screenWidth > 600
        ? '40px'
        : '80px',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 150ms, transform 300ms',
  };

  const drawerStyles = {
    // !! this removes the animation from 0 -> 200
    //maxHeight: isOpen ? '200px' : '0',
    overflow: 'hidden',
    transition: 'max-height 300ms ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    marginTop: '10px',
    padding: isOpen ? '10px' : '0',
  };

  const isList = Array.isArray(children);

  return (
    <>
      {/* Clickable Exp Div */}
      <div
        onMouseEnter={() => {
          if (screenWidth > 600) setHover(true);
        }}
        onMouseLeave={() => {
          if (screenWidth > 600) setHover(false);
        }}
        onClick={toggleDrawer}
        style={expStyles}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px'
          }}>
          <img src={photo} style={{ height: '35px' }}/>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '700' }}>{position}</span>
            <span>{company}</span>
          </div>
        </div>
        <span style={{textAlign: 'right'}}>{time}</span>
      </div>

      {/* Drawer Content (appears below) */}
      <div style={{ ...drawerStyles }}>
        {isOpen && (
          <div style={{ padding: '10px' }}>
            {isList ? (
              <ul>
                {children.map((child, index) => (
                  <li key={index} style={{ marginBottom: '5px', marginLeft: '15px' }}>{child}</li>
                ))}
              </ul>
            ) : (
              <div>{children}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Exp;
