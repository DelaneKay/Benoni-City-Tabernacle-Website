import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './MissionFeatureSection.css'

const MissionFeatureSection = ({
  title,
  paragraphs,
  image,
  imageAlt,
  imageClassName = '',
  eyebrow,
  subtitle,
  buttonLabel,
  buttonTo,
  variant = 'light',
}) => {
  const navigate = useNavigate()

  const sectionClassName =
    variant === 'gray'
      ? 'mission-feature-section mission-feature-section-gray'
      : 'mission-feature-section'

  const handleButtonClick = () => {
    if (!buttonTo) {
      return
    }

    if (/^https?:\/\//i.test(buttonTo)) {
      window.location.assign(buttonTo)
      return
    }

    navigate(buttonTo)
  }

  return (
    <section className={sectionClassName}>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mission-feature-left-col">
            <h1 className="display-4">{title}</h1>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Col>

          <Col xs={12} md={4} className="text-center">
            <img
              src={image}
              alt={imageAlt}
              className={`img-fluid mb-4 ${imageClassName}`.trim()}
              style={{ objectFit: 'cover', width: '100%' }}
            />
            <div className="text-start">
              <h6 className="text-uppercase mission-feature-eyebrow">{eyebrow}</h6>
              <h4 className="mb-4">{subtitle}</h4>
              <Button
                className="btn-mission-feature"
                variant="outline-danger"
                size="lg"
                onClick={handleButtonClick}
              >
                {buttonLabel}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissionFeatureSection
