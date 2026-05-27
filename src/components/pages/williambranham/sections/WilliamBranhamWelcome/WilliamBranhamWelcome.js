import React, { useEffect, useRef } from 'react';
import './WilliamBranhamWelcome.css';
import { Container } from 'react-bootstrap';
import MissionsVideo from '../../../../../media/WMB/WMB-video-optimized.mp4';
import WMBHeroMobile from '../../../../../media/WMB/wmb-1.webp'; // add this image
import { shouldUseHeroVideoLayout, useHeroLoader } from '../../../../../utils/HeroLoaderContext';

const WilliamBranhamWelcome = () => {
  const { markHeroMediaReady } = useHeroLoader();
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const syncHeroReadiness = () => {
      if (shouldUseHeroVideoLayout()) {
        if (videoRef.current && videoRef.current.readyState >= 2) {
          markHeroMediaReady();
        }
        return;
      }

      if (imageRef.current?.complete) {
        markHeroMediaReady();
      }
    };

    syncHeroReadiness();
    window.addEventListener('resize', syncHeroReadiness);
    window.addEventListener('orientationchange', syncHeroReadiness);

    return () => {
      window.removeEventListener('resize', syncHeroReadiness);
      window.removeEventListener('orientationchange', syncHeroReadiness);
    };
  }, [markHeroMediaReady]);

  const handleWatchNow = () => {
    const prophetSection = document.getElementById('prophet');
    if (prophetSection) {
      prophetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="william-branham-video-background-container">
      <Container fluid>
        {/* Video (desktop + tablet landscape via CSS) */}
        <video
          ref={videoRef}
          className="william-branham-video-background hero-video"
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
            if (shouldUseHeroVideoLayout()) markHeroMediaReady();
          }}
          onCanPlay={() => {
            if (shouldUseHeroVideoLayout()) markHeroMediaReady();
          }}
        >
          <source src={MissionsVideo} type="video/mp4" />
        </video>

        {/* Image (mobile + tablet portrait via CSS) */}
        <img
          ref={imageRef}
          className="william-branham-image-background hero-image"
          src={WMBHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
          onLoad={() => {
            if (!shouldUseHeroVideoLayout()) markHeroMediaReady();
          }}
        />

        {/* Overlay */}
        <div className="william-branham-video-overlay">
          <div className="william-branham-overlay-content">
            <h1>Welcome to our Prophet's Corner</h1>
            <p>
              William Branham was a prophet sent by God. His ministry was marked by supernatural
              vindication, deep spiritual revelations, and a prophetic voice that prepared us for
              the soon return of our Lord
            </p>
            <button className="btn btn-outline-light" onClick={handleWatchNow}>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WilliamBranhamWelcome;
