import React, { useState } from 'react';

const Exp = ({ children, photo, time, company, position }) => {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
    backgroundColor: hover ? '#141414' : '#1E1E1E',
    backgroundColor: hover ? 'rgba(255, 255, 255, 0.1)' : 'rgba(50, 50, 50, 0.1)',
    backdropFilter: hover ? 'blur(10px)' : 'none',
    transform: hover ? 'translateY(-5px)' : 'translateY(0px)',
    color: '#DDDDDD',
    padding: '8px',
    height: '40px',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 150ms, transform 300ms',
  };

  const drawerStyles = {
    maxHeight: isOpen ? '200px' : '0',
    overflow: 'hidden',
    transition: 'max-height 300ms ease-in-out',
    backgroundColor: '#333', 
    borderRadius: '4px',
    marginTop: '10px',
    padding: isOpen ? '10px' : '0', // Only apply padding when open
  };

  return (
    <>
      {/* Clickable Exp Div */}
      <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
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
          <img src={photo} style={{ height: '35px' }} alt="Company Logo" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '700' }}>{position}</span>
            <span>{company}</span>
          </div>
        </div>
        <span>{time}</span>
      </div>

      {/* Drawer Content (appears below) */}
      <div style={{ ...drawerStyles }}>
        {isOpen && (
          <div style={{ padding: '10px' }}>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Exp;
