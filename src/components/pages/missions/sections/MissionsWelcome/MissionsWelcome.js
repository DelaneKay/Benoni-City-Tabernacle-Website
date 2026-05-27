import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './MissionsWelcome.css';
import MissionsVideo from '../../../../../media/missions/harvest-time-video-20260527.mp4';
import MissionsMobileHero from '../../../../../media/missions/clayville-2.webp'; // add this image
import { shouldUseHeroVideoLayout, useHeroLoader } from '../../../../../utils/HeroLoaderContext';

const MissionsWelcome = ({
  targetId = 'mission-links',
  videoSrc = MissionsVideo,
  mobileHeroSrc = MissionsMobileHero,
  mobileHeroObjectPosition = 'center center',
  mobileHeroStyle = {},
  title = 'Welcome to our Missions Corner',
  description = `BCT is deeply committed to evangelism and outreach programs. The ministry has witnessed
              the birth of sister churches, including Harvest Time Tabernacle and Restored Word
              Daveyton Tabernacle, as part of its mission to spread the End-Time Message. This
              section also shares the baptisms currently taking place at BCT as more people come to
              believe this Message.`,
}) => {
  const { markHeroMediaReady } = useHeroLoader()
  const videoRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const syncHeroReadiness = () => {
      if (shouldUseHeroVideoLayout()) {
        if (videoRef.current && videoRef.current.readyState >= 2) {
          markHeroMediaReady()
        }
        return
      }

      if (imageRef.current?.complete) {
        markHeroMediaReady()
      }
    }

    syncHeroReadiness()
    window.addEventListener('resize', syncHeroReadiness)
    window.addEventListener('orientationchange', syncHeroReadiness)

    return () => {
      window.removeEventListener('resize', syncHeroReadiness)
      window.removeEventListener('orientationchange', syncHeroReadiness)
    }
  }, [markHeroMediaReady])

  const handleWatchNow = () => {
    const missionLinksSection = document.getElementById(targetId)
    if (missionLinksSection) missionLinksSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="missions-video-background-container">
      <Container fluid>
        {/* Video (shown on desktop + tablet landscape via CSS) */}
        <video
          ref={videoRef}
          className="missions-video-background hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          aria-hidden="true"
          onLoadedData={() => {
            if (shouldUseHeroVideoLayout()) markHeroMediaReady()
          }}
          onCanPlay={() => {
            if (shouldUseHeroVideoLayout()) markHeroMediaReady()
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Image (shown on mobile + tablet portrait via CSS) */}
        <img
          ref={imageRef}
          className="missions-image-background hero-image"
          src={mobileHeroSrc}
          alt=""
          aria-hidden="true"
          loading="eager"
          style={{
            objectPosition: mobileHeroObjectPosition,
            ...mobileHeroStyle,
          }}
          onLoad={() => {
            if (!shouldUseHeroVideoLayout()) markHeroMediaReady()
          }}
        />

        {/* Overlay */}
        <div className="missions-video-overlay">
          <div className="missions-overlay-content">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="btn btn-outline-light" onClick={handleWatchNow}>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MissionsWelcome
