import React from 'react'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'
import MissionsSermon from './sections/MissionsSermon/MissionsSermon'
import MissionsAbout from './sections/MissionsAbout/MissionsAbout'
import MissionsLiveLinks from './sections/MissionsLinks/MissionsLiveLinks'

const Missionary = () => {
  return (
    <>
      <MissionsWelcome/>
      <section id='sermon-clayville'>
        <MissionsLiveLinks/>
        <MissionsSermon />
      </section>
      <MissionsAbout/>
    </>
  )
}

export default Missionary
