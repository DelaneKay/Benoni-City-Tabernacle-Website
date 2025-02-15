import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './SermonSeriesBar.css'

const SermonSeriesBar = () => {
  return (
    <div className="sermon-series-bar">
        <Container>
        <Row className="justify-content-center">
            <Col xs="auto">
            <h4 className="text-center py-4">Sermon Series Archives</h4>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default SermonSeriesBar
