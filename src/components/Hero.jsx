import React from 'react';
import '../styles/Hero.css';

export function Hero() {
  return (
    <section className="features" id="home">
      <div className="container">
        <div className="feat">
          <h2>Who Am I?</h2>  
          <p>I am a passionate Web Developer with a strong foundation in HTML, CSS, JavaScript, React, PHP, and MySQL. I love creating simple and user-friendly websites, and I am eager to start my journey in the tech industry through an internship opportunity.</p>
        </div>
        <div className="feat goals">
          <h2>Career Goals</h2>
          <p>My short-term goal is to get an internship where I can apply my knowledge, improve my skills with real-world projects, and prepare myself for a successful career in web development.</p>
        </div>
        <div className="feat vision">
          <h2>Learning Journey</h2>
          <p>I have built my basics through self-learning, online tutorials, and hands-on practice. I am continuously improving my skills and ready to learn more by working in a real industry environment.</p>
        </div>
      </div>
    </section>
  );
}
