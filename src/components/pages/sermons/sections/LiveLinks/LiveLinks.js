import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./LiveLinks.css"

const LiveLinks = () => {
  return (
    <section className="live-links-bar">
        <Container>
        <Row className="justify-content-center">
            <Col xs="auto" md={3}>
            <a href="https://www.youtube.com/@BenoniCityTabernacle" className="live-link">Watch Live on YouTube</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="live-link">Watch Live on Website</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="live-link">Watch Live on our Apple app</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="live-link">Watch Live on our Android app</a>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default LiveLinks
