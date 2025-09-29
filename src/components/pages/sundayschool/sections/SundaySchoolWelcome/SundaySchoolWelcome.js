import React from 'react';
import { Container } from 'react-bootstrap';
import './SundaySchoolWelcome.css';
import JuniorVideo from '../../../../../media/sundayschool/sunday-school-video.webm';
import SundaySchoolHeroMobile from '../../../../../media/sundayschool/tanya-2.webp'; // add this image

const SundaySchoolWelcome = () => {
  const handleLearnMore = () => {
    const sundaySchoolSection = document.getElementById('sunday-school');
    if (sundaySchoolSection) sundaySchoolSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="sunday-school-video-background-container">
      <Container fluid>
        {/* Video (desktop + tablet landscape via CSS) */}
        <video
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
        >
          <source src={JuniorVideo} type="video/mp4" />
        </video>

        {/* Image (mobile + tablet portrait via CSS) */}
        <img
          className="sunday-school-image-background hero-image"
          src={SundaySchoolHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
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
