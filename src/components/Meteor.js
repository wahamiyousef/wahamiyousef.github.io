import React, { useEffect, useState } from 'react';
import '../styles/meteor.css';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const Meteor = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const top = `${getRandomInt(0, 500)}px`;
    const left = `${getRandomInt(0, 500)}px`;
    const animationDelay =  0; // `${getRandomFloat(0, 5)}s`;
    const animationDuration = `${getRandomFloat(3, 10)}s`;

    setStyle({
      top,
      left,
      animationDelay,
      animationDuration,
      marginTop: '100px'
    });
  }, []);

  return <span className="meteor" style={style}></span>;
};

export default Meteor;
