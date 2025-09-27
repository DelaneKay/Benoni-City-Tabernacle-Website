import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './Livestream.css';

const Livestream = () => {
  const [isLive, setIsLive] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [nextService, setNextService] = useState('');

  // ✅ Fixed countdown logic
  const getNextStreamTime = () => {
    const now = new Date();

    // Create dates for this week's Sunday & Wednesday
    const sunday = new Date(now);
    sunday.setDate(now.getDate() + ((7 - now.getDay()) % 7)); // upcoming Sunday
    sunday.setHours(10, 0, 0, 0); // 10 AM Sunday

    const wednesday = new Date(now);
    wednesday.setDate(now.getDate() + ((3 - now.getDay() + 7) % 7)); // upcoming Wednesday
    wednesday.setHours(19, 0, 0, 0); // 7 PM Wednesday

    let next;

    // Logic:
    // 1. If today is Sunday but before 10AM -> countdown to today 10AM
    // 2. If today is Sunday but after 10AM -> countdown to Wednesday 7PM
    // 3. If today is Wednesday but before 7PM -> countdown to today 7PM
    // 4. If today is Wednesday but after 7PM -> countdown to Sunday 10AM
    // 5. Else pick whichever comes first

    if (now.getDay() === 0) {
      // Sunday
      if (now < sunday) {
        next = sunday; // today 10 AM
      } else {
        next = wednesday; // next Wednesday
      }
    } else if (now.getDay() === 3) {
      // Wednesday
      if (now < wednesday) {
        next = wednesday; // today 7 PM
      } else {
        next = sunday; // next Sunday
      }
    } else {
      // Other days
      next = now < wednesday ? wednesday : sunday;
    }

    setNextService(next.getDay() === 0 ? 'Sunday Morning Service' : 'Wednesday Evening Service');
    return next;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextStream = getNextStreamTime();
      const now = new Date();
      const diff = nextStream - now;

      if (diff <= 0) {
        // Service time reached (can show "Live stream will start shortly" or mark as live)
        setIsLive(true);
        setCountdown('');
      } else {
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
        setIsLive(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Placeholder behind navbar */}
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

      {/* Padding to footer */}
      <div className="footer-padding-placeholder" />
    </>
  );
};

export default Livestream;
