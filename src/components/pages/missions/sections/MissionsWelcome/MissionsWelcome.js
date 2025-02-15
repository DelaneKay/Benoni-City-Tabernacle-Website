import React from 'react';
import { Container } from 'react-bootstrap';
import './MissionsWelcome.css';
import MissionsVideo from '../../../../../media/missions/clayville-video.mp4';

const SermonsWelcome = () => {

  // Function to handle "Watch Now" button click
  const handleWatchNow = () => {
    const streamingSection = document.getElementById('sermon-streaming'); // Reference the SermonStreaming section by its id
    if (streamingSection) {
      streamingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="missions-video-background-container">
      <Container fluid>
        {/* Video Background */}
        <video autoPlay loop muted className="missions-video-background">
          <source src={MissionsVideo} type="video/mp4"/>
        </video>

        {/* Overlay */}
        <div className="missions-video-overlay">
          <div className="missions-overlay-content">
            <h1>Welcome to our Missions Corner</h1>
            <p>BCT is deeply committed to evangelism and outreach programs. The ministry has witnessed the birth of sister churches, including Clayville Spoken Word Ministry, as part of its mission to spread the End-Time Message.</p>
            {/* "Watch Now" button triggers scrolling to the live streaming section */}
            <button className="btn btn-outline-light" onClick={handleWatchNow}>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SermonsWelcome;