import React from 'react'
import MissionsAbout from './sections/MissionsAbout/MissionsAbout'
import MissionsLiveLinks from './sections/MissionsLinks/MissionsLiveLinks'
import MissionsSermon from './sections/MissionsSermon/MissionsSermon'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'
import HarvestMobileHero from '../../../media/missions/clayville-1.png'

const HarvestTimeTabernacle = () => {
  return (
    <>
      <MissionsWelcome
        targetId="sermon-clayville"
        mobileHeroSrc={HarvestMobileHero}
        title="Welcome to Harvest Time Tabernacle"
        description="Harvest Time Tabernacle stands as a growing sister work in Tembisa, Johannesburg, flourishing under the leadership of Pastor William Ndlovu. Through outreach, open-air services, and steadfast preaching, the assembly continues to share the End-Time Message and prepare hearts for the soon return of the Lord."
      />
      <section id="sermon-clayville">
        <MissionsLiveLinks />
        <MissionsSermon />
      </section>
      <MissionsAbout />
    </>
  )
}

export default HarvestTimeTabernacle
