import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SermonsWelcome.css';
import JuniorVideo from '../../../../../media/sundayschool/College-Two-Cities-Church.mp4';

const SermonsWelcome = () => {

  const handleWatchNow = () => {
    const playerElement = document.querySelector('.react-player');
    if (playerElement) {
      playerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sermon-video-background-container">
      <Container fluid>
        {/* Video Background */}
        <video autoPlay loop muted className="sermon-video-background">
          <source src={JuniorVideo} type="video/mp4"/>
        </video>

        {/* Overlay */}
        <div className="sermon-video-overlay">
          <div className="sermon-overlay-content">
            <h1>Welcome to our Sermons Corner</h1>
            <p>We believe church isn't a downloadable experience. We'd love to see you in-person this Sunday at 9:30AM and Wednesday at 6:30PM!</p>
            <button className="btn btn-outline-light">Watch Now</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SermonsWelcome;
