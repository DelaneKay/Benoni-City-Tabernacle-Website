import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './Livestream.css';

const Livestream = () => {
  const [isLive, setIsLive] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [nextService, setNextService] = useState('');

  const getNextStreamTime = () => {
    const now = new Date();
    const sunday = new Date();
    const wednesday = new Date();

    sunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
    sunday.setHours(10, 0, 0, 0); // Sunday 10AM

    wednesday.setDate(now.getDate() + ((3 - now.getDay() + 7) % 7 || 7));
    wednesday.setHours(19, 0, 0, 0); // Wednesday 7PM

    const next = now < sunday && now.getDay() !== 0
      ? sunday
      : now < wednesday
        ? wednesday
        : sunday;

    setNextService(next.getDay() === 0 ? 'Sunday Morning Service' : 'Wednesday Evening Service');
    return next;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextStream = getNextStreamTime();
      const now = new Date();
      const diff = nextStream - now;

      if (diff <= 0) {
        setIsLive(true);
        setCountdown('');
      } else {
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="navbar-background-placeholder" />
      <div className="livestream-container">
        <div className="livestream-box">
          {isLive ? (
            <ReactPlayer
              url="https://www.youtube.com/embed/live_stream?channel=UCvc5U-1XOSmGqjsulifW4LQ" 
              controls
              width="100%"
              height="100%"
              playing
            />
          ) : (
            <div className="livestream-placeholder">
              <h2 className="watch-live-title">Watch Live</h2>
              <p className="countdown-text">Next live stream starts in</p>
              <p className="countdown-time">{countdown}</p>
              <p className="service-type">{nextService}</p>
            </div>
          )}
        </div>
      </div>
      <div className="footer-padding-placeholder" />
    </>
  );
};

export default Livestream;
