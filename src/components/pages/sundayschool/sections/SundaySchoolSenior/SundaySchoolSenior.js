import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import SeniorImage from '../../../../../media/sundayschool/senior-sunday-school-2.jpg';
import './SundaySchoolSenior.css'
import { Outlet, useNavigate } from 'react-router-dom';

const SundaySchoolSenior = () => {

  const navigate = useNavigate();
  
    const goToJuniorPage = () => {
      navigate('/sunday-school/presentations');
    };

  return (
    <section className='sunday-school-senior-section'>
      <Container>
        <Row>
            {/* Left Column */}
            <Col xs={12} md={8} className='sunday-school-senior-left-col'>
            <h1 className="display-4">Senior Sunday School Class</h1>
            <p>
                I am happy to be here this morning, for this fine gathering of—of people, and especially for the young people, as I understand that this service this morning is dedicated to the young people of Shreveport. And that’s a very fine time in my life, and a highlight, or I’d call it a red-letter, to get to address the boys and girls that will—will be tomorrow, if there is a tomorrow. So, we’re happy for this.
            </p>
            <p>
                <i>63-1130B - "Influence"</i>
            </p>
            </Col>

            {/* Right Column */}
            <Col xs={12} md={4} className="text-center">
            <img
                src={SeniorImage}
                alt="Senior Class"
                className="img-fluid mb-4"
                style={{ objectFit: 'cover', width: '100%' }}
            />
            <div className="text-start">
                <h6 className="text-uppercase" style={{ color: 'rgba(207, 74, 70)' }}>
                Senior Class
                </h6>
                <h4 className="mb-4">Tomorrow's Church</h4>
                <Button className='btn-sunday-school' variant="outline-danger" size="lg" onClick={goToJuniorPage}>
                Learn More
                </Button>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SundaySchoolSenior
