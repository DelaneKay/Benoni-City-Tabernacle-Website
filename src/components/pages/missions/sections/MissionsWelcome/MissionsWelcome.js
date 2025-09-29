import React from 'react';
import { Container } from 'react-bootstrap';
import './MissionsWelcome.css';
import MissionsVideo from '../../../../../media/missions/clayville-video.webm';
import MissionsMobileHero from '../../../../../media/missions/clayville-2.webp'; // add this image

const MissionsWelcome = () => {
  const handleWatchNow = () => {
    const clayvilleSection = document.getElementById('sermon-clayville'); // keep your existing target id
    if (clayvilleSection) clayvilleSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="missions-video-background-container">
      <Container fluid>
        {/* Video (shown on desktop + tablet landscape via CSS) */}
        <video
          className="missions-video-background hero-video"
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

        {/* Image (shown on mobile + tablet portrait via CSS) */}
        <img
          className="missions-image-background hero-image"
          src={MissionsMobileHero}
          alt=""
          aria-hidden="true"
          loading="eager"
        />

        {/* Overlay */}
        <div className="missions-video-overlay">
          <div className="missions-overlay-content">
            <h1>Welcome to our Missions Corner</h1>
            <p>
              BCT is deeply committed to evangelism and outreach programs. The ministry has witnessed
              the birth of sister churches, including Clayville Spoken Word Ministry, as part of its
              mission to spread the End-Time Message.
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

export default MissionsWelcome;
