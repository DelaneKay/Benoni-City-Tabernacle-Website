import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Pagination, Table } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';
import "./SermonStreaming.css"

// this function extracts the date and puts it in a format 00-0000
const formatDate = (publishedAt) => {
    const date = new Date(publishedAt);
    const year = date.getFullYear().toString().slice(2); // Get last two digits of the year
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero and get month (0-based)
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero and get day
  
    return `${year}-${month}${day}`; // Return the formatted string YY-MMDD
  };
    
// this function extracts the title and removes the Name of preacher
const extractTitleAndSpeaker = (title) => {
    const regex = /^(.*?)\s*-\s*(.*)$/; // Regular expression to split by the first `-`
    const matches = title.match(regex);
  
    if (matches) {
      const sermonTitle = matches[1].trim(); // Get the part before the `-`
      const speaker = matches[2].trim(); // Get the part after the `-`
      return { sermonTitle, speaker };
    } else {
      // If no match is found, return the full title as sermonTitle and empty speaker
      return { sermonTitle: title, speaker: 'Unknown Speaker' };
    }
  };


const SermonStreaming = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc';
    const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ';
    const VIDEOS_PER_PAGE = 10;

    // Sample speakers list (this could come from an API or some other data source)
    const speakers = ['Rev T. Mahere', 'Bro. Simba Manwere', 'Bro. Witness Makono', 'Bro. Jonathan Makono', 'Pastor William Ndlovu', 'Bro. Paul Mutimutema', 'Bro. Kuda Sibanda', 'Guest Speakers'];

    // State to capture selected speaker
    const [selectedSpeaker, setSelectedSpeaker] = useState('');

    // Function to handle the selection of a speaker
    const handleSpeakerChange = (event) => {
        setSelectedSpeaker(event.target.value);
        console.log('Selected Speaker:', event.target.value); // You can replace this with your custom logic
    };


    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const channelResponse = await axios.get(
            'https://www.googleapis.com/youtube/v3/channels',
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

          let allVideos = [];
          let nextPageToken = '';

          do {
            const playlistResponse = await axios.get(
              'https://www.googleapis.com/youtube/v3/playlistItems',
              {
                params: {
                  key: YOUTUBE_API_KEY,
                  playlistId: uploadsPlaylistId,
                  part: 'snippet',
                  maxResults: 50, // Max allowed by the API
                  pageToken: nextPageToken,
                },
              }
            );

            allVideos = [...allVideos, ...playlistResponse.data.items];
            nextPageToken = playlistResponse.data.nextPageToken;
          } while (nextPageToken);

          setVideos(allVideos);
          setCurrentVideo(allVideos[0]);
          setTotalPages(Math.ceil(allVideos.length / VIDEOS_PER_PAGE));
        } catch (error) {
          console.error('Error fetching uploaded videos:', error);
        }
      };

      fetchVideos();
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
  
      const renderPaginationItems = () => {
        let items = [];
        const maxPagesToShow = 5;
  
        if (totalPages <= maxPagesToShow) {
          for (let number = 1; number <= totalPages; number++) {
            items.push(
              <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                {number}
              </Pagination.Item>,
            );
          }
        } else {
          items.push(<Pagination.First key="first" onClick={() => handlePageChange(1)} />);
          items.push(<Pagination.Prev key="prev" onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />);
  
          let startPage = Math.max(1, currentPage - 2);
          let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
          if (startPage > 1) {
            items.push(<Pagination.Ellipsis key="ellipsis-start" />);
          }
  
          for (let number = startPage; number <= endPage; number++) {
            items.push(
              <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                {number}
              </Pagination.Item>,
            );
          }
  
          if (endPage < totalPages) {
            items.push(<Pagination.Ellipsis key="ellipsis-end" />);
          }
  
          items.push(<Pagination.Next key="next" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />);
          items.push(<Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} />);
        }
  
        return items;
      };
  
    return (
      <Container>
        {/* Video Section */}
        {currentVideo && (
          <>
            {/* Extract sermonTitle, speaker, and formatted date */}
                {(() => {
                const { sermonTitle, speaker } = extractTitleAndSpeaker(currentVideo.snippet.title);
                const formattedDate = formatDate(currentVideo.snippet.publishedAt);
                return (
                    <Row className="justify-content-center my-5 mb-4">
                    <Col xs={12} md={10}>
                    <div className="sermon-header mb-1">
                        <h3 className="sermon-title">{sermonTitle}</h3>
                        <h3 className="sermon-title speaker-info"><i>{speaker} {formattedDate}</i></h3>
                    </div>
                        
                        {/* Video player */}
                        <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${currentVideo.snippet.resourceId.videoId}`}
                        className="react-player"
                        width="100%"
                        height="auto"
                        controls
                        />
                    </Col>
                    </Row>
                );
                })()}
  
            {/* Dropdowns for filtering */}
            <Row className="justify-content-center mb-5 dropdown-row">
            <Col xs={12} md={4}>
                <select className="form-select">
                <option>- Browse Series -</option>
                </select>
            </Col>
            <Col xs={12} md={4}>
            <select
                className="form-select"
                value={selectedSpeaker}
                onChange={handleSpeakerChange}
                >
                <option value="">- Browse Speakers -</option>
                {speakers.map((speaker, index) => (
                    <option key={index} value={speaker}>
                    {speaker}
                    </option>
                ))}
            </select>
            </Col>
            <Col xs={12} md={4}>
                <select className="form-select">
                <option>- Browse Years -</option>
                </select>
            </Col>
            </Row>
          </>
        )}
  
        {/* Recent Sermons Table */}
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Table striped className="recent-sermons">
              <tbody>
                {videos.slice((currentPage - 1) * VIDEOS_PER_PAGE, currentPage * VIDEOS_PER_PAGE).map((video, index) => {
                  const { sermonTitle, speaker } = extractTitleAndSpeaker(video.snippet.title);
                  return (
                    <tr key={index}>
                      <td>{formatDate(video.snippet.publishedAt)}</td>
                      <td><b>{sermonTitle}</b></td>
                      <td>{speaker}</td>
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
                  );
                })}
              </tbody>
            </Table>
            <Pagination>{renderPaginationItems()}</Pagination>
          </Col>
        </Row>
      </Container>
    );
  };

export default SermonStreaming
