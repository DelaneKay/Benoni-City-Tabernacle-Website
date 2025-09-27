import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './WilliamBranhamLinks.css'

const WilliamBranhamLinks = () => {
  return (
    <section className="william-branham-links-bar">
        <Container>
        <Row className="justify-content-center">
            <Col xs="auto" md={3} className="william-branham-link">
            <a href="https://branham.org/home" className="william-branham-link">Branham.org</a>
            </Col>
            <Col xs="auto" md={3} className="william-branham-link">
            <a href="https://themessage.com/en/home" className="william-branham-link">TheMessage.com</a>
            </Col>
            <Col xs="auto" md={3} className="william-branham-link">
            <a href="https://table.branham.org/#/en/main" className="william-branham-link">The Table</a>
            </Col>
            <Col xs="auto" md={3}className="william-branham-link">
            <a href="https://branham.org/en/MessageAudio" className="william-branham-link">Audio Sermons</a>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default WilliamBranhamLinks
