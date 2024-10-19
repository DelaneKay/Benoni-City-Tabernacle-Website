import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SeniorImage from '../../../../../media/sundayschool/Senior-Sunday-School.jpg';
import JuniorImage from '../../../../../media/sundayschool/junior-sunday-school.jpg';
import './SundaySchoolWelcome.css'

const SundaySchoolWelcome = () => {
  return (
    <section className='sunday-school-welcome'>
      <Row className="align-items-center">
        <Col xs={12} md={12} lg={6} className="sunday-school-image-col p-0">
            <img src={JuniorImage} alt="Speaker" className="img-fluid sunday-school-full-height-image" />
          </Col>

        {/* Right column with image and overlay */}
          <Col  xs={12} md={12} lg={6} className="sunday-school-overlay-col p-0">
            <div className="sunday-school-overlay-container">
              <img src={SeniorImage} alt="Overlay background" className="img-fluid sunday-school-full-height-image" />
              <div className="sunday-school-overlay">
                <h1 className="sunday-school-title">SUNDAY SCHOOL CORNER</h1>
              </div>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default SundaySchoolWelcome
