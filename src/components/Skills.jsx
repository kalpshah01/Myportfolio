import React from 'react';
import { skillProgress } from '../data.js';
import '../styles/Skills.css';

export function Skills() {
  return (
    <section className="my-skills" id="skills">
      <div className="container">
        <div className="skills">
          <h2>My Skills</h2>
          <p>I am a passionate and dedicated web developer with strong technical and communication skills. I enjoy building user-friendly websites and constantly learning new technologies to enhance my work. Below are the core skills I bring to the table:</p>
          <ul>
            <li><strong>Front-end Development:</strong> HTML, CSS, JavaScript, React</li>
            <li><strong>Back-end Development:</strong> PHP, MySQL, Python</li>
            <li><strong>Basic Graphic Design:</strong> Creating banners, logos, and simple designs</li>
            <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem-Solving, Adaptability</li>
          </ul>
       
          <button className="my-button">Contact Me</button>
        </div>
        <div className="progress">
          {skillProgress.map((skill) => (
            <div key={skill.name} className="technique">
              <h3>{skill.name}</h3>
              <div><span style={{ width: `${skill.percentage}%` }}>{skill.percentage}% &nbsp;</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
