import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import VisionImage from '../../../../../media/sundayschool/senior-sunday-school-2.jpg'; // Replace with actual vision-related image
import './Vision.css'; // Create and style based on WilliamBranhamFirst.css

const Vision = () => {

  return (
    <section className='vision-section'>
      <Container>
        <Row>
          {/* Left Column */}
          <Col xs={12} md={8} className='vision-left-col'>
            <h1>Our Vision: A Soul-Saving Station for This Generation</h1>
            <p>
              At <strong>Benoni City Tabernacle</strong>, we believe that the true purpose of the church is to be a <strong>beacon of light</strong>, a refuge for the weary, and a <strong>soul-saving station</strong> in a troubled world. Our vision is to cultivate a generation of <strong>spiritual powerhouses</strong>, believers who carry not just knowledge, but revelation. These are <strong>insiders</strong> in the divine agenda, entrusted with mystery truths unveiled in this hour through the Third Pull and the opening of the Word.
            </p>
            <h3>Preparing a Bride for Christ</h3>
            <p> In this <strong>Bride Age</strong>, our mandate extends beyond routine worship, we are called to raise a Bride prepared through the unfolding of divine mysteries. This preparation is rooted in revealed truth, character transformation, and walking in alignment with the Word that has been opened in this generation. </p> <p> Every gathering, every outreach, every melody is intentionally designed to draw the believer into deeper fellowship with the Our Maker. We are not building and shaping lives worthy of translation, refined by both <strong>revelation and the Third Pull</strong>. </p>

            <h3>Unity in the Faith</h3>
            <p> Our vision gathers believers around the absolute of the Word, as revealed through the message of this hour, delivered by our <strong>prophet William Branham</strong>. Here, unity is not manufactured; it is born by shared revelation. As insiders in the divine agenda, entrusted with mystery truths unveiled through the opening of the Word, we walk together in truth, love, and the Spirit bearing witness to a living Christ in our midst. </p>

            <h3>Impacting Families and Future Generations</h3>
            <p>
              Our church does not only look inward but outward. We aim to impact homes, raise godly children, and establish spiritual legacies. Through youth ministries, Sunday School, and family gatherings days, we lay foundations for future generations to walk upright in the faith.
            </p>
            <p>
              The vision is clear: to be a living epistle, known and read of all men, declaring that Jesus Christ is the same yesterday, today, and forever.
            </p>
          </Col>

          {/* Right Column */}
          <Col xs={12} md={4} className="text-center vision-image">
            <img
              src={VisionImage}
              alt="Vision of the Church"
              className="img-fluid mb-4"
              style={{ objectFit: 'cover', width: '100%' }}
            />
            <div className="text-start">
              <h6 className="text-uppercase" style={{ color: 'rgba(207, 74, 70)' }}>
                Our Calling
              </h6>
              <h4 className="mb-4">A Church With a Purpose</h4>
            </div>
          </Col>
        </Row>
        <br /><br /><br /><br />
        <hr />
      </Container>
    </section>
  );
};

export default Vision;
