import React from 'react'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'
import MissionsLiveLinks from './sections/MissionsLinks/MissionsLiveLinks'
import MissionFeatureSection from './sections/MissionFeatureSection/MissionFeatureSection'
import HarvestImage from '../../../media/missions/harvest-time-logo.png'
import RestoredWordImage from '../../../media/missions/restored-word-logo.png'
import BaptismsImage from '../../../media/homepage/bct-logo.png'
import MissionsMainVideo from '../../../media/missions/missions-main-video-20260527.mp4'

const BAPTISM_URL = 'https://baptism.benonicitytabernacle.co.za/'

const Missionary = () => {
  return (
    <>
      <MissionsWelcome videoSrc={MissionsMainVideo} />
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
          imageClassName="mission-feature-logo-image"
          eyebrow="Harvest Time"
          subtitle="A Growing Sister Work"
          buttonLabel="Learn More"
          buttonTo="/missionary/harvest-time-tabernacle"
        />
      </section>
      <MissionFeatureSection
        title="Restored Word Daveyton Tabernacle"
        paragraphs={[
          'Restored-Word Daveyton Tabernacle is a non-denominational church established by Pastor Adio Maadza on the foundation that was laid by Paul, and it stands as a sister church of Benoni City Tabernacle.',
          'Believing in the full revealed Word of the day, the assembly continues to endure in winning souls to Christ and holding Christ as preached by Br Branham.',
        ]}
        image={RestoredWordImage}
        imageAlt="Restored Word Daveyton Tabernacle placeholder"
        imageClassName="mission-feature-logo-image mission-feature-logo-image-restored"
        eyebrow="Restored Word"
        subtitle="Daveyton Tabernacle"
        buttonLabel="Learn More"
        buttonTo="/missionary/restored-word-daveyton-tabernacle"
        variant="gray"
      />
      <MissionFeatureSection
        title="BCT Baptisms"
        paragraphs={[
          'Benoni City Tabernacle Baptisms is a special section dedicated to sharing photographs of believers who have made the decision to give their lives to Christ and be born again. It captures moments of joy, fellowship, and celebration as the church rejoices together with those taking this important step of faith.',
          'Through these shared moments, the ministry reflects the love, unity, and thanksgiving of the church as souls come to the Lord and begin their new walk with Christ.',
        ]}
        image={BaptismsImage}
        imageAlt="BCT Baptisms placeholder"
        imageClassName="mission-feature-logo-image mission-feature-logo-image-baptisms"
        eyebrow="BCT"
        subtitle="Baptisms"
        buttonLabel="Learn More"
        buttonTo={BAPTISM_URL}
      />
    </>
  )
}

export default Missionary
