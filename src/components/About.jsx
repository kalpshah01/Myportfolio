import React from 'react';
import '../styles/About.css';

export function About() {
  return (
    <section className="about-me" id="aboutme">
      <div className="containerB">
        <div className="image">
          {/* <img src="profile.png" alt="Profile Photo" /> */}
          <img src="profiles.png" alt="Profile Photo"   />

        </div>
        <div className="info">
          <h2>About Me</h2>
          <p>Hi, I'm Kalp Shah, a Bachelor of Computer Applications (BCA) graduate, Class of 2025, and currently pursuing a Master of Computer Applications (MCA). I am passionate about web development and continuously work on improving my skills in HTML, CSS, JavaScript, React, PHP, and MySQL.</p>
          <p>In 2024, I completed a 2-month experience at Sardar Patel High School, where I taught the staff how to effectively use various technology tools. Although it was outside the core IT field, this opportunity helped me build strong communication skills, technical training experience, and confidence in applying technology in real-world situations.</p>
          <p>Now, I am excited to continue my career journey with internships and real-world projects, where I can apply my skills, learn from industry professionals, and grow into a strong Web Developer.</p>
        </div>
      </div>
    </section>
  );
}
