import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import JuniorVideo from '../../../../../media/sundayschool/sunday-school-video.mp4';
import './SundaySchoolWelcome.css'

const SundaySchoolWelcome = () => {

  // Function to handle "Watch Now" button click
  const handleLearnMore = () => {
    const sundaySchoolSection = document.getElementById('sunday-school'); // Reference the SundaySchoolLinks section by its id
    if (sundaySchoolSection) {
      sundaySchoolSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sunday-school-video-background-container">
      <Container fluid>
        {/* Video Background */}
        <video autoPlay loop muted className="sunday-school-video-background">
          <source src={JuniorVideo} type="video/mp4"/>
        </video>

        {/* Overlay */}
        <div className="sunday-school-video-overlay">
          <div className="sunday-school-overlay-content">
            <h1>Welcome to our Sunday School Corner</h1>
            <p>Training kids and young people in the way of the Lord according to the message of the hour. We'd love to see your children in-person this Sunday at 9:30AM!</p>
            <button className="btn btn-outline-light" onClick={handleLearnMore}>Learn More</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SundaySchoolWelcome
