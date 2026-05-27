import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import RestoredWordImage from '../../../media/missions/restored-word-logo.png'
import RestoredWordVideo from '../../../media/missions/restored-word-video-20260527.mp4'
import RestoredWordMobileHero from '../../../media/missions/restored-word-mobile-hero-v2.png'
import MissionsLiveLinks from './sections/MissionsLinks/MissionsLiveLinks'
import RestoredWordSermon from './sections/MissionsSermon/RestoredWordSermon'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'
import './sections/MissionsAbout/MissionsAbout.css'

const RestoredWordDaveytonTabernacle = () => {
  const navigate = useNavigate()

  return (
    <>
      <MissionsWelcome
        targetId="restored-word-sermon"
        videoSrc={RestoredWordVideo}
        mobileHeroSrc={RestoredWordMobileHero}
        mobileHeroObjectPosition="68% center"
        title="Welcome to Restored Word Daveyton Tabernacle"
        description="Restored Word Daveyton Tabernacle continues to shine as a place of worship, restoration, and spiritual growth within the Daveyton community. Under the leadership of Pastor Adio Maadza, the ministry stands as a testimony of God's grace, drawing believers closer to Christ through the preaching of the revealed Word of God."
      />
      <section id="restored-word-sermon">
        <MissionsLiveLinks />
        <RestoredWordSermon />
      </section>
      <section>
        <Container className="missions-section">
          <Row>
            <Col xs={12} md={10} className="missions-left-col">
              <h1>Restored Word Daveyton Tabernacle: A Living Witness of God’s Grace and Restoration</h1>
              <p>
                Restored Word Daveyton Tabernacle continues to shine as a place of worship,
                restoration, and spiritual growth within the Daveyton community. Under the
                leadership of Pastor Adio Maadza, the ministry has become a testimony of God’s
                grace, drawing many believers closer to Christ through the preaching of the
                revealed Word of God.
              </p>
              <h3>A Journey Rooted in Faith and Mentorship</h3>
              <p>
                Pastor Adio Maadza’s ministry journey was shaped during his time at Benoni City
                Tabernacle under the leadership and guidance of Rev. T. Mahere. Through faithful
                service, spiritual growth, and dedication to the Gospel, he developed a deeper
                burden for souls and a calling to shepherd God’s people. The experience and
                teachings received during this period laid a strong spiritual foundation for the
                ministry work now taking place in Daveyton.
              </p>
              <h3>Standing on the Restored Word of God</h3>
              <p>
                Restored Word Daveyton Tabernacle is dedicated to upholding the revealed Word of
                God through the End-Time Message ministered by God’s servant William Branham. The
                ministry focuses on calling believers back to the foundation of the Scriptures,
                encouraging lives that reflect holiness, faith, and complete surrender to the
                Lord Jesus Christ in preparation for His soon return.
              </p>
              <p>
                Through consistent preaching, prayer gatherings, evangelistic outreaches, and
                fellowship services, the church continues to minister hope and spiritual renewal
                within the community. Many lives are being transformed as the Gospel reaches
                homes and families, bringing encouragement, restoration, and a deeper
                understanding of God’s Word.
              </p>
              <p>
                As the ministry continues to move forward under the leadership of Pastor Adio
                Maadza, Restored Word Daveyton Tabernacle remains a testimony of God’s grace and
                faithfulness—raising believers, strengthening the Body of Christ, and sharing
                the light of the Gospel with all who desire truth in this generation.
              </p>
              <div className="text-start">
                <Button
                  className="btn-missions"
                  variant="outline-danger"
                  size="lg"
                  onClick={() => navigate('/missionary')}
                >
                  Back to Missions
                </Button>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <img
                src={RestoredWordImage}
                alt="Restored Word Daveyton Tabernacle"
                className="img-fluid mb-4 missions-img missions-img-restored"
                style={{
                  objectFit: 'contain',
                  width: 'auto',
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default RestoredWordDaveytonTabernacle
