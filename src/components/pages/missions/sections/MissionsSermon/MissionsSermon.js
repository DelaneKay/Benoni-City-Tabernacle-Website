import React, { useEffect, useState, Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Skeleton from 'react-loading-skeleton';
import { useOutletContext } from 'react-router-dom';
import './MissionsSermon.css';

const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc';
const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ';

const MissionsSermon = () => {
    const { youtubeData } = useOutletContext();
      const { videos } = youtubeData;
      // Assume the first video is the latest sermon if available
      const latestVideoId =
        videos && videos.length > 0 ? videos[0].snippet.resourceId.videoId : null;

  return (
    <section>
      <Container className='missions-streaming-container'>
        <Row className="justify-content-center my-5 mb-4">
            <Col xs={12} md={10}>
                <Suspense fallback={<Skeleton height="100%" width="100%" />}>
                    <ReactPlayer 
                      url={`https://www.youtube.com/watch?v=${latestVideoId}`}
                      className="react-player"
                      width="100%"
                      height="auto"
                      controls />
                  </Suspense>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissionsSermon


