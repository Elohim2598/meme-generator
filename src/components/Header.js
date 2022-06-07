import React from 'react';
import './header.css';
import logo from '../assets/headerlogo.png';
import { useSpring, animated } from 'react-spring';

export function Header({ children }) {
  const style1 = useSpring({
    from: { opacity: 0, marginRight: 500 },
    to: { opacity: 1, marginRight: 0 },
    delay: 500,
  });

  return (
    <animated.div style={style1} className="header--container">
      <header className="header">
        <img src={logo} className="header--logo" alt="logo" />
        <h1 className="header--title">Meme Generator</h1>
      </header>
      {children}
    </animated.div>
  );
}
