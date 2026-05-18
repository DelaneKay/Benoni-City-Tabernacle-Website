import React, { Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Skeleton from 'react-loading-skeleton';
import { useLocation, useOutletContext } from 'react-router-dom';
import './MissionsSermon.css';


const MissionsSermon = () => {
    const location = useLocation();
    const { youtubeData } = useOutletContext();
      const { videosClayville, videosRestored } = youtubeData;
      const normalizedPathname =
        location.pathname !== '/' && location.pathname.endsWith('/')
          ? location.pathname.slice(0, -1)
          : location.pathname;
      const isRestoredRoute =
        normalizedPathname === '/missionary/restored-word-daveyton-tabernacle';
      const routeVideos = isRestoredRoute ? videosRestored : videosClayville;
      const latestVideoId =
        routeVideos && routeVideos.length > 0 ? routeVideos[0].snippet.resourceId.videoId : null;

  return (
    <section>
      <Container className='missions-streaming-container'>
        <Row className="justify-content-center my-5 mb-4">
            <Col xs={12} md={10}>
                {latestVideoId ? (
                  <Suspense fallback={<Skeleton height="100%" width="100%" />}>
                      <ReactPlayer 
                        key={`${normalizedPathname}-${latestVideoId}`}
                        url={`https://www.youtube.com/watch?v=${latestVideoId}`}
                        className="react-player"
                        width="100%"
                        height="auto"
                        controls />
                    </Suspense>
                ) : (
                  <Skeleton height={420} width="100%" />
                )}
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissionsSermon


