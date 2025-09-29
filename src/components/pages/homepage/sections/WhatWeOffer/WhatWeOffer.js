import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../../../../../media/homepage/message-3.jpg';
import image2 from '../../../../../media/homepage/message-bible.jpg';
import image3 from '../../../../../media/homepage/message-4.png';
import image4 from '../../../../../media/homepage/message-2.jpg';
import './WhatWeOffer.css'

const WhatWeOffer = () => {
  return (
    <section className="container-custom">
      <Container>
            <h2 className="title-custom">WHAT WE OFFER</h2>
            <Row>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image1} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Explore the Bible Truth with Us</Card.Subtitle>
                    <Card.Title className="card-title-custom">Sermons and Teachings</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image2} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Take Part</Card.Subtitle>
                    <Card.Title className="card-title-custom">Our Events</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image3} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Locations</Card.Subtitle>
                    <Card.Title className="card-title-custom">Our Church</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image4} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Join Our Communities</Card.Subtitle>
                    <Card.Title className="card-title-custom">Online Presence</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
    </section>
  )
}

export default WhatWeOffer
