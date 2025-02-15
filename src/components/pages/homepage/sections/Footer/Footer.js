import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './Footer.css'
import logo from '../../../../../media/homepage/bct-logo.png'; // Replace with your logo path

const Footer = () => {

  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <Container className='footer-container'>
        <Row className="text-center">
          <Col>
            <img src={logo} alt="Charia Logo" className="footer-logo" />
          </Col>
        </Row>
        <Row className="justify-content-center row-links">
          <Col>
            <nav className="footer-nav">
              <a href="/">HOME</a>
              <a href="/sermons">SERMONS</a>
              <a href="/missionary">MISSIONS</a>
              <a href="/sunday-school">SUNDAY SCHOOL CORNER</a>
              <a href="#contact">ABOUT US</a>
              <a href="/william-branham">WILLIAM BRANHAM</a>
            </nav>
          </Col>
        </Row>
        <hr className="footer-separator" />
        <Row className="text-center social-icons">
          <Col>
            <div className="footer-social">
                <div className="social-icon-wrapper">
                <a href="#youtube" className="social-icon"><FaFacebook /></a>
                </div>
                <div className="social-icon-wrapper">
                <a href="#linkedin" className="social-icon"><FaYoutube /></a>
                </div>
                <div className="social-icon-wrapper">
                <a href="#twitter" className="social-icon"><FaWhatsapp /></a>
                </div>
                <hr className="footer-horizontal-line" />
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="footer-address">100 Elston Ave, Benoni, 1500</p>
            <p className="footer-copyright">© {currentYear} BCT. All rights reserved. Designed by <span href="#privacy-policy">Castle Windsor Designs</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
