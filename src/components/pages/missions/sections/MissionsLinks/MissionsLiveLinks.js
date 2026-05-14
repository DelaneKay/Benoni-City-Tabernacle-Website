import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./MissionsLiveLinks.css"

const MissionsLiveLinks = () => {
  const navigate = useNavigate()

  return (
    <section className="missions-live-links-bar">
        <Container>
        <Row className="justify-content-center align-items-center">
            <Col xs={12} md={4} className="sunday-school-presentations-live-col">
            <h4
              className="text-center missions-live-link"
              onClick={() => navigate('/missionary/harvest-time-tabernacle')}
            >
              Harvest Time Tabernacle
            </h4>
            </Col>
            <Col xs={12} md={4} className="sunday-school-presentations-live-col">
            <h4
              className="text-center missions-live-link"
              onClick={() => navigate('/missionary/restored-word-daveyton-tabernacle')}
            >
              Restored Word Daveyton Tabernacle
            </h4>
            </Col>
            <Col xs={12} md={4} className="sunday-school-presentations-live-col">
            <h4
              className="text-center missions-live-link"
              onClick={() => navigate('/missionary/bct-baptisms')}
            >
              BCT Baptisms
            </h4>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default MissionsLiveLinks
