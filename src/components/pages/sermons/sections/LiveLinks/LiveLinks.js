import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaYoutube, FaGlobe, FaApple, FaAndroid } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./LiveLinks.css"

const LiveLinks = () => {
  return (
    <section className="live-links-bar">
      <Container>
        {/* Desktop view (default) */}
        <Row className="justify-content-center desktop-live-links">
          <Col xs="auto" md={3}>
            <a href="https://www.youtube.com/@BenoniCityTabernacle" className="live-link">Watch Live on YouTube</a>
          </Col>
          <Col xs="auto" md={3}>
            <Link to="/watch-live" className="live-link">Watch Live on Website</Link>
          </Col>
          <Col xs="auto" md={3}>
            <a href="https://www.youtube.com/@BenoniCityTabernacle" className="live-link">Watch Live on Apple</a>
          </Col>
          <Col xs="auto" md={3}>
            <a href="#android" className="live-link">Watch Live on Android</a>
          </Col>
        </Row>

        {/* Mobile view (hidden by default, only shows in media query) */}
        <div className="mobile-live-links">
          <h2 className="live-title">Watch Live On</h2>
          <Row>
            <Col xs={6} md={3}>
              <div className="live-card">
                <a href="https://www.youtube.com/@BenoniCityTabernacle" className="live-link">
                  <FaYoutube className="live-icon" />
                  <span className="live-name">YouTube</span>
                </a>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="live-card">
                <Link to="/watch-live" className="live-link">
                  <FaGlobe className="live-icon" />
                  <span className="live-name">Website</span>
                </Link>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="live-card">
                <a href="#apple" className="live-link">
                  <FaApple className="live-icon" />
                  <span className="live-name">Apple App</span>
                </a>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="live-card">
                <a href="#android" className="live-link">
                  <FaAndroid className="live-icon" />
                  <span className="live-name">Android App</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default LiveLinks
