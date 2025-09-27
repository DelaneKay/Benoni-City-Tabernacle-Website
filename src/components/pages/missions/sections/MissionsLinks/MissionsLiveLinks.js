import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./MissionsLiveLinks.css"

const MissionsLiveLinks = () => {
  return (
    <section className="missions-live-links-bar">
        <Container>
        <Row className="justify-content-center">
            <Col xs="auto" className="sunday-school-presentations-live-col">
            <a href="https://www.youtube.com/@clayviewspokenword7940" className="missions-live-link">Missionary Work</a>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default MissionsLiveLinks
