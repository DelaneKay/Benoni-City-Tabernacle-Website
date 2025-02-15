import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ChurchInfo.css'

const ChurchInfo = () => {
  return (
    <section>
        <Container className="church-info-container">
                <div className="d-flex align-items-center">
                  <div className="vertical-line1"></div>
                  <p className="church-info-text">
                    Our church incorporates believers from diverse backgrounds. Whether you are a lifelong believer or just beginning your spiritual path, our doors are open to you. Come and be a part of our family, where the Endtime Eagles gather.
                  </p>
                </div>
    </Container>
    </section>
  )
}

export default ChurchInfo
