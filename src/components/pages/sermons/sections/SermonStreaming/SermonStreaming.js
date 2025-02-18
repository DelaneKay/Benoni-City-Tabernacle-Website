import React, { useEffect, useState, useCallback, useRef, Suspense } from 'react'
import { Container, Row, Col, Pagination, Table, Card } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useOutletContext } from 'react-router-dom'
import "./SermonStreaming.css"
import SermonSeriesBar from '../SermonSeriesBar/SermonSeriesBar'
import Skeleton from 'react-loading-skeleton';

// Format date as YY-MMDD
const formatDate = (publishedAt) => {
  const date = new Date(publishedAt)
  const year = date.getFullYear().toString().slice(2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  return `${year}-${month}${day}`
}

// Extract sermon title and speaker from video title
const extractTitleAndSpeaker = (title) => {
  const regex = /^(.*?)\s*-\s*(.*)$/
  const matches = title.match(regex)
  if (matches) {
    const sermonTitle = matches[1].trim()
    const speaker = matches[2].trim()
    return { sermonTitle, speaker }
  } else {
    return { sermonTitle: title, speaker: 'Unknown Speaker' }
  }
}

const VIDEOS_PER_PAGE = 10

const SermonStreaming = () => {
  // Get YouTube data and helper from the outlet context
  const { youtubeData } = useOutletContext()
  const { videos, playlists, availableYears, fetchSeriesVideos } = youtubeData

  // Local UI state
  const [currentVideo, setCurrentVideo] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedSeries, setSelectedSeries] = useState('')
  const [displayedVideos, setDisplayedVideos] = useState([])
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedSpeaker, setSelectedSpeaker] = useState('')
  const [filteredVideos, setFilteredVideos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [playlistPage, setPlaylistPage] = useState(1)

  const playerRef = useRef(null)
  const speakers = [
    'Rev T. Mahere',
    'Bro. Simba Manwere',
    'Bro. Witness Makono',
    'Bro. Jonathan Makono',
    'Pastor William Ndlovu',
    'Bro. Paul Mutimutema',
    'Bro. Kuda Sibanda',
    'Guest Speakers',
  ]

  // Initialize when global videos update
  useEffect(() => {
    if (videos && videos.length > 0) {
      setFilteredVideos(videos)
      setDisplayedVideos(videos)
      setCurrentVideo(videos[0])
      setTotalPages(Math.ceil(videos.length / VIDEOS_PER_PAGE))
    }
  }, [videos])

  // Filtering logic for search, year, and speaker
  const filterVideos = useCallback(
    (searchTerm, year, speaker) => {
      let filtered = videos

      if (searchTerm) {
        const lowercaseSearchTerm = searchTerm.toLowerCase()
        filtered = filtered.filter((video) => {
          const { sermonTitle, speaker: videoSpeaker } = extractTitleAndSpeaker(
            video.snippet.title
          )
          const description = video.snippet.description.toLowerCase()
          return (
            sermonTitle.toLowerCase().includes(lowercaseSearchTerm) ||
            videoSpeaker.toLowerCase().includes(lowercaseSearchTerm) ||
            description.includes(lowercaseSearchTerm)
          )
        })
      }

      if (year) {
        filtered = filtered.filter((video) => {
          const videoYear = new Date(video.snippet.publishedAt).getFullYear().toString()
          return videoYear === year
        })
      }

      if (speaker) {
        filtered = filtered.filter((video) => {
          const { speaker: videoSpeaker } = extractTitleAndSpeaker(video.snippet.title)
          const lowerCaseVideoSpeaker = videoSpeaker.toLowerCase()
          switch (speaker) {
            case 'Rev T. Mahere':
              return lowerCaseVideoSpeaker.includes('mahere')
            case 'Bro. Simba Manwere':
              return lowerCaseVideoSpeaker.includes('manwere')
            case 'Bro. Witness Makono':
              return (
                lowerCaseVideoSpeaker.includes('w. makono') ||
                lowerCaseVideoSpeaker.includes('w makono') ||
                lowerCaseVideoSpeaker.includes('witness makono')
              )
            case 'Bro. Jonathan Makono':
              return (
                lowerCaseVideoSpeaker.includes('jonathan makono') ||
                lowerCaseVideoSpeaker.includes('j makono')
              )
            case 'Pastor William Ndlovu':
              return lowerCaseVideoSpeaker.includes('ndlovu')
            case 'Bro. Paul Mutimutema':
              return lowerCaseVideoSpeaker.includes('mutimutema')
            case 'Bro. Kuda Sibanda':
              return (
                lowerCaseVideoSpeaker.includes('kuda sibanda') ||
                lowerCaseVideoSpeaker.includes('k sibanda')
              )
            case 'Guest Speakers':
              return !['mahere', 'manwere', 'makono', 'ndlovu', 'mutimutema', 'sibanda'].some(
                (name) => lowerCaseVideoSpeaker.includes(name)
              )
            default:
              return true
          }
        })
      }

      setFilteredVideos(filtered)
      setCurrentPage(1)
      setTotalPages(Math.ceil(filtered.length / VIDEOS_PER_PAGE))
    },
    [videos]
  )

  useEffect(() => {
    filterVideos(searchTerm, selectedYear, selectedSpeaker)
  }, [filterVideos, searchTerm, selectedYear, selectedSpeaker])

  const handleSearchChange = (event) => {
    const term = event.target.value
    setSearchTerm(term)
    filterVideos(term, selectedYear, selectedSpeaker)
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
  }

  const handleSpeakerChange = (event) => {
    setSelectedSpeaker(event.target.value)
  }

  const handleSeriesChange = (event) => {
    const seriesId = event.target.value
    setSelectedSeries(seriesId)
    setCurrentPage(1)
  }

  // Fetch series videos when a series is selected
  useEffect(() => {
    const getSeriesVideos = async () => {
      if (selectedSeries) {
        const seriesVideos = await fetchSeriesVideos(selectedSeries)
        setDisplayedVideos(seriesVideos)
        setTotalPages(Math.ceil(seriesVideos.length / VIDEOS_PER_PAGE))
      } else {
        setDisplayedVideos(videos)
        setTotalPages(Math.ceil(videos.length / VIDEOS_PER_PAGE))
      }
    }
    getSeriesVideos()
  }, [selectedSeries, videos, fetchSeriesVideos])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const renderPaginationItems = () => {
    let items = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let number = 1; number <= totalPages; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        )
      }
    } else {
      items.push(<Pagination.First key="first" onClick={() => handlePageChange(1)} />)
      items.push(
        <Pagination.Prev key="prev" onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
      )

      let startPage = Math.max(1, currentPage - 2)
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

      if (startPage > 1) {
        items.push(<Pagination.Ellipsis key="ellipsis-start" />)
      }

      for (let number = startPage; number <= endPage; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        )
      }

      if (endPage < totalPages) {
        items.push(<Pagination.Ellipsis key="ellipsis-end" />)
      }

      items.push(
        <Pagination.Next
          key="next"
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        />
      )
      items.push(<Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} />)
    }
    return items
  }

  const renderPlaylistPaginationItems = () => {
    const playlistsPerPage = 9
    const totalPlaylistPages = Math.ceil(playlists.length / playlistsPerPage)
    let items = []
    for (let number = 1; number <= totalPlaylistPages; number++) {
      items.push(
        <Pagination.Item
          key={`playlist-${number}`}
          active={number === playlistPage}
          onClick={() => setPlaylistPage(number)}
        >
          {number}
        </Pagination.Item>
      )
    }
    return items
  }

  return (
    <Container className='streaming-container'>
      {currentVideo && (
        <>
          {(() => {
            const { sermonTitle, speaker } = extractTitleAndSpeaker(
              currentVideo.snippet.title
            )
            const formattedDate = formatDate(currentVideo.snippet.publishedAt)
            return (
              <Row className="justify-content-center my-5 mb-4">
                <Col xs={12} md={10}>
                  <div className="sermon-header mb-1">
                    <h3 className="sermon-title">{sermonTitle}</h3>
                    <h3 className="sermon-title speaker-info">
                      <i>
                        {speaker} {formattedDate}
                      </i>
                    </h3>
                  </div>
                  <div ref={playerRef}>
                    <Suspense fallback={<Skeleton height="100%" width="100%" />}>
                        <ReactPlayer 
                          url={`https://www.youtube.com/watch?v=${currentVideo.snippet.resourceId.videoId}`}
                          className="react-player"
                          width="100%"
                          height="auto"
                          controls />
                    </Suspense>
                  </div>
                </Col>
              </Row>
            )
          })()}
          <Row className="justify-content-center mb-5 dropdown-row">
            <Col xs={12} md={4}>
              <select
                className="form-select"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="">All Years</option>
                {availableYears.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
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

      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Table striped className="recent-sermons">
            <tbody>
              {filteredVideos
                .slice(
                  (currentPage - 1) * VIDEOS_PER_PAGE,
                  currentPage * VIDEOS_PER_PAGE
                )
                .map((video, index) => {
                  const { sermonTitle, speaker } = extractTitleAndSpeaker(
                    video.snippet.title
                  )
                  return (
                    <tr key={index}>
                      <td>{formatDate(video.snippet.publishedAt)}</td>
                      <td>
                        <b>{sermonTitle}</b>
                      </td>
                      <td>{speaker}</td>
                      <td>
                        <a
                          href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sermon-table-watch"
                        >
                          Watch
                        </a>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
          <Pagination>{renderPaginationItems()}</Pagination>
        </Col>
      </Row>

      <SermonSeriesBar />
      <Row className="justify-content-center series-row">
        <Col xs={12}>
          <Row>
            {playlists
              .slice((playlistPage - 1) * 9, playlistPage * 9)
              .map((playlist) => (
                <Col key={playlist.id} xs={12} md={4} className="mb-4">
                  <Card className="sermon-series-card">
                    <Card.Img
                      variant="top"
                      src={playlist.snippet.thumbnails.medium.url}
                      alt={playlist.snippet.title}
                    />
                    <Card.Body>
                      <Card.Text>
                        {playlist.contentDetails.itemCount} Messages
                      </Card.Text>
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
  )
}

export default SermonStreaming
