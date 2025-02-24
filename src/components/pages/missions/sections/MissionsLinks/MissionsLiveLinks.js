import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./MissionsLiveLinks.css"

const MissionsLiveLinks = () => {
  return (
    <section className="missions-live-links-bar">
        <Container>
        <Row className="justify-content-center">
            <Col xs="auto" md={3}>
            <a href="https://www.youtube.com/@clayviewspokenword7940" className="missions-live-link">Watch on YouTube</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="missions-live-link">Watch on Website</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="missions-live-link">Watch on our Apple app</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="missions-live-link">Watch on our Android app</a>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default MissionsLiveLinks
