import React from 'react'
import MissionsAbout from './sections/MissionsAbout/MissionsAbout'
import MissionsLiveLinks from './sections/MissionsLinks/MissionsLiveLinks'
import MissionsSermon from './sections/MissionsSermon/MissionsSermon'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'

const HarvestTimeTabernacle = () => {
  return (
    <>
      <MissionsWelcome targetId="sermon-clayville" />
      <section id="sermon-clayville">
        <MissionsLiveLinks />
        <MissionsSermon />
      </section>
      <MissionsAbout />
    </>
  )
}

export default HarvestTimeTabernacle
