import React, { useEffect, useState, Suspense } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Skeleton from 'react-loading-skeleton';
import { useOutletContext } from 'react-router-dom';
import './JuniorVideoPresentations.css';

const JuniorVideoPresentations = () => {
    
    const goToYoutubePage = () => {
        window.open('https://www.youtube.com/@BCTSundaySchool', '_blank')
    };

    const { youtubeData } = useOutletContext();
    const { videosSundaySchool } = youtubeData;
    // Assume the first video is the latest sermon if available
    const latestVideoId =
    videosSundaySchool && videosSundaySchool.length > 0 ? videosSundaySchool[0].snippet.resourceId.videoId : null;

  return (
    <section>
        <Container className='sunday-school-presentation-container'>
            <Row>
            <Col xs={12} md={12} lg={3} xl={3} >
                <h2>Sunday School Presentations</h2>
                <p>
                Explore &amp; watch our sunday school presentations from both the Junior and the Senior classes.
                </p>
                <Button variant="danger" size="md" onClick={goToYoutubePage}>
                MORE PRESENTATIONS
                </Button>
            </Col>
            <Col xs={12} md={12} lg={9} xl={9}>
                <div className='react-player-wrapper'>
                <Suspense fallback={<Skeleton height="100%" width="100%" />}>
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${latestVideoId}`}
                        controls={true}
                        width="100%" />
                    </Suspense>
                </div> 
            </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
        </Container>
    </section>
  )
}

export default JuniorVideoPresentations
