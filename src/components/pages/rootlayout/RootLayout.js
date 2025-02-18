import React, { useEffect, useState, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../homepage/sections/Navigation/Navigation'
import Footer from '../homepage/sections/Footer/Footer'
import axios from 'axios'
import Loader from '../bctloader/Loader'

const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc'
const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ'

const RootLayout = () => {
  const [videos, setVideos] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [availableYears, setAvailableYears] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch global uploads (videos)
  useEffect(() => {
    const fetchAllVideos = async () => {
      setIsLoading(true)
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
        )

        const uploadsPlaylistId =
          channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads

        let allVideos = []
        let nextPageToken = ''

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
          )
          allVideos = [...allVideos, ...playlistResponse.data.items]
          nextPageToken = playlistResponse.data.nextPageToken
        } while (nextPageToken)

        setVideos(allVideos)
        const years = [
          ...new Set(
            allVideos.map((video) =>
              new Date(video.snippet.publishedAt).getFullYear()
            )
          ),
        ]
        setAvailableYears(years.sort((a, b) => b - a))
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAllVideos()
  }, [])

  // Fetch playlists
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/playlists',
          {
            params: {
              part: 'snippet,contentDetails',
              channelId: CHANNEL_ID,
              maxResults: 50,
              key: YOUTUBE_API_KEY,
            },
          }
        )
        setPlaylists(response.data.items)
      } catch (error) {
        console.error('Error fetching playlists:', error)
      }
    }
    fetchPlaylists()
  }, [])

  // Helper function to fetch series videos on demand
  const fetchSeriesVideos = async (playlistId) => {
    try {
      let seriesVideos = []
      let nextPageToken = ''
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
        )
        seriesVideos = [...seriesVideos, ...response.data.items]
        nextPageToken = response.data.nextPageToken
      } while (nextPageToken)
      return seriesVideos
    } catch (error) {
      console.error('Error fetching series videos:', error)
      return []
    }
  }

  // Package data and helper into a single object
  const youtubeData = {
    videos,
    playlists,
    availableYears,
    fetchSeriesVideos,
  }

  return (
    <>
      {isLoading ? (
        // Preloader UI
        <Loader />
      ) : (
        <>
          <header>
            <Navigation />
          </header>
          <main>
            <Outlet context={{ youtubeData }} /> {/* Pass data to child components */}
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  )
}

export default RootLayout
