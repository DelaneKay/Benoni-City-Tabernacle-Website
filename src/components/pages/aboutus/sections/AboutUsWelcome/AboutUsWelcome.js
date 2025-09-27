import React from 'react';
import { Container } from 'react-bootstrap';
import JuniorVideo from '../../../../../media/sundayschool/sunday-school-video.mp4'; // Adjust path if needed
import './AboutUsWelcome.css';

const AboutUsWelcome = () => {

  // Scroll to "about-details" section on Learn More click
  const handleLearnMore = () => {
    const aboutDetailsSection = document.getElementById('about-details');
    if (aboutDetailsSection) {
      aboutDetailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-us-video-background-container">
      <Container fluid>
        {/* Background Video */}
        <video autoPlay loop muted className="about-us-video-background">
          <source src={JuniorVideo} type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <div className="about-us-video-overlay">
          <div className="about-us-overlay-content">
            <h1>Welcome to Benoni City Tabernacle</h1>
            <p>We are a Bible-based church devoted to the full Word of God, where every soul matters and Christ remains central to all we do. Discover our vision, our history, and our mission to serve you.</p>
            <button className="btn btn-outline-light" onClick={handleLearnMore}>Learn More</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsWelcome;
