import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import './SundaySchoolLinks.css'

const SundaySchoolLinks = () => {
  return (
    <section className="sunday-school-links-bar">
        <Container>
            <Row className="justify-content-center">
                <Col xs={6} md={6} lg={6}>
                <a href="#youtube" className="sunday-school-live-link">Junior Sunday School Presentations</a>
                </Col>
                <Col xs={6} md={4} lg={4}>
                <a href="#youtube" className="sunday-school-live-link">Senior Sunday School Presentations</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SundaySchoolLinks
