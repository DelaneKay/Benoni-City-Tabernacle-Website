import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./LiveLinks.css"

const LiveLinks = () => {
  return (
    <div className="live-links-bar">
        <Container>
        <Row className="justify-content-center">
            <Col xs="auto">
            <a href="https://www.youtube.com/@BenoniCityTabernacle" className="live-link">Watch Live on YouTube</a>
            </Col>
            <Col xs="auto">
            <a href="#youtube" className="live-link">Watch Live on Website</a>
            </Col>
            <Col xs="auto">
            <a href="#youtube" className="live-link">Watch Live on our Apple app</a>
            </Col>
            <Col xs="auto">
            <a href="#youtube" className="live-link">Watch Live on our Google app</a>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default LiveLinks
