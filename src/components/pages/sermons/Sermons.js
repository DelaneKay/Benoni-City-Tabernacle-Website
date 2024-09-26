import React from 'react'
import Navigation from '../homepage/sections/Navigation/Navigation'
import SermonsWelcome from './sections/SermonsWelcome/SermonsWelcome'
import LiveLinks from './sections/LiveLinks/LiveLinks'
import SermonStreaming from './sections/SermonStreaming/SermonStreaming'

const Sermons = () => {
  return (
    <>
        <SermonsWelcome/>
        <LiveLinks/>
        <SermonStreaming/>
    </>
  )
}

export default Sermons
