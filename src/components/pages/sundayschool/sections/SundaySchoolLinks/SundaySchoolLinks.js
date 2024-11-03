import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import './SundaySchoolLinks.css'

const SundaySchoolLinks = () => {
  return (
    <section className="sunday-school-links-bar">
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col xs={6} md={6} lg={6}>
                <h4 className="text-center sunday-school-live-link">Junior Sunday School Corner</h4>
                </Col>
                <Col xs={6} md={6} lg={6}>
                <h4 className="text-center sunday-school-live-link">Senior Sunday School Corner</h4>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SundaySchoolLinks
