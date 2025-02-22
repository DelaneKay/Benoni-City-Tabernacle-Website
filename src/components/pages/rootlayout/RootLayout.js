import React, { useEffect, useState, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../homepage/sections/Navigation/Navigation'
import Footer from '../homepage/sections/Footer/Footer'
import axios from 'axios'
import Loader from '../bctloader/Loader'

const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc'
const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ'

const YOUTUBE_API_KEY_CLAYVILLE = 'AIzaSyC1l8V5uCdqmh2Io1I49RBh1UHJxZhLkOE'
const CHANNEL_ID_CLAYVILLE = 'UClounyqDDsdPH94l5RYXjMw'

const YOUTUBE_API_KEY_SUNDAY_SCHOOL = 'AIzaSyAuCr5jyTjT12nPdI_l9kkcgvnyJzclYME'
const CHANNEL_ID_SUNDAY_SCHOOL = 'UCXbWTjiR03IOZ9qzx5rRotQ'

const RootLayout = () => {
  const [videos, setVideos] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [availableYears, setAvailableYears] = useState([])
  const [videosClayville, setVideosClayville] = useState([])
  const [availableYearsClayville, setAvailableYearsClayville] = useState([])
  const [videosSundaySchool, setVideosSundaySchool] = useState([])
  const [availableYearsSundaySchool, setAvailableYearsSundaySchool] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch global uploads (videos) - Main Channel
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

  // Fetch Clayville channel uploads (videos)
  useEffect(() => {
    const fetchAllVideosClayville = async () => {
      try {
        const channelResponse = await axios.get(
          'https://www.googleapis.com/youtube/v3/channels',
          {
            params: {
              key: YOUTUBE_API_KEY_CLAYVILLE,
              id: CHANNEL_ID_CLAYVILLE,
              part: 'contentDetails',
            },
          }
        )

        const uploadsPlaylistId =
          channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads

        let allVideosClayville = []
        let nextPageToken = ''

        do {
          const playlistResponse = await axios.get(
            'https://www.googleapis.com/youtube/v3/playlistItems',
            {
              params: {
                key: YOUTUBE_API_KEY_CLAYVILLE,
                playlistId: uploadsPlaylistId,
                part: 'snippet',
                maxResults: 50,
                pageToken: nextPageToken,
              },
            }
          )
          allVideosClayville = [...allVideosClayville, ...playlistResponse.data.items]
          nextPageToken = playlistResponse.data.nextPageToken
        } while (nextPageToken)

        setVideosClayville(allVideosClayville)
        const yearsClayville = [
          ...new Set(
            allVideosClayville.map((video) =>
              new Date(video.snippet.publishedAt).getFullYear()
            )
          ),
        ]
        setAvailableYearsClayville(yearsClayville.sort((a, b) => b - a))
      } catch (error) {
        console.error('Error fetching Clayville videos:', error)
      }
    }
    fetchAllVideosClayville()
  }, [])

  // Fetch Sunday School channel uploads (videos)
  useEffect(() => {
    const fetchAllVideosSundaySchool = async () => {
      try {
        const channelResponse = await axios.get(
          'https://www.googleapis.com/youtube/v3/channels',
          {
            params: {
              key: YOUTUBE_API_KEY_SUNDAY_SCHOOL,
              id: CHANNEL_ID_SUNDAY_SCHOOL,
              part: 'contentDetails',
            },
          }
        )

        const uploadsPlaylistId =
          channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads

        let allVideosSundaySchool = []
        let nextPageToken = ''

        do {
          const playlistResponse = await axios.get(
            'https://www.googleapis.com/youtube/v3/playlistItems',
            {
              params: {
                key: YOUTUBE_API_KEY_SUNDAY_SCHOOL,
                playlistId: uploadsPlaylistId,
                part: 'snippet',
                maxResults: 50,
                pageToken: nextPageToken,
              },
            }
          )
          allVideosSundaySchool = [...allVideosSundaySchool, ...playlistResponse.data.items]
          nextPageToken = playlistResponse.data.nextPageToken
        } while (nextPageToken)

        setVideosSundaySchool(allVideosSundaySchool)
        const yearsSundaySchool = [
          ...new Set(
            allVideosSundaySchool.map((video) =>
              new Date(video.snippet.publishedAt).getFullYear()
            )
          ),
        ]
        setAvailableYearsSundaySchool(yearsSundaySchool.sort((a, b) => b - a))
      } catch (error) {
        console.error('Error fetching Sunday School videos:', error)
      }
    }
    fetchAllVideosSundaySchool()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <Navigation />
          </header>
          <main>
            <Outlet
              context={{
                youtubeData: {
                  videos,
                  playlists,
                  availableYears,
                  videosClayville,
                  availableYearsClayville,
                  videosSundaySchool,
                  availableYearsSundaySchool,
                },
              }}
            /> {/* Pass data to child components */}
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
