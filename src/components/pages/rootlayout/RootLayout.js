import React, { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../homepage/sections/Navigation/Navigation'
import Footer from '../homepage/sections/Footer/Footer'
import axios from 'axios'
import Loader from '../bctloader/Loader'
import ScrollToTop from '../../utils/ScrollToTop'

const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc'
const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ'
const YOUTUBE_API_KEY_CLAYVILLE = 'AIzaSyC1l8V5uCdqmh2Io1I49RBh1UHJxZhLkOE'
const CHANNEL_ID_CLAYVILLE = 'UClounyqDDsdPH94l5RYXjMw'
const YOUTUBE_API_KEY_RESTORED = 'AIzaSyBXB0-qpRU3LUBV32E2anoXQWBYRSeUmIs'
const CHANNEL_ID_RESTORED = 'UCnh-KrC3TB3HetwnYNOnMRw'

const YOUTUBE_API_KEY_SUNDAY_SCHOOL = 'AIzaSyAuCr5jyTjT12nPdI_l9kkcgvnyJzclYME'
const CHANNEL_ID_SUNDAY_SCHOOL = 'UCXbWTjiR03IOZ9qzx5rRotQ'
const HOMEPAGE_LATEST_CACHE_KEY = 'bct-homepage-main-latest'
const HOMEPAGE_LATEST_CACHE_TTL_MS = 1000 * 60 * 10
const MAIN_YOUTUBE_API_KEYS = [
  YOUTUBE_API_KEY,
  YOUTUBE_API_KEY_CLAYVILLE,
  YOUTUBE_API_KEY_SUNDAY_SCHOOL,
]
const RESTORED_YOUTUBE_API_KEYS = [
  YOUTUBE_API_KEY_RESTORED,
  YOUTUBE_API_KEY,
  YOUTUBE_API_KEY_CLAYVILLE,
  YOUTUBE_API_KEY_SUNDAY_SCHOOL,
]

const youtubeCache = {
  mainLatest: null,
  mainLatestPromise: null,
  mainRecentArchive: null,
  mainRecentArchivePromise: null,
  mainArchive: null,
  mainArchivePromise: null,
  mainPlaylists: null,
  mainPlaylistsPromise: null,
  clayvilleLatest: null,
  clayvilleLatestPromise: null,
  restoredLatest: null,
  restoredLatestPromise: null,
  sundaySchoolLatest: null,
  sundaySchoolLatestPromise: null,
  seriesVideos: {},
  seriesVideosPromises: {},
}

function normalizePathname(pathname = '') {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

async function fetchUploadsPlaylistId(apiKey, channelId) {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
    params: {
      key: apiKey,
      id: channelId,
      part: 'contentDetails',
    },
  })

  return response.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null
}

async function fetchPlaylistItems(apiKey, playlistId, maxResults, pageToken = '') {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      key: apiKey,
      playlistId,
      part: 'snippet',
      maxResults,
      pageToken,
    },
  })

  return response.data
}

async function fetchLatestUploads(apiKey, channelId, maxResults = 1) {
  const uploadsPlaylistId = await fetchUploadsPlaylistId(apiKey, channelId)

  if (!uploadsPlaylistId) {
    return []
  }

  const data = await fetchPlaylistItems(apiKey, uploadsPlaylistId, maxResults)
  return data.items || []
}

async function fetchAllUploads(apiKey, channelId) {
  const uploadsPlaylistId = await fetchUploadsPlaylistId(apiKey, channelId)

  if (!uploadsPlaylistId) {
    return []
  }

  let allVideos = []
  let nextPageToken = ''

  do {
    const data = await fetchPlaylistItems(apiKey, uploadsPlaylistId, 50, nextPageToken)
    allVideos = [...allVideos, ...(data.items || [])]
    nextPageToken = data.nextPageToken || ''
  } while (nextPageToken)

  return allVideos
}

async function fetchChannelPlaylists(apiKey, channelId) {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
    params: {
      part: 'snippet,contentDetails',
      channelId,
      maxResults: 50,
      key: apiKey,
    },
  })

  return response.data.items || []
}

async function fetchSeriesVideosByPlaylistId(apiKey, playlistId) {
  let allVideos = []
  let nextPageToken = ''

  do {
    const data = await fetchPlaylistItems(apiKey, playlistId, 50, nextPageToken)
    allVideos = [...allVideos, ...(data.items || [])]
    nextPageToken = data.nextPageToken || ''
  } while (nextPageToken)

  return allVideos
}

async function tryApiKeys(apiKeys, fetcher) {
  let lastError = null

  for (const apiKey of apiKeys) {
    try {
      return await fetcher(apiKey)
    } catch (error) {
      lastError = error
    }
  }

  throw lastError || new Error('All YouTube API keys failed.')
}

async function fetchMainLatestUploads(maxResults = 1) {
  return tryApiKeys(MAIN_YOUTUBE_API_KEYS, (apiKey) =>
    fetchLatestUploads(apiKey, CHANNEL_ID, maxResults)
  )
}

async function fetchMainAllUploads() {
  return tryApiKeys(MAIN_YOUTUBE_API_KEYS, (apiKey) =>
    fetchAllUploads(apiKey, CHANNEL_ID)
  )
}

async function fetchMainPlaylists() {
  return tryApiKeys(MAIN_YOUTUBE_API_KEYS, (apiKey) =>
    fetchChannelPlaylists(apiKey, CHANNEL_ID)
  )
}

async function fetchMainSeriesVideos(playlistId) {
  return tryApiKeys(MAIN_YOUTUBE_API_KEYS, (apiKey) =>
    fetchSeriesVideosByPlaylistId(apiKey, playlistId)
  )
}

async function fetchRestoredLatestUploads(maxResults = 1) {
  return tryApiKeys(RESTORED_YOUTUBE_API_KEYS, (apiKey) =>
    fetchLatestUploads(apiKey, CHANNEL_ID_RESTORED, maxResults)
  )
}

function extractYears(videos) {
  return [
    ...new Set(
      videos.map((video) => new Date(video.snippet.publishedAt).getFullYear())
    ),
  ].sort((a, b) => b - a)
}

async function loadCachedResource(cacheKey, promiseKey, fetcher) {
  if (youtubeCache[cacheKey]) {
    return youtubeCache[cacheKey]
  }

  if (!youtubeCache[promiseKey]) {
    youtubeCache[promiseKey] = fetcher()
      .then((result) => {
        youtubeCache[cacheKey] = result
        return result
      })
      .finally(() => {
        youtubeCache[promiseKey] = null
      })
  }

  return youtubeCache[promiseKey]
}

function readPersistentCache(cacheKey, ttlMs) {
  try {
    const rawValue = window.localStorage.getItem(cacheKey)
    if (!rawValue) {
      return null
    }

    const parsedValue = JSON.parse(rawValue)
    if (!parsedValue || typeof parsedValue !== 'object' || !parsedValue.timestamp) {
      return null
    }

    return {
      data: parsedValue.data,
      isExpired: Date.now() - parsedValue.timestamp > ttlMs,
    }
  } catch (error) {
    return null
  }
}

function writePersistentCache(cacheKey, data) {
  try {
    window.localStorage.setItem(
      cacheKey,
      JSON.stringify({
        timestamp: Date.now(),
        data,
      })
    )
  } catch (error) {
    // Ignore storage failures and keep runtime behavior intact.
  }
}

const RootLayout = () => {
  const location = useLocation()
  const normalizedPathname = normalizePathname(location.pathname)
  const initialHomepageCache =
    normalizedPathname === '/'
      ? readPersistentCache(HOMEPAGE_LATEST_CACHE_KEY, HOMEPAGE_LATEST_CACHE_TTL_MS)
      : null
  const initialHomepageVideos = initialHomepageCache?.data || []
  const [videos, setVideos] = useState(initialHomepageVideos)
  const [playlists, setPlaylists] = useState([])
  const [availableYears, setAvailableYears] = useState(
    extractYears(initialHomepageVideos)
  )
  const [videosClayville, setVideosClayville] = useState([])
  const [availableYearsClayville, setAvailableYearsClayville] = useState([])
  const [videosRestored, setVideosRestored] = useState([])
  const [availableYearsRestored, setAvailableYearsRestored] = useState([])
  const [videosSundaySchool, setVideosSundaySchool] = useState([])
  const [availableYearsSundaySchool, setAvailableYearsSundaySchool] = useState([])
  const [isLoading, setIsLoading] = useState(() => {
    const pathname = normalizedPathname

    if (pathname === '/' && initialHomepageVideos.length > 0) {
      return false
    }

    return (
      pathname === '/' ||
      pathname === '/sermons' ||
      pathname === '/missionary/harvest-time-tabernacle' ||
      pathname === '/missionary/restored-word-daveyton-tabernacle' ||
      pathname === '/sunday-school/presentations'
    )
  })

  const routeNeeds = useMemo(() => {
    const pathname = normalizedPathname
    const needsMainLatest = pathname === '/'
    const needsMainArchive = pathname === '/sermons'
    const needsClayvilleLatest = pathname === '/missionary/harvest-time-tabernacle'
    const needsRestoredLatest = pathname === '/missionary/restored-word-daveyton-tabernacle'
    const needsSundaySchoolLatest = pathname === '/sunday-school/presentations'

    return {
      needsMainLatest,
      needsMainArchive,
      needsClayvilleLatest,
      needsRestoredLatest,
      needsSundaySchoolLatest,
      requiresYoutubeData:
        needsMainLatest ||
        needsMainArchive ||
        needsClayvilleLatest ||
        needsRestoredLatest ||
        needsSundaySchoolLatest,
    }
  }, [normalizedPathname])

  useEffect(() => {
    let cancelled = false

    const clearYoutubeState = () => {
      setVideos([])
      setPlaylists([])
      setAvailableYears([])
      setVideosClayville([])
      setAvailableYearsClayville([])
      setVideosRestored([])
      setAvailableYearsRestored([])
      setVideosSundaySchool([])
      setAvailableYearsSundaySchool([])
    }

    async function loadRouteData() {
      if (!routeNeeds.requiresYoutubeData) {
        clearYoutubeState()
        setIsLoading(false)
        return
      }

      setIsLoading(true)

      try {
        if (routeNeeds.needsMainLatest) {
          const cachedLatest = readPersistentCache(
            HOMEPAGE_LATEST_CACHE_KEY,
            HOMEPAGE_LATEST_CACHE_TTL_MS
          )

          if (cachedLatest?.data?.length && !cancelled) {
            setVideos(cachedLatest.data)
            setPlaylists([])
            setAvailableYears(extractYears(cachedLatest.data))
            setVideosClayville([])
            setAvailableYearsClayville([])
            setVideosRestored([])
            setAvailableYearsRestored([])
            setVideosSundaySchool([])
            setAvailableYearsSundaySchool([])
            setIsLoading(false)
          }

          if (cachedLatest?.data?.length && !cachedLatest.isExpired) {
            return
          }

          const latestVideos = youtubeCache.mainArchive?.length
            ? youtubeCache.mainArchive.slice(0, 1)
            : await loadCachedResource('mainLatest', 'mainLatestPromise', () =>
                fetchMainLatestUploads(1)
              )

          if (cancelled) {
            return
          }

          writePersistentCache(HOMEPAGE_LATEST_CACHE_KEY, latestVideos)
          setVideos(latestVideos)
          setPlaylists([])
          setAvailableYears(extractYears(latestVideos))
          setVideosClayville([])
          setAvailableYearsClayville([])
          setVideosRestored([])
          setAvailableYearsRestored([])
          setVideosSundaySchool([])
          setAvailableYearsSundaySchool([])
          return
        }

        if (routeNeeds.needsMainArchive) {
          let recentVideos = []
          let allPlaylists = []

          try {
            recentVideos = await loadCachedResource(
              'mainRecentArchive',
              'mainRecentArchivePromise',
              () => fetchMainLatestUploads(50)
            )

            if (!recentVideos.length) {
              recentVideos = await fetchMainLatestUploads(50)

              if (recentVideos.length) {
                youtubeCache.mainRecentArchive = recentVideos
              }
            }
          } catch (recentVideosError) {
            console.warn('Recent sermons failed to load for the sermons page.', recentVideosError)
            recentVideos = []
          }

          try {
            allPlaylists = await loadCachedResource('mainPlaylists', 'mainPlaylistsPromise', () =>
              fetchMainPlaylists()
            )
          } catch (playlistError) {
            console.warn('Sermon playlists failed to load; continuing without series cards.', playlistError)
            allPlaylists = youtubeCache.mainPlaylists || []
          }

          if (cancelled) {
            return
          }

          if (!recentVideos.length && !allPlaylists.length) {
            throw new Error('No sermons or playlists could be loaded for the sermons page.')
          }

          setVideos(recentVideos)
          setPlaylists(allPlaylists)
          setAvailableYears(extractYears(recentVideos))
          setVideosClayville([])
          setAvailableYearsClayville([])
          setVideosRestored([])
          setAvailableYearsRestored([])
          setVideosSundaySchool([])
          setAvailableYearsSundaySchool([])
          return
        }

        if (routeNeeds.needsClayvilleLatest) {
          const latestClayvilleVideos = await loadCachedResource(
            'clayvilleLatest',
            'clayvilleLatestPromise',
            () =>
              fetchLatestUploads(
                YOUTUBE_API_KEY_CLAYVILLE,
                CHANNEL_ID_CLAYVILLE,
                1
              )
          )

          if (cancelled) {
            return
          }

          setVideos([])
          setPlaylists([])
          setAvailableYears([])
          setVideosClayville(latestClayvilleVideos)
          setAvailableYearsClayville(extractYears(latestClayvilleVideos))
          setVideosRestored([])
          setAvailableYearsRestored([])
          setVideosSundaySchool([])
          setAvailableYearsSundaySchool([])
          return
        }

        if (routeNeeds.needsRestoredLatest) {
          const latestRestoredVideos = await loadCachedResource(
            'restoredLatest',
            'restoredLatestPromise',
            () => fetchRestoredLatestUploads(1)
          )

          if (cancelled) {
            return
          }

          setVideos([])
          setPlaylists([])
          setAvailableYears([])
          setVideosClayville([])
          setAvailableYearsClayville([])
          setVideosRestored(latestRestoredVideos)
          setAvailableYearsRestored(extractYears(latestRestoredVideos))
          setVideosSundaySchool([])
          setAvailableYearsSundaySchool([])
          return
        }

        if (routeNeeds.needsSundaySchoolLatest) {
          const latestSundaySchoolVideos = await loadCachedResource(
            'sundaySchoolLatest',
            'sundaySchoolLatestPromise',
            () =>
              fetchLatestUploads(
                YOUTUBE_API_KEY_SUNDAY_SCHOOL,
                CHANNEL_ID_SUNDAY_SCHOOL,
                1
              )
          )

          if (cancelled) {
            return
          }

          setVideos([])
          setPlaylists([])
          setAvailableYears([])
          setVideosClayville([])
          setAvailableYearsClayville([])
          setVideosRestored([])
          setAvailableYearsRestored([])
          setVideosSundaySchool(latestSundaySchoolVideos)
          setAvailableYearsSundaySchool(extractYears(latestSundaySchoolVideos))
        }
      } catch (error) {
        console.error('Error fetching YouTube data:', error)

        if (!cancelled) {
          clearYoutubeState()
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    loadRouteData()

    return () => {
      cancelled = true
    }
  }, [routeNeeds])

  const fetchSeriesVideos = async (playlistId) => {
    if (!playlistId) {
      return []
    }

    if (youtubeCache.seriesVideos[playlistId]) {
      return youtubeCache.seriesVideos[playlistId]
    }

    if (!youtubeCache.seriesVideosPromises[playlistId]) {
      youtubeCache.seriesVideosPromises[playlistId] = fetchMainSeriesVideos(playlistId)
        .then((result) => {
          youtubeCache.seriesVideos[playlistId] = result
          return result
        })
        .finally(() => {
          delete youtubeCache.seriesVideosPromises[playlistId]
        })
    }

    return youtubeCache.seriesVideosPromises[playlistId]
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <Navigation />
            <ScrollToTop />
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
                  videosRestored,
                  availableYearsRestored,
                  videosSundaySchool,
                  availableYearsSundaySchool,
                  fetchSeriesVideos,
                },
              }}
            />
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
