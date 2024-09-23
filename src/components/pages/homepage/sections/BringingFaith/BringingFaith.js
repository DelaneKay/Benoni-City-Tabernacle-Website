import React from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import backgroundImage from '../../../../../media/homepage/img8.jpg';
import profileImage from '../../../../../media/homepage/img7.jpg';
import './BringingFaith.css'

const testimonials = [
  {
    text: "Now, the Coming is so imminent, the Second Coming of Jesus, He’s gathering His Elected together. I believe that. Oh, they’ll come from the East and West. Where the carcass is, the eagles gather.",
    author: "Rev. William M. Branham",
  },
  {
    text: "Now, the Coming is so imminent, the Second Coming of Jesus, He’s gathering His Elected together. I believe that. Oh, they’ll come from the East and West. Where the carcass is, the eagles gather.",
    author: "Rev. William M. Branham",
  },
  {
    text: "Now, the Coming is so imminent, the Second Coming of Jesus, He’s gathering His Elected together. I believe that. Oh, they’ll come from the East and West. Where the carcass is, the eagles gather.",
    author: "Rev. William M. Branham",
  },
];

const BringingFaith = () => {
  return (
    <section className='faith'>
      <Container>
        <Row style={{marginTop: '2rem'}}>
          <Col xs={12} md={6} lg={6}>
            <h2>BRINGING THE ENDTIME MESSAGE TO YOUR LIFE FOR OVER 8 YEARS</h2>
            <p>Our church is not just a gathering place; it is a sanctuary where seekers of truth find solace, where the weary find rest, and where the lost find direction. </p>
            <p>We invite all who are earnestly seeking truth to come and worship with us, to experience the transformative power of God's presence and the prophetic legacy that continues to shape our faith journey. Together, let us prepare ourselves for the coming of our Lord, knowing that in Him, we find hope, peace, and eternal salvation. </p>
            <Button variant="outline-light" style={{borderRadius: '0%'}}>Learn More</Button>
          </Col>
          <Col xs={12} md={6} lg={6} className="testimonial-section">
            <Image src={backgroundImage} fluid className="background-image" />
            <div className="carousel-wrapper testimonial">
                <Carousel indicators={false} controls={false}>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                    <div>
                        <Row className="testimonial-content">
                        <Col md={1} style={{marginTop: '0.5rem'}}><div className="vertical-line"></div></Col>
                        <Col ><p className="testimonial-text">{testimonial.text}</p></Col>
                        </Row>
                        <div className="author">
                          <span>{testimonial.author}</span>
                        </div>
                    </div>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BringingFaith;
