import React from 'react'
import {Row, Col} from 'react-bootstrap';
import ClayvilleImage1 from '../../../../../media/missions/clayville-1.png';
import ClayvilleImage2 from '../../../../../media/missions/clayville-2.png';
import './MissionsWelcome.css'

const MissionsWelcome = () => {
  return (
    <section>
        <Row className="align-items-center">
            <Col xs={12} md={12} lg={6} className="missions-image-col p-0">
                <img src={ClayvilleImage2} alt="Speaker" className="img-fluid missions-full-height-image" />
            </Col>

        {/* Right column with image and overlay */}
          <Col  xs={12} md={12} lg={6} className="missions-overlay-col p-0">
            <div className="missions-overlay-container">
              <img src={ClayvilleImage2} alt="Overlay background" className="img-fluid missions-full-height-image" />
              <div className="missions-overlay">
                <h1 className="missions-title">MISSIONS</h1>
              </div>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default MissionsWelcome
