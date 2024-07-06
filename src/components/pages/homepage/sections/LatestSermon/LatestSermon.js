import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './LatestSermon.css'

const LatestSermon = () => {
  return (
    <section className='latest-sermon'>
      <Container className='latest-sermon-container'>
        <Row>
            <Col>
                <h1>LATEST SERMON</h1>
                <p>Explore & watch our latest sermons by our pastor and other various preachers.</p>
                <Button
                    variant="danger"  
                    size="lg">OTHER SERMONS</Button>
            </Col>
            <Col>
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=XM-bkWkMyRg' 
                controls={true} 
                width={'854px'} 
                height={'480px'} 
                config={{
                  youtube: {
                    playerVars: {
                      // 'hd' means 'high definition'
                      // 'vq' stands for 'video quality', 'hd1080' is for 1080p
                      // You can also use 'hd720' for 720p
                      vq: 'hd1080'
                    }
                  }
                }}
              />
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LatestSermon
