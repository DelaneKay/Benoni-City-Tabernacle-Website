import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';
import "./SermonStreaming.css"

const formatDate = (publishedAt) => {
    const date = new Date(publishedAt);
    const year = date.getFullYear().toString().slice(2); // Get last two digits of the year
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero and get month (0-based)
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero and get day
  
    return `${year}-${month}${day}`; // Return the formatted string YY-MMDD
  };
    

const SermonStreaming = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc'; // Replace with your YouTube API key
    const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ'; // Replace with your channel ID
  
    // Fetch the uploaded videos from the channel
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          // Step 1: Get the uploads playlist ID for the channel
          const channelResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels`,
            {
              params: {
                key: YOUTUBE_API_KEY,
                id: CHANNEL_ID,
                part: 'contentDetails',
              },
            }
          );
  
          const uploadsPlaylistId =
            channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;
  
          // Step 2: Get the videos from the uploads playlist
          const playlistResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems`,
            {
              params: {
                key: YOUTUBE_API_KEY,
                playlistId: uploadsPlaylistId,
                part: 'snippet',
                maxResults: 10, // You can increase this number or paginate through all the results
              },
            }
          );
  
          const videos = playlistResponse.data.items;
          setVideos(videos);
          setCurrentVideo(videos[0]); // Set the most recent video as the current video
        } catch (error) {
          console.error('Error fetching uploaded videos:', error);
        }
      };
  
      fetchVideos();
    }, []);
  
    return (
      <Container>
        {/* Title */}
        <Row className="text-center my-4">
          <Col>
            <h2 className="latest-message-title">Latest <span>Message</span></h2>
          </Col>
        </Row>
  
        {/* Video Section */}
        {currentVideo && (
          <>
            <Row className="justify-content-center mb-4">
              <Col xs={12} md={10}>
                <h3 className="sermon-title">{currentVideo.snippet.title}</h3>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${currentVideo.snippet.resourceId.videoId}`}
                  className="react-player"
                  width="100%"
                  height="auto"
                  controls
                />
              </Col>
            </Row>
  
            {/* Dropdowns for filtering */}
            <Row className="justify-content-center mb-5 dropdown-row">
            <Col xs={12} md={4}>
                <select className="form-select">
                <option>- Browse Series -</option>
                </select>
            </Col>
            <Col xs={12} md={4}>
                <select className="form-select">
                <option>- Browse Speakers -</option>
                </select>
            </Col>
            <Col xs={12} md={4}>
                <select className="form-select">
                <option>- Browse Topics -</option>
                </select>
            </Col>
            </Row>
          </>
        )}
  
        {/* Recent Sermons Table */}
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Table striped bordered hover className="recent-sermons">
              <tbody>
                {videos.map((video, index) => (
                    <tr key={index}>
                    <td>{formatDate(video.snippet.publishedAt)}</td>
                    <td>{video.snippet.title}</td>
                    <td>Kyle Mercer</td> {/* Replace with actual speaker data if available */}
                    <td>
                        <a
                        href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Watch
                        </a>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  };

export default SermonStreaming
