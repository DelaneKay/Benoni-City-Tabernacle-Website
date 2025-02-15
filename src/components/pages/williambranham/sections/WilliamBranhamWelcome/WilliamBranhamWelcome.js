import React from 'react'
import './WilliamBranhamWelcome.css'
import { Container } from 'react-bootstrap';
import MissionsVideo from '../../../../../media/WMB/WMB-video.mp4';

const WilliamBranhamWelcome = () => {

     // Function to handle "Watch Now" button click
  const handleWatchNow = () => {
    const streamingSection = document.getElementById('sermon-streaming'); // Reference the SermonStreaming section by its id
        if (streamingSection) {
        streamingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


  return (
    <section className="william-branham-video-background-container">
      <Container fluid>
        {/* Video Background */}
        <video autoPlay loop muted className="william-branham-video-background">
          <source src={MissionsVideo} type="video/mp4"/>
        </video>

        {/* Overlay */}
        <div className="william-branham-video-overlay">
          <div className="william-branham-overlay-content">
            <h1>Welcome to our Prophet's Corner</h1>
            <p>
                William Branham was a prophet sent by God. His ministry was marked by supernatural vindication, deep spiritual revelations, and a prophetic voice that prepared us for the soon return of our Lord 
            </p>
            {/* "Watch Now" button triggers scrolling to the live streaming section */}
            <button className="btn btn-outline-light" onClick={handleWatchNow}>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WilliamBranhamWelcome
