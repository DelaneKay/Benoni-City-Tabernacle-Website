import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './WilliamBranhamLinks.css'

const WilliamBranhamLinks = () => {
  return (
    <section className="william-branham-links-bar">
        <Container>
        <Row className="justify-content-center">
            <Col xs="auto" md={3}>
            <a href="https://www.youtube.com/@BenoniCityTabernacle" className="william-branham-link">Watch on YouTube</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="william-branham-link">Watch on Website</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="william-branham-link">Watch on our Apple app</a>
            </Col>
            <Col xs="auto" md={3}>
            <a href="#youtube" className="william-branham-link">Watch on our Android app</a>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default WilliamBranhamLinks
