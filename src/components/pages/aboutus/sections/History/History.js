import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import HistoryImage from '../../../../../media/aboutus/rev-mum-2.jpg'; // Replace with actual image
import './History.css';

const History = () => {

  return (
    <section className='history-section'>
      <Container>
        <Row>
          {/* Left Column */}
          <Col xs={12} md={8} className='history-left-col'>
            <h1>Our Humble Beginnings</h1>
            <p>
              Benoni City Tabernacle was birthed through the vision and the calling of <strong>Rev. T. Mahere</strong> and his devoted wife, <strong>Sister D. Mahere</strong>, around the year 2016. What began as a small group of faithful believers gathered in the house of a brother, has since blossomed into a vibrant and growing church community.
            </p>
            <p>
              In those early days, the church services were simple yet Spirit-filled, and the presence of God was evident even in the humble living room gatherings. As more souls came to the knowledge of the truth and gave their lives to the Lord, the church began to experience growth—both spiritually and numerically.
            </p>
            <h3>Growth and Movement</h3>
            <p>
              As the congregation expanded, the church was led to relocate several times to accommodate the growing number of believers. Each move was a step of faith, and God continually provided spaces that allowed the message to flourish and reach more lives.
            </p>
            <p>
              Through these transitions, the leadership remained steadfast—Rev. Mahere, with the unwavering support of his wife and family, continued to feed the flock with the revealed Word of the Hour, standing firm on the teachings of God's prophet-messenger, <strong>William Marrion Branham</strong>.
            </p>
            <h3>A Beacon in the Region and Beyond</h3>
            <p>
              Today, Benoni City Tabernacle is not only a pillar of faith in the city of Benoni, but it has also gained recognition throughout the region and internationally. Through the powerful move of God, the church has become a source of spiritual light, healing, and truth for believers across borders.
            </p>
            <p>
              What began with a few faithful individuals in a living room has grown into a thriving assembly of believers, bound together by the love of Christ and the unchanging message of this day.
            </p>
          </Col>

          {/* Right Column */}
          <Col xs={12} md={4} className="text-center history-image">
            <img
              src={HistoryImage}
              alt="Church History"
              className="img-fluid mb-4"
              style={{ objectFit: 'cover', width: '100%' }}
            />
            <div className="text-start">
              <h6 className="text-uppercase" style={{ color: 'rgba(207, 74, 70)' }}>
                2016 — Present
              </h6>
              <h4 className="mb-4">Led by Rev. T. Mahere and wife</h4>
            </div>
          </Col>
        </Row>
        <br /><br /><br /><br />
        <hr />
      </Container>
    </section>
  );
};

export default History;
