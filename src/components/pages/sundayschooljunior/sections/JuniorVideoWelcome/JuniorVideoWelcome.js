import React from 'react';
import './JuniorVideoWelcome.css';
import JuniorVideo from '../../../../../media/sundayschool/sunday-school-video.mp4';
import { Container } from 'react-bootstrap';

const JuniorVideoWelcome = () => {
  return (
    <section className="video-background-container">
      <Container fluid>
        {/* Video Background */}
        <video autoPlay loop muted className="video-background">
          <source src={JuniorVideo} type="video/mp4"/>
        </video>

        {/* Overlay */}
        <div className="video-overlay">
          <div className="overlay-content">
            <h1>Sunday School Presentations Corner</h1>
            <p>We are glad to have you here!</p>
            <button className="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JuniorVideoWelcome;
