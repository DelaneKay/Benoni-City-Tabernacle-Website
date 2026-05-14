import React from 'react'
import { Container } from 'react-bootstrap'
import MissionsAbout from './sections/MissionsAbout/MissionsAbout'
import MissionsSermon from './sections/MissionsSermon/MissionsSermon'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'
import './sections/MissionsLinks/MissionsLiveLinks.css'

const HarvestTimeTabernacle = () => {
  return (
    <>
      <MissionsWelcome targetId="sermon-clayville" />
      <section id="sermon-clayville">
        <section className="missions-live-links-bar">
          <Container>
            <h4 className="text-center missions-live-link mb-0">Missionary Work</h4>
          </Container>
        </section>
        <MissionsSermon />
      </section>
      <MissionsAbout />
    </>
  )
}

export default HarvestTimeTabernacle
