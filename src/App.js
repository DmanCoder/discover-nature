import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/main.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {}, []);
  
  return (
    <div className="App">
      <div className="bg-overlay">
        <span>Discover</span>
      </div>
      <nav className="top-navigation">
        <ul>
          <li>DISCOVER</li>
          <li>About</li>
          <li>Stories</li>
          <li>Learn</li>
          <li>Growth</li>
          <li>Contact</li>
          <li>
            <span className="material-icons">menu</span>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <header>
          <h1>
            Experience your <br /> next chapter.
          </h1>
        </header>

        <span className="banner__find-more">Find out more</span>

        <p className="banner__msg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
          recusandae quos. Modi perferendis eum, suscipit reiciendis ratione
          mollitia facilis consectetur beatae.
        </p>
      </div>
    </div>
  );
}

export default App;
