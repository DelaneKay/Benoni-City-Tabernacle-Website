import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './JuniorVideoWelcome.css';
import JuniorVideo from '../../../../../media/sundayschool/presentations-video-20260527.mp4';
import JuniorHeroMobile from '../../../../../media/sundayschool/senior.webp'; // add this image
import { shouldUseHeroVideoLayout, useHeroLoader } from '../../../../../utils/HeroLoaderContext';

const JuniorVideoWelcome = () => {
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

  return (
    <section className="video-background-container">
      <Container fluid>
        {/* Video (desktop + tablet landscape via CSS) */}
        <video
          ref={videoRef}
          className="video-background hero-video"
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
          <source src={JuniorVideo} type="video/mp4" />
        </video>

        {/* Image (mobile + tablet portrait via CSS) */}
        <img
          ref={imageRef}
          className="image-background hero-image"
          src={JuniorHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
          onLoad={() => {
            if (!shouldUseHeroVideoLayout()) markHeroMediaReady();
          }}
        />

        {/* Overlay */}
        <div className="video-overlay">
          <div className="overlay-content">
            <h1>Sunday School Presentations Corner</h1>
            <p>
              Training kids and young people in the way of the Lord according to the message of the
              hour. We'd love to see your children in-person this Sunday at 9:30AM!
            </p>
            <button className="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JuniorVideoWelcome;
