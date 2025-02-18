import React, { Suspense } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { useOutletContext } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import './LatestSermon.css';

const LatestSermon = () => {
  const { youtubeData } = useOutletContext();
  const { videos } = youtubeData;
  // Assume the first video is the latest sermon if available
  const latestVideoId =
    videos && videos.length > 0 ? videos[0].snippet.resourceId.videoId : null;

  return (
    <section className='latest-sermon'>
      <Container className='latest-sermon-container'>
        <Row className='latest-sermon-row'>
          <Col xs={12} md={12} lg={3} xl={3}>
            <h1>LATEST SERMON</h1>
            <p>
              Explore &amp; watch our latest sermons by our pastor and other various preachers.
            </p>
            <Button variant="danger" size="lg">
              MORE SERMONS
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
      </Container>
    </section>
  );
};

export default LatestSermon;
