import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './SundaySchoolWelcome.css';
import JuniorVideo from '../../../../../media/sundayschool/sunday-school-video-20260526.mp4';
import SundaySchoolHeroMobile from '../../../../../media/sundayschool/tanya-2.webp'; // add this image
import { shouldUseHeroVideoLayout, useHeroLoader } from '../../../../../utils/HeroLoaderContext';

const SundaySchoolWelcome = () => {
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
    const sundaySchoolSection = document.getElementById('sunday-school');
    if (sundaySchoolSection) sundaySchoolSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="sunday-school-video-background-container">
      <Container fluid>
        {/* Video (desktop + tablet landscape via CSS) */}
        <video
          ref={videoRef}
          className="sunday-school-video-background hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
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
          <source src={JuniorVideo} type="video/mp4" />
        </video>

        {/* Image (mobile + tablet portrait via CSS) */}
        <img
          ref={imageRef}
          className="sunday-school-image-background hero-image"
          src={SundaySchoolHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
          onLoad={() => {
            if (!shouldUseHeroVideoLayout()) markHeroMediaReady();
          }}
        />

        {/* Overlay */}
        <div className="sunday-school-video-overlay">
          <div className="sunday-school-overlay-content">
            <h1>Welcome to our Sunday School Corner</h1>
            <p>
              Training kids and young people in the way of the Lord according to the message of the
              hour. We'd love to see your children in-person this Sunday at 9:30AM!
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

export default SundaySchoolWelcome;
