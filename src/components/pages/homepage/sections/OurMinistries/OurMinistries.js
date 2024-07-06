import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './OurMinistries.css'
import { FaBible, FaPray, FaVideo, FaItunesNote, FaHome } from 'react-icons/fa';

const OurMinistries = () => {
  return (
    <section className="ministries-section">
      <Container>
          <h2 className="ministries-title">OUR MINISTRIES</h2>
          <Row>
            <Col xs={6} md={3}>
              <div className="ministry-card">
                <FaBible className="ministry-icon" />
                <span className="ministry-name">Preaching Ministry</span>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="ministry-card">
                <FaItunesNote className="ministry-icon" />
                <span className="ministry-name">Music Ministry</span>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="ministry-card">
                <FaVideo className="ministry-icon" />
                <span className="ministry-name">Media Ministry</span>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="ministry-card">
                <FaHome className="ministry-icon" />
                <span className="ministry-name">Sunday School Ministry</span>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default OurMinistries
