import React from 'react';
import SermonsWelcome from './sections/SermonsWelcome/SermonsWelcome';
import LiveLinks from './sections/LiveLinks/LiveLinks';
import SermonStreaming from './sections/SermonStreaming/SermonStreaming';

const Sermons = () => {
  return (
    <>
      <SermonsWelcome/>
      {/* Add id to the SermonStreaming section for navigation */}
      <section id="sermon-streaming">
        <LiveLinks/>
        <SermonStreaming/>
      </section>
    </>
  );
}

export default Sermons;
