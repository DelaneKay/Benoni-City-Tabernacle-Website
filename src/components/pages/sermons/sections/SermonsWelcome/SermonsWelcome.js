import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SermonsWelcome.css';
import MessageImage from '../../../../../media/Sermons/Pastor-2.jpg';
import CongregationImage from '../../../../../media/Sermons/Church-1.jpg';  

const SermonsWelcome = () => {

  const handleWatchNow = () => {
    const playerElement = document.querySelector('.react-player');
    if (playerElement) {
      playerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sermons-welcome-section">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left column with the image */}
          <Col xs={12} md={12} lg={6} className="sermons-image-col p-0">
            <img src={MessageImage} alt="Speaker" className="img-fluid full-height-image" />
          </Col>

          {/* Right column with image and overlay */}
          <Col  xs={12} md={12} lg={6} className="sermons-overlay-col p-0">
            <div className="sermons-overlay-container">
              <img src={CongregationImage} alt="Overlay background" className="img-fluid full-height-image" />
              <div className="sermons-overlay">
                <h1 className="sermons-title">WATCH MESSAGES</h1>
                <p className="sermons-description">
                  We believe church isn't a downloadable experience. We'd love to see you in-person this Sunday at 9:30AM and Wednesday at 6:30PM!
                </p>
                <Button variant="dark" className="watch-button" onClick={handleWatchNow}>Watch Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SermonsWelcome;
