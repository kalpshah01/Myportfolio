import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { projectsByTech } from '../data.js';
import '../styles/Contact.css';

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-me" id="contact">
      <div className="container">
        <div className="info">
          <h2>Contact Me</h2>
          <p className="paragrph">Kalp Shah</p>
          <address className="paragrph">
            Vesu <br />
            Surat 395007<br />
            Gujarat<br />
          </address>
          <p className="paragrph">
            <strong>Email:</strong> kalpshah962005@gmail.com <br />
            <strong>Phone:</strong> +91 9408417561
            <br />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/kalp-shah-b2074227a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/kalpshah01/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://facebook.com/kalp.kalp.56863" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="mailto:kalpshah962005@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
          />
          <label>Message *</label>
          <textarea
            name="message"
            rows={10}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <input type="submit" value="Contact Me" />
        </form>
      </div>
    </section>
  );
}
