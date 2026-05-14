import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import RestoredWordImage from '../../../media/missions/clayville-2.webp'
import MissionsSermon from './sections/MissionsSermon/MissionsSermon'
import MissionsWelcome from './sections/MissionsWelcome/MissionsWelcome'
import './sections/MissionsAbout/MissionsAbout.css'
import './sections/MissionsLinks/MissionsLiveLinks.css'

const RestoredWordDaveytonTabernacle = () => {
  const navigate = useNavigate()

  return (
    <>
      <MissionsWelcome targetId="restored-word-sermon" />
      <section id="restored-word-sermon">
        <section className="missions-live-links-bar">
          <Container>
            <h4 className="text-center missions-live-link mb-0">Missionary Work</h4>
          </Container>
        </section>
        <MissionsSermon />
      </section>
      <section>
        <Container className="missions-section">
          <Row>
            <Col xs={12} md={10} className="missions-left-col">
              <h1>Restored Word Daveyton Tabernacle</h1>
              <p>
                This page is a placeholder for the Restored Word Daveyton Tabernacle profile. It is intended
                to become a dedicated space for the testimony, ministry history, and outreach updates of the
                assembly in Daveyton.
              </p>
              <h3>A Testimony in Progress</h3>
              <p>
                As content is gathered, this section can carry the story of the burden for fellowship,
                evangelism, prayer, and the strengthening of believers in Daveyton and the surrounding
                communities.
              </p>
              <h3>Room to Grow</h3>
              <p>
                The structure is now in place for service information, ministry milestones, photographs,
                outreach updates, and a fuller church history to be added without changing the layout again.
              </p>
              <p>
                For now, this route gives Restored Word Daveyton Tabernacle a clear home inside the Missions
                Corner while the final text, media, and ministry details are being prepared.
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
                className="img-fluid mb-4 missions-img"
                style={{
                  objectFit: 'cover',
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
