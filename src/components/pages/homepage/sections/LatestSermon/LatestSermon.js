import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './LatestSermon.css'

const LatestSermon = () => {
  return (
    <section className='latest-sermon'>
      <Container className='latest-sermon-container'>
        <Row className='latest-sermon-row'>
            <Col xs={12} md={3}>
                <h1>LATEST SERMON</h1>
                <p>Explore & watch our latest sermons by our pastor and other various preachers.</p>
                <Button
                    variant="danger"  
                    size="lg">OTHER SERMONS</Button>
            </Col>
            <Col xs={12} md={9}>
              <div className='react-player-wrapper'>
                <ReactPlayer 
                  url='https://www.youtube.com/watch?v=XM-bkWkMyRg' 
                  controls={true} 
                />
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LatestSermon
