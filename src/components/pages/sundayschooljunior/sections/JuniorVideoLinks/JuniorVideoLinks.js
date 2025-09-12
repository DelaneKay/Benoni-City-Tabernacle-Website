import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './JuniorVideoLinks.css'

const JuniorVideoLinks = () => {
  return (
    <section className="sunday-school-presentations-live-links-bar">
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto" md={3} className="sunday-school-presentations-live-col">
                <a href="https://www.youtube.com/@BCTSundaySchool" className="sunday-school-presentations-live-link">Watch on YouTube</a>
                </Col>
                <Col xs="auto" md={3} className="sunday-school-presentations-live-col">
                <a href="#youtube" className="sunday-school-presentations-live-link">Watch on our Apple app</a>
                </Col>
                <Col xs="auto" md={3} className="sunday-school-presentations-live-col">
                <a href="#youtube" className="sunday-school-presentations-live-link">Watch on our Android app</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default JuniorVideoLinks
