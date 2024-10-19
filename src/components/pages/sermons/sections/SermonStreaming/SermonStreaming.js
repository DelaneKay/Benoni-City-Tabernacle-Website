import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Container, Row, Col, Button, Pagination, Table, Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';
import "./SermonStreaming.css"
import SermonSeriesBar from '../SermonSeriesBar/SermonSeriesBar';


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
    const [playlists, setPlaylists] = useState([]);
    const [playlistPage, setPlaylistPage] = useState(1);
    const [selectedSeries, setSelectedSeries] = useState('');
    const [displayedVideos, setDisplayedVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedYear, setSelectedYear] = useState('');
    const [availableYears, setAvailableYears] = useState([]);
    const [selectedSpeaker, setSelectedSpeaker] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const playerRef = useRef(null);

    const playlistsPerPage = 9;
    const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc';
    const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ';
    const VIDEOS_PER_PAGE = 10;

    // Sample speakers list (this could come from an API or some other data source)
    const speakers = ['Rev T. Mahere', 'Bro. Simba Manwere', 'Bro. Witness Makono', 'Bro. Jonathan Makono', 'Pastor William Ndlovu', 'Bro. Paul Mutimutema', 'Bro. Kuda Sibanda', 'Guest Speakers'];

    const scrollToPlayer = () => {
        if (playerRef.current) {
            playerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        filterVideos(term, selectedYear, selectedSpeaker);
    };


    // Function to filter videos based on search term
    const filterVideosBySearch = useCallback((term) => {
        if (!term) {
            setFilteredVideos(videos);
            setTotalPages(Math.ceil(videos.length / VIDEOS_PER_PAGE));
            return;
        }

        const lowercaseTerm = term.toLowerCase();
        const filtered = videos.filter(video => {
            const { sermonTitle, speaker } = extractTitleAndSpeaker(video.snippet.title);
            const description = video.snippet.description.toLowerCase();
            return sermonTitle.toLowerCase().includes(lowercaseTerm) ||
                  speaker.toLowerCase().includes(lowercaseTerm) ||
                  description.includes(lowercaseTerm);
        });

        setFilteredVideos(filtered);
        setCurrentPage(1);
        setTotalPages(Math.ceil(filtered.length / VIDEOS_PER_PAGE));
    }, [videos]);
    

    // Function to handle the selection of a speaker
    const handleSpeakerChange = (event) => {
      const speaker = event.target.value;
      setSelectedSpeaker(speaker);
  };

    const filterVideosBySpeaker = useCallback((speaker) => {
        if (!speaker) {
            setFilteredVideos(videos);
            return;
        }

        const filtered = videos.filter(video => {
            const { speaker: videoSpeaker } = extractTitleAndSpeaker(video.snippet.title);
            const lowerCaseVideoSpeaker = videoSpeaker.toLowerCase();

            switch (speaker) {
                case 'Rev T. Mahere':
                    return lowerCaseVideoSpeaker.includes('mahere');
                case 'Bro. Simba Manwere':
                    return lowerCaseVideoSpeaker.includes('manwere');
                case 'Bro. Witness Makono':
                    return lowerCaseVideoSpeaker.includes('w. makono') || lowerCaseVideoSpeaker.includes('w makono') || lowerCaseVideoSpeaker.includes('witness makono');
                case 'Bro. Jonathan Makono':
                    return lowerCaseVideoSpeaker.includes('jonathan makono') || lowerCaseVideoSpeaker.includes('j makono');
                case 'Pastor William Ndlovu':
                    return lowerCaseVideoSpeaker.includes('ndlovu');
                case 'Bro. Paul Mutimutema':
                    return lowerCaseVideoSpeaker.includes('mutimutema');
                case 'Bro. Kuda Sibanda':
                    return lowerCaseVideoSpeaker.includes('kuda sibanda') || lowerCaseVideoSpeaker.includes('k sibanda');
                case 'Guest Speakers':
                    return !['mahere', 'manwere', 'makono', 'ndlovu', 'mutimutema', 'sibanda'].some(name => lowerCaseVideoSpeaker.includes(name));
                default:
                    return true;
            }
        });

        setFilteredVideos(filtered);
        setCurrentPage(1);
        setTotalPages(Math.ceil(filtered.length / VIDEOS_PER_PAGE));
    }, [videos]);

    useEffect(() => {
        if (videos.length > 0) {
            setFilteredVideos(videos);
        }
    }, [videos]);

    useEffect(() => {
        fetchAllVideos();
    }, []);

    useEffect(() => {
        if (selectedSeries) {
            fetchSeriesVideos(selectedSeries);
        } else {
            setDisplayedVideos(videos);
            setTotalPages(Math.ceil(videos.length / VIDEOS_PER_PAGE));
        }
    }, [selectedSeries, videos]);

    const fetchAllVideos = useCallback(async () => {
      setIsLoading(true);
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

            const uploadsPlaylistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

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
                            maxResults: 50,
                            pageToken: nextPageToken,
                        },
                    }
                );

                allVideos = [...allVideos, ...playlistResponse.data.items];
                nextPageToken = playlistResponse.data.nextPageToken;
            } while (nextPageToken);

            console.log('Fetched videos:', allVideos.length);
            setVideos(allVideos);
            setDisplayedVideos(allVideos);
            setCurrentVideo(allVideos[0]);
            setTotalPages(Math.ceil(allVideos.length / VIDEOS_PER_PAGE));

            const years = [...new Set(allVideos.map(video => new Date(video.snippet.publishedAt).getFullYear()))];
            setAvailableYears(years.sort((a, b) => b - a));
          } catch (error) {
            console.error('Error fetching uploaded videos:', error);
          } finally {
            setIsLoading(false);
          }
        }, []);

        const filterVideos = useCallback((searchTerm, year, speaker) => {
          let filtered = videos;
  
          if (searchTerm) {
              const lowercaseSearchTerm = searchTerm.toLowerCase();
              filtered = filtered.filter(video => {
                  const { sermonTitle, speaker } = extractTitleAndSpeaker(video.snippet.title);
                  const description = video.snippet.description.toLowerCase();
                  return sermonTitle.toLowerCase().includes(lowercaseSearchTerm) ||
                         speaker.toLowerCase().includes(lowercaseSearchTerm) ||
                         description.includes(lowercaseSearchTerm);
              });
          }
  
          if (year) {
              filtered = filtered.filter(video => {
                  const videoYear = new Date(video.snippet.publishedAt).getFullYear().toString();
                  return videoYear === year;
              });
          }
  
          if (speaker) {
              filtered = filtered.filter(video => {
                  const { speaker: videoSpeaker } = extractTitleAndSpeaker(video.snippet.title);
                  const lowerCaseVideoSpeaker = videoSpeaker.toLowerCase();
                  const lowerCaseSpeaker = speaker.toLowerCase();
  
                  switch (speaker) {
                      case 'Rev T. Mahere':
                          return lowerCaseVideoSpeaker.includes('mahere');
                      case 'Bro. Simba Manwere':
                          return lowerCaseVideoSpeaker.includes('manwere');
                      case 'Bro. Witness Makono':
                          return lowerCaseVideoSpeaker.includes('w. makono') || lowerCaseVideoSpeaker.includes('w makono') || lowerCaseVideoSpeaker.includes('witness makono');;
                      case 'Bro. Jonathan Makono':
                          return lowerCaseVideoSpeaker.includes('jonathan makono') || lowerCaseVideoSpeaker.includes('j makono');
                      case 'Pastor William Ndlovu':
                          return lowerCaseVideoSpeaker.includes('ndlovu');
                      case 'Bro. Paul Mutimutema':
                          return lowerCaseVideoSpeaker.includes('mutimutema');
                      case 'Bro. Kuda Sibanda':
                          return lowerCaseVideoSpeaker.includes('kuda sibanda') || lowerCaseVideoSpeaker.includes('k sibanda');
                      case 'Guest Speakers':
                          return !['mahere', 'manwere', 'makono', 'ndlovu', 'mutimutema', 'sibanda'].some(name => lowerCaseVideoSpeaker.includes(name));
                      default:
                          return true;
                  }
              });
          }
  
          setFilteredVideos(filtered);
          setCurrentPage(1);
          setTotalPages(Math.ceil(filtered.length / VIDEOS_PER_PAGE));
      }, [videos]);
  
      
      useEffect(() => {
          filterVideos(searchTerm, selectedYear, selectedSpeaker);
      }, [filterVideos, searchTerm, selectedYear, selectedSpeaker]);
      
        const handleYearChange = (event) => {
          const year = event.target.value;
          console.log('Year changed to:', year);
          setSelectedYear(year);
        }

    const fetchSeriesVideos = async (playlistId) => {
        setIsLoading(true);
        try {
            let seriesVideos = [];
            let nextPageToken = '';
            do {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/playlistItems',
                    {
                        params: {
                            key: YOUTUBE_API_KEY,
                            playlistId: playlistId,
                            part: 'snippet',
                            maxResults: 50,
                            pageToken: nextPageToken,
                        },
                    }
                );
                seriesVideos = [...seriesVideos, ...response.data.items];
                nextPageToken = response.data.nextPageToken;
            } while (nextPageToken);

            setDisplayedVideos(seriesVideos);
            setCurrentPage(1);
            setTotalPages(Math.ceil(seriesVideos.length / VIDEOS_PER_PAGE));
        } catch (error) {
            console.error('Error fetching series videos:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSeriesChange = (event) => {
        const seriesId = event.target.value;
        setSelectedSeries(seriesId);
        setCurrentPage(1);
    };

    useEffect(() => {
      const fetchPlaylists = async () => {
          try {
              // Replace 'YOUR_API_KEY' with your actual YouTube API key
              const response = await axios.get(
                  `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
              );
              setPlaylists(response.data.items);
          } catch (error) {
              console.error('Error fetching playlists:', error);
          }
      };

      fetchPlaylists();
    }, []);


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
              setFilteredVideos(allVideos);  // Initialize filteredVideos with all videos
              setCurrentVideo(allVideos[0]);
              setTotalPages(Math.ceil(allVideos.length / VIDEOS_PER_PAGE));
              const years = [...new Set(allVideos.map(video => new Date(video.snippet.publishedAt).getFullYear()))];
              setAvailableYears(years.sort((a, b) => b - a));
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

      const renderPlaylistPaginationItems = () => {
        const totalPlaylistPages = Math.ceil(playlists.length / playlistsPerPage);
        let items = [];
        for (let number = 1; number <= totalPlaylistPages; number++) {
            items.push(
                <Pagination.Item 
                    key={`playlist-${number}`} 
                    active={number === playlistPage} 
                    onClick={() => setPlaylistPage(number)}
                >
                    {number}
                </Pagination.Item>,
            );
        }
        return items;
       };
  
    return (
      <Container className='streaming-container'>
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
                            
                            {/* Video player with ref */}
                            <div ref={playerRef}>
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${currentVideo.snippet.resourceId.videoId}`}
                                    className="react-player"
                                    width="100%"
                                    height="auto"
                                    controls
                                />
                            </div>
                        </Col>
                    </Row>
                );
                })()}
  
            {/* Dropdowns for filtering */}
            <Row className="justify-content-center mb-5 dropdown-row">
            <Col xs={12} md={4}>
                    <select 
                        className="form-select"
                        value={selectedYear}
                        onChange={handleYearChange}
                    >
                        <option value="">All Years</option>
                        {availableYears.map(year => (
                            <option key={year} value={year.toString()}>{year}</option>
                        ))}
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
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title, subject, speaker"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Col>
            </Row>
          </>
        )}
  
        {/* Recent Sermons Table */}
        <Row className="justify-content-center">
        <Col xs={12} md={10}>
                    <Table striped className="recent-sermons">
                        <tbody>
                            {filteredVideos.slice((currentPage - 1) * VIDEOS_PER_PAGE, currentPage * VIDEOS_PER_PAGE).map((video, index) => {
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
                                                className='sermon-table-watch'
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

        {/* Playlist Section */}
        <SermonSeriesBar/>
        <Row className="justify-content-center series-row">
                <Col xs={12}>
                    <Row>
                        {playlists
                            .slice((playlistPage - 1) * playlistsPerPage, playlistPage * playlistsPerPage)
                            .map((playlist) => (
                            <Col key={playlist.id} xs={12} md={4} className="mb-4">
                                <Card className="sermon-series-card">
                                    <Card.Img 
                                        variant="top" 
                                        src={playlist.snippet.thumbnails.medium.url} 
                                        alt={playlist.snippet.title}
                                    />
                                    <Card.Body>
                                        <Card.Text>{playlist.contentDetails.itemCount} Messages</Card.Text>
                                        <a 
                                            href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="explore-series"
                                        >
                                            Explore This Series
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="justify-content-center mt-4">
                        {renderPlaylistPaginationItems()}
                    </Pagination>
                </Col>
            </Row>
      </Container>
    );
  };

export default SermonStreaming
