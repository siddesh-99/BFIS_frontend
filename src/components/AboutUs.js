// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Create this file for custom styles
import AboutUsBackgroundImage from '../assets/backgrountAboutUs.jpg'

const AboutUs = () => {
  return (
    
    <div className="about-us-container">
      <div
        style={{
          ...textContainerStyle,
          backgroundImage: `url(${AboutUsBackgroundImage})`,
        }}
      >

      </div>
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      
      <section className="about-us-section">
        <h2>Our Story</h2>
        <p>
          Bright Future Infotech was founded with a mission to bridge the gap between industry demands and workforce capabilities. Our comprehensive training programs are designed to equip professionals with the skills needed to excel in the rapidly evolving tech industry.
        </p>
      </section>
      
      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          To provide high-quality education and training that empowers individuals to achieve their career goals and contribute meaningfully to the tech industry.
        </p>
      </section>
      
      <section className="about-us-section">
        <h2>Our Vision</h2>
        <p>
          To be a leading provider of tech education, recognized for our innovative approach, commitment to quality, and success in preparing our students for the challenges of the modern workplace.
        </p>
      </section>
      
      <section className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member-1.jpg" alt="Team Member 1" className="team-member-photo" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="team-member-2.jpg" alt="Team Member 2" className="team-member-photo" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="team-member-3.jpg" alt="Team Member 3" className="team-member-photo" />
            <h3>Mary Johnson</h3>
            <p>Head of Education</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      
      <footer className="about-us-footer">
        <p>© 2023 Bright Future Infotech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;

const textContainerStyle = {
  textAlign: "center",
  height: "60vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};