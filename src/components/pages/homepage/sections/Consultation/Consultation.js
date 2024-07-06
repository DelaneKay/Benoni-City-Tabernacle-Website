import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Consultation.css';


const Consultation = () => {
  return (
    <section className="consultation-section">
      <Container className='consultation-section-container'>
        <div className="d-flex align-items-center">
            <h2>FREE CONSULTATION</h2>
            <p>Get an appointment with one of our leaders</p>
        </div>
        
        <Form >
          <Row >
            <Col md={3}>
              <Form.Group controlId="name">
                <Form.Control type="text" placeholder="Your Name*" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="email">
                <Form.Control type="email" placeholder="Your E-mail*" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="phone">
                <Form.Control type="tel" placeholder="Your Phone*" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Button variant="primary" type="submit" className="btn-appointment">
              Contact us
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default Consultation
