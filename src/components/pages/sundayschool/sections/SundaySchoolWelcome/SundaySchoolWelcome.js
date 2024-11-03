import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import JuniorVideo from '../../../../../media/sundayschool/College-Two-Cities-Church.mp4';
import './SundaySchoolWelcome.css'

const SundaySchoolWelcome = () => {
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
            <p>Training kids and young people in the way of the Lord according to the message of the day. We'd love to see your children in-person this Sunday at 9:30AM!</p>
            <button className="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SundaySchoolWelcome
