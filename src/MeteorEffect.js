import React from 'react';
import './MeteorEffect.css';

const MeteorEffect = ({ count = 5 }) => {
  const meteors = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: `${Math.random() * 7}s`,
    duration: '7s',
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    rotate: `${Math.random() * 360}deg`,
  }));

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] z-10"
          style={{
            top: meteor.top,
            left: meteor.left,
            transform: `rotate(${meteor.rotate})`,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        >
          <span className="absolute top-1/2 transform -translate-y-1/2 w-[50px] h-[1px] bg-gradient-to-r from-[#64748b] to-transparent"></span>
        </span>
      ))}
    </>
  );
};

export default MeteorEffect;
