import React, { Suspense} from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';
import './JuniorVideoLessons.css'

const JuniorVideoLessons = () => {
  const goToSoundCloudPage = () => {
    // Redirects to the Sunday School SoundCloud page in a new tab
    window.open('https://soundcloud.com/bctsundayschool', '_blank')
  }

  return (
    <section className="sunday-school-lessons-section">
      <Container className="sunday-school-lessons-container">
        <Row className="sunday-school-lessons-row">
          <Col xs={12} md={12} lg={3} xl={3}>
            <h2>Sunday School Lessons</h2>
            <p>
              Explore &amp; watch our Sunday School lessons from both the Junior and
              Senior classes.
            </p>
            <Button variant="danger" size="md" onClick={goToSoundCloudPage}>
              MORE LESSONS
            </Button>
          </Col>
          <Col xs={12} md={12} lg={9} xl={9}>
            <div className="react-player-wrapper">
            <Suspense fallback={<Skeleton height="100%" width="100%" />}>
                <iframe
                        width="100%"
                        height="100%"
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bctsundayschool&{ ADD YOUR PARAMETERS HERE }"
                    ></iframe>
              </Suspense>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default JuniorVideoLessons
