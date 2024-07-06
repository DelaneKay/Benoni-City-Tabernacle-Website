import React from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import backgroundImage from '../../../../../media/homepage/img8.jpg';
import profileImage from '../../../../../media/homepage/img7.jpg';
import './BringingFaith.css'

const testimonials = [
  {
    text: "For Oh, I see the sign that the end time is here. I see the things that’s promised, for this end-time Message, coming to pass (unfolding) just exactly like the Scripture said. And I know that the time is at hand!",
    author: "Rev. William M. Branham",
    authorImage: profileImage
  },
  {
    text: "Now, the Coming is so imminent, the Second Coming of Jesus, He’s gathering His Elected together. I believe that. Oh, they’ll come from the East and West. Where the carcass is, the eagles gather.",
    author: "Rev. William M. Branham",
    authorImage: profileImage
  },
  {
    text: "For the first time in many years I have found a place at Charia Church. It's like coming home again where the people are so warm and friendly and are genuinely concerned about you.",
    author: "Rev. William M. Branham",
    authorImage: profileImage
  },
];

const BringingFaith = () => {
  return (
    <section className='faith'>
      <Container>
        <Row style={{marginTop: '2rem'}}>
          <Col md={6} style={{ marginTop: '5.5rem'}}>
            <h2>BRINGING THE ENDTIME MESSAGE TO YOUR LIFE FOR OVER 8 YEARS</h2>
            <p>Our church is not just a gathering place; it is a sanctuary where seekers of truth find solace, where the weary find rest, and where the lost find direction. </p>
            <p>We invite all who are earnestly seeking truth to come and worship with us, to experience the transformative power of God's presence and the prophetic legacy that continues to shape our faith journey. Together, let us prepare ourselves for the coming of our Lord, knowing that in Him, we find hope, peace, and eternal salvation. </p>
            <Button variant="outline-light" style={{borderRadius: '0%'}}>Learn More</Button>
          </Col>
          <Col md={6} className="testimonial-section">
            <Image src={backgroundImage} fluid className="background-image" />
            <div className="carousel-wrapper testimonial" style={{marginTop:'60%'}}>
                <Carousel indicators={false} controls={false}>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                    <div>
                        <Row className="testimonial-content">
                        <Col md={1} style={{marginLeft: '1rem', marginTop: '0.5rem'}}><div className="vertical-line"></div></Col>
                        <Col style={{marginLeft: '-1.2rem'}}><p style={{textAlign: 'left', fontWeight: 'bold'}}>{testimonial.text}</p></Col>
                        </Row>
                        <div className="author">
                        <Image src={testimonial.authorImage} roundedCircle />
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
