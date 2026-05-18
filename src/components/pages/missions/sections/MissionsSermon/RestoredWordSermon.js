import React, { Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Skeleton from 'react-loading-skeleton';
import { useOutletContext } from 'react-router-dom';
import './MissionsSermon.css';

const FALLBACK_RESTORED_VIDEO_ID = 'LJGHO7Qhefw';

const RestoredWordSermon = () => {
  const { youtubeData } = useOutletContext();
  const { videosRestored } = youtubeData;
  const latestVideoId =
    videosRestored && videosRestored.length > 0
      ? videosRestored[0].snippet.resourceId.videoId
      : FALLBACK_RESTORED_VIDEO_ID;

  return (
    <section>
      <Container className="missions-streaming-container">
        <Row className="justify-content-center my-5 mb-4">
          <Col xs={12} md={10}>
            {latestVideoId ? (
              <Suspense fallback={<Skeleton height="100%" width="100%" />}>
                <ReactPlayer
                  key={`restored-word-${latestVideoId}`}
                  url={`https://www.youtube.com/watch?v=${latestVideoId}`}
                  className="react-player"
                  width="100%"
                  height="auto"
                  controls
                />
              </Suspense>
            ) : (
              <Skeleton height={420} width="100%" />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RestoredWordSermon;
