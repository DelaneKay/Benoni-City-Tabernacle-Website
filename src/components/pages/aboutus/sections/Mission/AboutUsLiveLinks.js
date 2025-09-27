import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./AboutUsLiveLinks.css";

const AboutUsLiveLinks = () => {
  return (
    <section className="about-us-live-links-bar">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto" className="about-us-presentations-live-col">
            <a className="about-us-live-link">
              Benoni City Tabernacle
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsLiveLinks;
