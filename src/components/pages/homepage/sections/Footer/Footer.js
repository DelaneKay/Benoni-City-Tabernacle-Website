import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './Footer.css'
import logo from '../../../../../media/homepage/bct-logo.png'; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <Container className='footer-container'>
        <Row className="text-center">
          <Col>
            <img src={logo} alt="Charia Logo" className="footer-logo" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <nav className="footer-nav">
              <a href="#about">HOME</a>
              <a href="#donations">SERMONS</a>
              <a href="#events">SPECIALS</a>
              <a href="#sermons">SUNDAY SCHOOL CORNER</a>
              <a href="#contact">ABOUT US</a>
              <a href="#contact">WILLIAM BRANHAM</a>
            </nav>
          </Col>
        </Row>
        <hr className="footer-separator" />
        <Row className="text-center">
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
            <p className="footer-copyright">© 2024 BCT. All rights reserved. <a href="#privacy-policy">Designed by Castle Windsor Designs</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;