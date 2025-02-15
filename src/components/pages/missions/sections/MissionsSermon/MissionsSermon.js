import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './MissionsSermon.css';

const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc';
const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ';

const MissionsSermon = () => {
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
    <section>
      <Container className='missions-streaming-container'>
        <Row className="justify-content-center my-5 mb-4">
            <Col xs={12} md={10}>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${latestVideoId}`}
                    className="react-player"
                    width="100%"
                    height="auto"
                    controls
                />
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissionsSermon


