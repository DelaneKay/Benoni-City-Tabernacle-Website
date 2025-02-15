import React from 'react';
import { Container } from 'react-bootstrap';
import './SermonsWelcome.css';
import JuniorVideo from '../../../../../media/Sermons/BCT-video.mp4';

const SermonsWelcome = () => {

  // Function to handle "Watch Now" button click
  const handleWatchNow = () => {
    const streamingSection = document.getElementById('sermon-streaming'); // Reference the SermonStreaming section by its id
    if (streamingSection) {
      streamingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sermon-video-background-container">
      <Container fluid>
        {/* Video Background */}
        <video autoPlay loop muted className="sermon-video-background">
          <source src={JuniorVideo} type="video/mp4"/>
        </video>

        {/* Overlay */}
        <div className="sermon-video-overlay">
          <div className="sermon-overlay-content">
            <h1>Welcome to our Sermons Corner</h1>
            <p>We believe church isn't a downloadable experience. We'd love to see you in-person this Sunday at 9:30AM and Wednesday at 6:30PM!</p>
            {/* "Watch Now" button triggers scrolling to the live streaming section */}
            <button className="btn btn-outline-light" onClick={handleWatchNow}>
              Watch Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SermonsWelcome;
