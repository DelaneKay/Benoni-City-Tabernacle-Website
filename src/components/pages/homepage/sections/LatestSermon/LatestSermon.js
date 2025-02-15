import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './LatestSermon.css';

const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc';
const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ';

const LatestSermon = () => {
  const [latestVideoId, setLatestVideoId] = useState('');

  // Function to fetch the latest video from the YouTube API
  const fetchLatestVideo = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: YOUTUBE_API_KEY,
          channelId: CHANNEL_ID,
          part: 'snippet,id',
          order: 'date',
          maxResults: 1
        }
      });

      const video = response.data.items[0];
      if (video.id.videoId) {
        setLatestVideoId(video.id.videoId);
      }
    } catch (error) {
      console.error('Error fetching latest video: ', error);
    }
  };

  useEffect(() => {
    fetchLatestVideo(); // Fetch the latest video when the component mounts
  }, []);

  return (
    <section className='latest-sermon'>
      <Container className='latest-sermon-container'>
        <Row className='latest-sermon-row'>
          <Col xs={12} md={12} lg={3} xl={3}>
            <h1>LATEST SERMON</h1>
            <p>Explore & watch our latest sermons by our pastor and other various preachers.</p>
            <Button
              variant="danger"  
              size="lg">MORE SERMONS</Button>
          </Col>
          <Col xs={12} md={12} lg={9} xl={9}>
            <div className='react-player-wrapper'>
              {latestVideoId ? (
                <ReactPlayer 
                  url={`https://www.youtube.com/watch?v=${latestVideoId}`} 
                  controls={true} 
                  width="100%"
                />
              ) : (
                <p>Loading latest sermon...</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LatestSermon;
