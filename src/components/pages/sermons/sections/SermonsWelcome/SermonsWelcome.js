import React from 'react';
import { Container } from 'react-bootstrap';
import './SermonsWelcome.css';
import JuniorVideo from '../../../../../media/Sermons/BCT-video-2.webm';
import MobileHero from '../../../../../media/Sermons/Pastor-1.webp'; // add a mobile-friendly image

const SermonsWelcome = () => {
  const handleWatchNow = () => {
    const streamingSection = document.getElementById('sermon-streaming');
    if (streamingSection) streamingSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="sermon-video-background-container">
      <Container fluid>
        {/* Video (shown on tablet/desktop only via CSS) */}
        <video
          className="sermon-video-background hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          disablePictureInPicture
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          aria-hidden="true"
        >
          <source src={JuniorVideo} type="video/mp4" />
        </video>

        {/* Image (shown on mobile only via CSS) */}
        <img
          className="sermon-image-background hero-image"
          src={MobileHero}
          alt=""
          aria-hidden="true"
          loading="eager"
        />

        {/* Overlay */}
        <div className="sermon-video-overlay">
          <div className="sermon-overlay-content">
            <h1>Welcome to our Sermons Corner</h1>
            <p>
              We believe church isn't a downloadable experience. We'd love to see you in-person
              this Sunday at 9:30AM and Wednesday at 6:30PM!
            </p>
            <button className="btn btn-outline-light" onClick={handleWatchNow}>
              Watch Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SermonsWelcome;
