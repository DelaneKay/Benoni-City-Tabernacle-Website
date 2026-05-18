import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player/youtube'
import { Col, Container, Row } from 'react-bootstrap'
import watchLiveSunset from '../../../../media/Sermons/watch-live-sunset.jpg'
import './Livestream.css'

const YOUTUBE_API_KEY = 'AIzaSyBjmavsrJQ2B12Il4Ew29Je_JV3_Kdq3Qc'
const CHANNEL_ID = 'UCvc5U-1XOSmGqjsulifW4LQ'
const LIVE_STATUS_REFRESH_MS = 60 * 1000
const SAST_OFFSET_HOURS = 2

const formatCountdown = (diffMs) => {
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000))
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  if (days > 0) {
    return `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`
  }

  return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`
}

const formatScheduledTime = (dateString) => {
  if (!dateString) {
    return 'Schedule not available yet'
  }

  const date = new Date(dateString)

  return new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

const getNextRegularService = (now = new Date()) => {
  const nowUtcMs = now.getTime() + now.getTimezoneOffset() * 60 * 1000
  const nowSast = new Date(nowUtcMs + SAST_OFFSET_HOURS * 60 * 60 * 1000)
  const currentDay = nowSast.getUTCDay()
  const currentHour = nowSast.getUTCHours()
  const currentMinute = nowSast.getUTCMinutes()

  const candidateServices = [
    {
      day: 0,
      hour: 10,
      minute: 0,
      label: 'Sunday Morning Service',
    },
    {
      day: 3,
      hour: 19,
      minute: 0,
      label: 'Wednesday Evening Service',
    },
  ]
    .map((service) => {
      const serviceDate = new Date(nowSast)
      let daysUntil = (service.day - currentDay + 7) % 7

      if (
        daysUntil === 0 &&
        (currentHour > service.hour ||
          (currentHour === service.hour && currentMinute >= service.minute))
      ) {
        daysUntil = 7
      }

      serviceDate.setUTCDate(nowSast.getUTCDate() + daysUntil)
      serviceDate.setUTCHours(service.hour, service.minute, 0, 0)

      return {
        label: service.label,
        startDate: serviceDate,
      }
    })
    .sort((a, b) => a.startDate - b.startDate)

  const nextService = candidateServices[0]
  const nextServiceUtcMs =
    nextService.startDate.getTime() - SAST_OFFSET_HOURS * 60 * 60 * 1000

  return {
    label: nextService.label,
    isoTime: new Date(nextServiceUtcMs).toISOString(),
  }
}

const Livestream = () => {
  const [streamState, setStreamState] = useState({
    mode: 'checking',
    liveVideoId: '',
    liveTitle: '',
    upcomingTitle: '',
    upcomingTime: '',
  })
  const [nextStreamCard, setNextStreamCard] = useState({
    title: '',
    scheduledTime: '',
    countdown: '',
    isFallbackSchedule: false,
  })

  useEffect(() => {
    let cancelled = false

    const refreshNextStreamCard = (scheduledIsoTime, title, isFallbackSchedule) => {
      if (!scheduledIsoTime) {
        return
      }

      const diff = new Date(scheduledIsoTime).getTime() - Date.now()

      setNextStreamCard({
        title,
        scheduledTime: formatScheduledTime(scheduledIsoTime),
        countdown: formatCountdown(diff),
        isFallbackSchedule,
      })
    }

    const fetchUpcomingStream = async () => {
      const upcomingResponse = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            channelId: CHANNEL_ID,
            eventType: 'upcoming',
            maxResults: 1,
            order: 'date',
            type: 'video',
            key: YOUTUBE_API_KEY,
          },
        }
      )

      const upcomingItem = upcomingResponse.data.items?.[0]

      if (!upcomingItem?.id?.videoId) {
        const regularService = getNextRegularService()

        return {
          mode: 'offline',
          liveVideoId: '',
          liveTitle: '',
          upcomingTitle: regularService.label,
          upcomingTime: regularService.isoTime,
        }
      }

      const detailsResponse = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',
        {
          params: {
            part: 'snippet,liveStreamingDetails',
            id: upcomingItem.id.videoId,
            key: YOUTUBE_API_KEY,
          },
        }
      )

      const upcomingVideo = detailsResponse.data.items?.[0]

      return {
        mode: 'upcoming',
        liveVideoId: '',
        liveTitle: '',
        upcomingTitle:
          upcomingVideo?.snippet?.title ||
          upcomingItem?.snippet?.title ||
          'Upcoming live stream',
        upcomingTime:
          upcomingVideo?.liveStreamingDetails?.scheduledStartTime || '',
      }
    }

    const fetchLiveStatus = async () => {
      if (!cancelled) {
        setStreamState((currentState) => ({
          ...currentState,
          mode: currentState.mode === 'live' ? 'live' : 'checking',
        }))
      }

      try {
        const liveResponse = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              channelId: CHANNEL_ID,
              eventType: 'live',
              maxResults: 1,
              type: 'video',
              key: YOUTUBE_API_KEY,
            },
          }
        )

        const liveItem = liveResponse.data.items?.[0]

        if (liveItem?.id?.videoId) {
          if (!cancelled) {
            setStreamState({
              mode: 'live',
              liveVideoId: liveItem.id.videoId,
              liveTitle: liveItem.snippet?.title || 'Benoni City Tabernacle Live',
              upcomingTitle: '',
              upcomingTime: '',
            })
            setNextStreamCard({
              title: 'Live stream is active now',
              scheduledTime: 'Now streaming on YouTube',
              countdown: '',
              isFallbackSchedule: false,
            })
          }

          return
        }

        const upcomingState = await fetchUpcomingStream()

        if (!cancelled) {
          setStreamState(upcomingState)
          if (upcomingState.upcomingTime) {
            refreshNextStreamCard(
              upcomingState.upcomingTime,
              upcomingState.upcomingTitle || 'Next Stream',
              upcomingState.mode !== 'upcoming'
            )
          }
        }
      } catch (error) {
        const regularService = getNextRegularService()

        if (!cancelled) {
          setStreamState({
            mode: 'error',
            liveVideoId: '',
            liveTitle: '',
            upcomingTitle: regularService.label,
            upcomingTime: regularService.isoTime,
          })
          refreshNextStreamCard(
            regularService.isoTime,
            regularService.label,
            true
          )
        }
      }
    }

    fetchLiveStatus()
    const interval = setInterval(fetchLiveStatus, LIVE_STATUS_REFRESH_MS)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const nextScheduledIso =
      streamState.mode === 'live' ? '' : streamState.upcomingTime

    if (!nextScheduledIso) {
      return undefined
    }

    const interval = setInterval(() => {
      const isFallbackSchedule =
        streamState.mode === 'offline' || streamState.mode === 'error'

      setNextStreamCard({
        title: streamState.upcomingTitle || 'Next Stream',
        scheduledTime: formatScheduledTime(nextScheduledIso),
        countdown: formatCountdown(new Date(nextScheduledIso).getTime() - Date.now()),
        isFallbackSchedule,
      })
    }, 1000)

    setNextStreamCard({
      title: streamState.upcomingTitle || 'Next Stream',
      scheduledTime: formatScheduledTime(nextScheduledIso),
      countdown: formatCountdown(new Date(nextScheduledIso).getTime() - Date.now()),
      isFallbackSchedule:
        streamState.mode === 'offline' || streamState.mode === 'error',
    })

    return () => clearInterval(interval)
  }, [streamState.mode, streamState.upcomingTime, streamState.upcomingTitle])

  const isLive = streamState.mode === 'live'
  const statusLabel =
    streamState.mode === 'live'
      ? 'Live Now'
      : streamState.mode === 'checking'
        ? 'Checking Live Status'
        : streamState.mode === 'upcoming'
          ? 'Upcoming'
          : streamState.mode === 'error'
            ? 'Unable To Check'
            : 'Offline'

  const statusDescription =
    streamState.mode === 'live'
      ? streamState.liveTitle
      : streamState.mode === 'checking'
        ? 'Checking Benoni City Tabernacle on YouTube for a live stream.'
        : streamState.mode === 'upcoming'
          ? streamState.upcomingTitle
          : streamState.mode === 'error'
            ? 'The YouTube live status could not be loaded right now.'
            : 'No live stream is active at the moment.'

  const heroBackgroundStyle = {
    backgroundImage: `linear-gradient(rgba(11, 18, 28, 0.68), rgba(11, 18, 28, 0.68)), url(${watchLiveSunset})`,
  }

  return (
    <>
      <div className="navbar-background-placeholder" style={heroBackgroundStyle} />

      <section className="watch-live-status-band" style={heroBackgroundStyle}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <h1 className="watch-live-page-title">Watch Live</h1>
              <p className="watch-live-page-copy">
                Follow the stream directly from the website. This page checks the
                channel&apos;s actual YouTube live status first, then falls back to
                the regular service schedule when no upcoming stream has been published yet.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <div className="watch-live-status-card">
                <span className="watch-live-status-label">{statusLabel}</span>
                <h2 className="watch-live-status-heading">{statusDescription}</h2>
                {streamState.mode === 'upcoming' && streamState.upcomingTime ? (
                  <p className="watch-live-status-meta">
                    Next scheduled stream: {formatScheduledTime(streamState.upcomingTime)}
                  </p>
                ) : (
                  <p className="watch-live-status-meta">
                    Channel: Benoni City Tabernacle
                  </p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="watch-live-info-section">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="watch-live-info-tile">
                <span className="watch-live-info-kicker">Status</span>
                <h3>{statusLabel}</h3>
                <p>Live detection is based on the channel&apos;s current YouTube stream state.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="watch-live-info-tile watch-live-info-tile-gray">
                <span className="watch-live-info-kicker">Next Stream</span>
                <h3>{nextStreamCard.countdown || 'Waiting'}</h3>
                <p>
                  {nextStreamCard.title
                    ? `${nextStreamCard.title}${nextStreamCard.scheduledTime ? ` • ${nextStreamCard.scheduledTime}` : ''}`
                    : 'A scheduled upcoming stream has not been published yet.'}
                </p>
                {nextStreamCard.isFallbackSchedule && (
                  <p className="watch-live-fallback-note">
                    Based on the regular Wednesday 19:00 SAST and Sunday 10:00 SAST schedule.
                  </p>
                )}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="watch-live-info-tile">
                <span className="watch-live-info-kicker">Channel</span>
                <h3>Benoni City Tabernacle</h3>
                <p>Use the website player here or follow the stream directly on YouTube.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="watch-live-player-section">
        <Container>
          <div className="watch-live-player-shell">
            {isLive ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${streamState.liveVideoId}`}
                controls
                width="100%"
                height="100%"
                playing
              />
            ) : (
              <div className="watch-live-offline-state">
                <span className="watch-live-pill">{statusLabel}</span>
                <h2 className="watch-live-offline-title">
                  {streamState.mode === 'upcoming'
                    ? 'The next stream is scheduled.'
                    : streamState.mode === 'checking'
                      ? 'Checking the live stream now.'
                      : streamState.mode === 'error'
                        ? 'We could not confirm the live stream right now.'
                        : 'There is no active stream right now.'}
                </h2>
                <p className="watch-live-offline-copy">
                  {streamState.mode === 'upcoming' && streamState.upcomingTime
                    ? `${streamState.upcomingTitle} is currently scheduled for ${formatScheduledTime(streamState.upcomingTime)}.`
                    : streamState.mode === 'error'
                      ? 'Please refresh in a moment or watch directly on YouTube while the live status reconnects.'
                      : 'When the channel goes live on YouTube, this player will switch over here automatically.'}
                </p>
                <div className="watch-live-actions">
                  <a
                    href="https://www.youtube.com/@BenoniCityTabernacle"
                    className="watch-live-primary-link"
                  >
                    Open YouTube Channel
                  </a>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Livestream
