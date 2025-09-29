import React from 'react';
import './WilliamBranhamWelcome.css';
import { Container } from 'react-bootstrap';
import MissionsVideo from '../../../../../media/WMB/WMB-video-1.webm';
import WMBHeroMobile from '../../../../../media/WMB/wmb-1.webp'; // add this image

const WilliamBranhamWelcome = () => {
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
          className="william-branham-video-background hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          aria-hidden="true"
        >
          <source src={MissionsVideo} type="video/mp4" />
        </video>

        {/* Image (mobile + tablet portrait via CSS) */}
        <img
          className="william-branham-image-background hero-image"
          src={WMBHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
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
