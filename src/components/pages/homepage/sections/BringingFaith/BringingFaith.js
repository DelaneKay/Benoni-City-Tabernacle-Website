import React from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import backgroundImage from '../../../../../media/homepage/img8.jpg';
import { Outlet, useNavigate } from 'react-router-dom';
import './BringingFaith.css'

const testimonials = [
  {
    text: "Now, the Coming is so imminent, the Second Coming of Jesus, He’s gathering His Elected together. I believe that. Oh, they’ll come from the East and West. Where the carcass is, the eagles gather.",
    author: "Rev. William M. Branham",
  },
  {
    text: "Heavenly Father, we’re at the closing just before a great meeting closes, I should say. We’re standing before You, crowded in this little building, 'Where the carcass is the eagles will gather,' hungry-hearted people.",
    author: "Rev. William M. Branham",
  },
  {
    text: "And that’s the Word of God: borned in the world, foreordained to this condemnation. So we just have to have that. But where the carcass is the eagles will be gathered. Where God is moving people come to worship God.",
    author: "Rev. William M. Branham",
  },
];

const BringingFaith = () => {

  const navigate = useNavigate();
    
      const goToAboutPage = () => {
        navigate('/about-us');
      };

  return (
    <section className='faith'>
      <Container>
        <Row style={{marginTop: '2rem'}}>
          <Col xs={12} md={6} lg={6}>
            <h2>BRINGING THE ENDTIME MESSAGE TO YOUR LIFE FOR OVER 8 YEARS</h2>
            <p>Our church is not just a gathering place; it is a sanctuary where seekers of truth find solace, where the weary find rest, and where the lost find direction. </p>
            <p>We invite all who are earnestly seeking truth to come and worship with us, to experience the transformative power of God's presence and the prophetic legacy that continues to shape our faith journey. Together, let us prepare ourselves for the coming of our Lord, knowing that in Him, we find hope, peace, and eternal salvation. </p>
            <Button variant="outline-light" style={{borderRadius: '0%'}} onClick={goToAboutPage}>Learn More</Button>
          </Col>
          <Col xs={12} md={6} lg={6} className="testimonial-section">
            <Image src={backgroundImage} fluid className="background-image" />
            <div className="carousel-wrapper testimonial">
            <Carousel className="no-overlay-carousel" indicators={false} controls={false}>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div>
                    <Row className="testimonial-content">
                      <Col md={1} style={{ marginTop: '0.5rem' }}>
                        <div className="vertical-line"></div>
                      </Col>
                      <Col>
                        <p className="testimonial-text">{testimonial.text}</p>
                      </Col>
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
