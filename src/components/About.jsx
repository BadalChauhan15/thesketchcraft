import React from "react";
import "./About.css";
import Me from './images/Me.jpeg';

function About() {
  return (
    <div className="about-me sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center h-56 w-full sm:h-60 md:h-80 lg:w-full lg:h-full">
          <img src={ Me } alt="About Me" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">About Me</h1>
          
          <p className="text-gray-700">
          I am a passionate sketch artist dedicated to transforming imagination into reality through intricate lines and shading. With each creation, I aim to capture expressions and emotions that tell a story. My work combines attention to detail and a deep love for visual storytelling, inviting viewers to connect with art that’s more than just an image — it’s an experience. Each piece is crafted to resonate and inspire, echoing my dedication to translating creativity onto paper.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;