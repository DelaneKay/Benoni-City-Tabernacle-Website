import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import JuniorImage from '../../../../../media/sundayschool/junior-sunday-school-2.jpg';
import './SundaySchoolJunior.css'
import { Outlet, useNavigate } from 'react-router-dom';

const SundaySchoolJunior = () => {

  const navigate = useNavigate();

  const goToJuniorPage = () => {
    navigate('/SundaySchool/junior');
  };

  return (
    <section className='sunday-school-junior-section'>
      <Container>
        <Row>
            {/* Left Column */}
            <Col xs={12} md={8} className='sunday-school-junior-left-col'>
            <h1 className="display-4">Junior Sunday School Class</h1>
            <p>
                <strong>13 I wonder if the little lad, that’s just come in, would want to sit with his parent. Or, there’s a Sunday school class in the back, little fellow, if you’d like to go back there.</strong> Brother Taylor, would you direct the little gentleman to the class. That’s fine. <strong>Sometimes they like to be with their own, you know. They, they have things in common, that they like to talk about. And it’s just like that.</strong>
            </p>
            <p>
                <strong>14 The little twelve-year-old girl, as I have often said, if you see a little eight-, nine-, ten-year-old girl hanging around with grandma, all the time, there’s something wrong. See? There—there’s something wrong, because there’s too much difference in their age.</strong> You can imagine, grandma has got a sack of candy somewhere, that she can put her hand on. And little sis is, them big eyes are brightened up for the sack of candy. Because, in common, they would have nothing to talk about, nothing but just she could pet her and baby her. But that’s the way it is, and we’re glad that it’s just that way.
            </p>
            <p>
                <i>59-1227M - "A Super Sign"</i>
            </p>
            </Col>

            {/* Right Column */}
            <Col xs={12} md={4} className="text-center">
            <img
                src={JuniorImage}
                alt="Junior Class"
                className="img-fluid mb-4"
                style={{ objectFit: 'cover', width: '100%' }}
            />
            <div className="text-start">
                <h6 className="text-uppercase" style={{ color: 'rgba(207, 74, 70)' }}>
                Junior Class
                </h6>
                <h4 className="mb-4">The Little Ones</h4>
                <Button className='btn-sunday-school' variant="outline-danger" size="lg"
                onClick={goToJuniorPage}>
                Learn More
                </Button>
                <Outlet/>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SundaySchoolJunior
