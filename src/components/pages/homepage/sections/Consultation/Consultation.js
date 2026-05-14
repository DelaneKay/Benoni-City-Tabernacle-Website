import React from 'react'
import { Container, Button } from 'react-bootstrap';
import './Consultation.css';


const Consultation = () => {
  return (
    <section className="consultation-section">
      <Container className='consultation-section-container'>
        <div className='consultation-headings'>
            <h2>
              PRAYER REQUEST
              <span className="consultation-heading-break">SECTION</span>
            </h2>
            <p>Share your request with us and we will stand with you in prayer.</p>
        </div>

        <div className="consultation-action">
          <Button
            variant="primary"
            className="btn-appointment"
            onClick={() => window.location.assign('https://prayerrequest.benonicitytabernacle.co.za/')}
          >
            Submit Prayer Request
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Consultation
