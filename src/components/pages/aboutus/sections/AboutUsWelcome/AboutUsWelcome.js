import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import AboutUsVideo from '../../../../../media/aboutus/about-us-video-20260526.mp4';
import AboutUsHeroMobile from '../../../../../media/aboutus/rev-mom.webp'; // ✅ add a lightweight mobile image
import './AboutUsWelcome.css';
import { shouldUseHeroVideoLayout, useHeroLoader } from '../../../../../utils/HeroLoaderContext';

const AboutUsWelcome = () => {
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

  const handleLearnMore = () => {
    const aboutDetailsSection = document.getElementById('about-details');
    if (aboutDetailsSection) aboutDetailsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about-us-video-background-container">
      <Container fluid>
        {/* Video (desktop + tablet landscape via CSS) */}
        <video
          ref={videoRef}
          className="about-us-video-background hero-video"
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
          <source src={AboutUsVideo} type="video/mp4" />
        </video>

        {/* Image (mobile + tablet portrait via CSS) */}
        <img
          ref={imageRef}
          className="about-us-image-background hero-image"
          src={AboutUsHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
          onLoad={() => {
            if (!shouldUseHeroVideoLayout()) markHeroMediaReady();
          }}
        />

        {/* Overlay Content */}
        <div className="about-us-video-overlay">
          <div className="about-us-overlay-content">
            <h1>Welcome to Benoni City Tabernacle</h1>
            <p>
              We are a Bible-based church devoted to the full Word of God, where every soul matters
              and Christ remains central to all we do. Discover our vision, our history, and our mission to serve you.
            </p>
            <button className="btn btn-outline-light" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsWelcome;
