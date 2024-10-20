import React from 'react'
import {Row, Col} from 'react-bootstrap';
import ClayvilleImage1 from '../../../../../media/sundayschool/Senior-Sunday-School.jpg';
import ClayvilleImage2 from '../../../../../media/sundayschool/junior-sunday-school.jpg';
import './SundaySchoolWelcome.css'

const MissionsWelcome = () => {
  return (
    <section>
        <Row className="align-items-center">
            <Col xs={12} md={12} lg={6} className="missions-image-col p-0">
                <img src={JuniorImage} alt="Speaker" className="img-fluid missions-full-height-image" />
            </Col>

        {/* Right column with image and overlay */}
          <Col  xs={12} md={12} lg={6} className="missions-overlay-col p-0">
            <div className="missions-overlay-container">
              <img src={SeniorImage} alt="Overlay background" className="img-fluid missions-full-height-image" />
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
