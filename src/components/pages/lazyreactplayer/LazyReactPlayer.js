// LazyReactPlayer.js
import React, { lazy, Suspense } from 'react';

const ReactPlayer = lazy(() => import('react-player'));

const LazyReactPlayer = (props) => (
  <Suspense fallback={<div>Loading player...</div>}>
    <ReactPlayer {...props} />
  </Suspense>
);

export default LazyReactPlayer;
