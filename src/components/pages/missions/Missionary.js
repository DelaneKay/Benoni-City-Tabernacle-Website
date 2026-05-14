import React from 'react'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'
import MissionsLiveLinks from './sections/MissionsLinks/MissionsLiveLinks'
import MissionFeatureSection from './sections/MissionFeatureSection/MissionFeatureSection'
import HarvestImage from '../../../media/missions/clayville-logo-1.webp'
import RestoredWordImage from '../../../media/missions/clayville-2.webp'
import BaptismsImage from '../../../media/homepage/bct-logo.png'

const Missionary = () => {
  return (
    <>
      <MissionsWelcome />
      <section id="mission-links">
        <MissionsLiveLinks />
        <MissionFeatureSection
          title="Harvest Time Tabernacle"
          paragraphs={[
            'Harvest Time Tabernacle stands as a beacon of faith and growth in the heart of Tembisa, Johannesburg. As a sister church of Benoni City Tabernacle, it has flourished under the dedicated leadership of Pastor William Ndlovu.',
            'Through passionate outreach efforts, open-air services, and steadfast preaching, the assembly continues to touch lives in the community while holding firmly to the End-Time Message and preparing hearts for the soon return of our Lord.',
          ]}
          image={HarvestImage}
          imageAlt="Harvest Time Tabernacle"
          eyebrow="Harvest Time"
          subtitle="A Growing Sister Work"
          buttonLabel="Learn More"
          buttonTo="/missionary/harvest-time-tabernacle"
        />
      </section>
      <MissionFeatureSection
        title="Restored Word Daveyton Tabernacle"
        paragraphs={[
          'Restored Word Daveyton Tabernacle will have its own ministry page linked from the Missions Corner. This section is a placeholder for the assembly story, fellowship updates, and outreach burden in Daveyton.',
          'As content is gathered, this portion can grow into a fuller testimony page with ministry history, service highlights, and community-centered updates for the work taking place there.',
        ]}
        image={RestoredWordImage}
        imageAlt="Restored Word Daveyton Tabernacle placeholder"
        eyebrow="Restored Word"
        subtitle="Daveyton Tabernacle"
        buttonLabel="Learn More"
        buttonTo="/missionary/restored-word-daveyton-tabernacle"
        variant="gray"
      />
      <MissionFeatureSection
        title="BCT Baptisms"
        paragraphs={[
          'BCT Baptisms now has a dedicated place in the Missions Corner structure. This section is a placeholder for baptism testimonies, announcements, and future practical guidance for believers preparing to take this step.',
          'It gives the ministry a clear route for sharing upcoming baptism updates, photographs, and reports as this part of the site is expanded.',
        ]}
        image={BaptismsImage}
        imageAlt="BCT Baptisms placeholder"
        eyebrow="BCT"
        subtitle="Baptisms"
        buttonLabel="Learn More"
        buttonTo="/missionary/bct-baptisms"
      />
    </>
  )
}

export default Missionary
