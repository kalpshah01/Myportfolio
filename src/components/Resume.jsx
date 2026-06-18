import React from 'react';
import { education, experience } from '../data.js';
import '../styles/Resume.css';

export function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2>Resume</h2>
        <p>A comprehensive overview of my education, work experience, and technical skills, highlighting <br /> my journey as a web developer and my proficiency in key technologies.</p>
        <a href="./public/Web Development Intern-kalpshah_resume.pdf" download>
          <button className="my-button">Download Resume</button>
        </a>
      </div>

      
      <div className="my-education">
        <div className="container">
          <div className="main">
            <h2 className="he">My Education</h2>
            <p className="paragrph">
              I have completed my Bachelor of Computer Applications (BCA) from Hemchandracharya North Gujarat University (HNGU) in 2025 and am now pursuing a Master of Computer Applications (MCA) to further enhance my technical expertise. During my studies, I built a strong foundation in web development, programming concepts, and database management.
            </p>
            <p className="paragrph">
              I completed my 12th grade with 85% and 10th grade with 80%, demonstrating consistent academic performance. Alongside my formal education, I am continuously enhancing my skills through online courses, self-learning, and hands-on practice projects.
            </p>
          </div>
          <div className="exp">
            {education.map((edu) => (
              <div key={edu.id} className="certificate">
                <h3 className="he">{edu.degree}</h3>
                <span className="sp"><strong>{edu.institution}</strong> <br /> {edu.duration}</span>
                {edu.gpa && <span>{edu.gpa}</span>}
                {edu.percentage && <span>Percentage: {edu.percentage}</span>}
                {edu.details && <span>{edu.details}</span>}
                <hr className="hr" />
              </div>
            ))}
          </div>
          <div className="clearfix"></div>
          <hr className="hr" />

          {/* Work Experience Section */}
          <div className="main">
            <h2 className="he">Work Experience</h2>
            <p className="paragrph">As a fresher, I am eager to apply my skills in real-world scenarios. I gained valuable experience during my internships and other relevant activities:</p>
          </div>
          <div className="exp">
            {experience.map((exp) => (
              <div key={exp.id} className="certificate">
                <h3 className="he">{exp.title}</h3>
                <span className="sp"><strong>{exp.organization}</strong> / {exp.duration}</span>
                <span>{exp.months}</span>
                <hr className="hr" />
                <p className="paragrph">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
