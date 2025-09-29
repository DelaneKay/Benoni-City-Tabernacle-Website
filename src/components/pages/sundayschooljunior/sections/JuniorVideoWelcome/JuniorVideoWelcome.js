import React from 'react';
import { Container } from 'react-bootstrap';
import './JuniorVideoWelcome.css';
import JuniorVideo from '../../../../../media/sundayschool/sunday-school-video.mp4';
import JuniorHeroMobile from '../../../../../media/sundayschool/senior.jpg'; // add this image

const JuniorVideoWelcome = () => {
  return (
    <section className="video-background-container">
      <Container fluid>
        {/* Video (desktop + tablet landscape via CSS) */}
        <video
          className="video-background hero-video"
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
          className="image-background hero-image"
          src={JuniorHeroMobile}
          alt=""
          aria-hidden="true"
          loading="eager"
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
