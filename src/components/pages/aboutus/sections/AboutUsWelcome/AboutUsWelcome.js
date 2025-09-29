import React from 'react';
import { Container } from 'react-bootstrap';
import JuniorVideo from '../../../../../media/sundayschool/sunday-school-video.mp4'; // adjust if needed
import AboutUsHeroMobile from '../../../../../media/aboutus/rev-mum.jpg'; // ✅ add a lightweight mobile image
import './AboutUsWelcome.css';

const AboutUsWelcome = () => {
  const handleLearnMore = () => {
    const aboutDetailsSection = document.getElementById('about-details');
    if (aboutDetailsSection) aboutDetailsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about-us-video-background-container">
      <Container fluid>
        {/* Video (desktop + tablet landscape via CSS) */}
        <video
          className="about-us-video-background hero-video"
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
          <source src={JuniorVideo} type="video/mp4" />
        </video>

        {/* Image (mobile + tablet portrait via CSS) */}
        <img
          className="about-us-image-background hero-image"
          src={AboutUsHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
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
