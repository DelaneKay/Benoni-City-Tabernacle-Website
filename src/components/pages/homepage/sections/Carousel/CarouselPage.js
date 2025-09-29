import React, { Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Button } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import '../Carousel/CarouselPage.css';

// Slide 1 variants
import Img1Desktop from '../../../../../media/homepage/img5-1920x1080.jpg';
import Img1Tablet  from '../../../../../media/homepage/img5-1366x768.jpg';
import Img1Mobile  from '../../../../../media/homepage/img5-1080x1920.jpg';

// Slide 2 variants
import Img2Desktop from '../../../../../media/homepage/img2-1920x1080.jpg';
import Img2Tablet  from '../../../../../media/homepage/img2-1366x768.jpg';
import Img2Mobile  from '../../../../../media/homepage/img2-1080x1920.jpg';

// Slide 3 variants
import Img3Desktop from '../../../../../media/homepage/img3-1920x1080.jpg';
import Img3Tablet  from '../../../../../media/homepage/img3-1366x768.jpg';
import Img3Mobile  from '../../../../../media/homepage/img3-1080x1920.jpg';

const CarouselPage = () => {
  const handleWatchNow = () => {
    const el = document.getElementById('church-info');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fragment>
      <Carousel slide controls={false} interval={7000}>
        {/* ---- Slide 1 ---- */}
        <Carousel.Item>
          <picture className="carousel-picture">
            {/* Mobile portrait: 1080×1920 */}
            <source
              media="(max-width: 600px) and (orientation: portrait)"
              srcSet={Img1Mobile}
            />
            {/* Tablets & small laptops (and phone landscape): 1366×768 */}
            <source
              media="(max-width: 1024px)"
              srcSet={Img1Tablet}
            />
            {/* Desktop default: 1920×1080 */}
            <img
              className="d-block w-100 carousel-img"
              src={Img1Desktop}
              alt="Welcome to Benoni City Tabernacle (BCT)"
              loading="eager"
            />
          </picture>

          <Carousel.Caption>
            <Container>
              <h3>Welcome to Benoni City Tabernacle (BCT)</h3>
              <h1>A SOUL SAVING STATION</h1>
              <p>We are a Word based church with no creed but Christ, no law but love and no book but the Bible.</p>
              <br />
              <Button variant="light" onClick={handleWatchNow}>SEE MORE</Button>
              <br /><br /><br /><br /><br /><br />
              <div className="address" style={{ display: 'flex', alignItems: 'center' }}>
                <IoLocationOutline size={60} style={{ marginRight: 10 }} />
                <div>
                  <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, 1500</h4>
                  <p style={{ margin: 0 }}>Feel free to visit us on any of our service days.</p>
                </div>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ---- Slide 2 ---- */}
        <Carousel.Item>
          <picture className="carousel-picture">
            <source media="(max-width: 600px) and (orientation: portrait)" srcSet={Img2Mobile} />
            <source media="(max-width: 1024px)" srcSet={Img2Tablet} />
            <img
              className="d-block w-100 carousel-img"
              src={Img2Desktop}
              alt="Connect with Bible Truths"
              loading="lazy"
            />
          </picture>

          <Carousel.Caption>
            <Container>
              <h3>Understand the Endtime Message</h3>
              <h1>CONNECT WITH BIBLE TRUTHS</h1>
              <p>At our church, we help you understand the times we are living in by sharing the teachings of William Branham and preaching the present-day truth.</p>
              <br />
              <Button variant="light" onClick={handleWatchNow}>SEE MORE</Button>
              <br /><br /><br /><br /><br /><br />
              <div className="address" style={{ display: 'flex', alignItems: 'center' }}>
                <IoLocationOutline size={60} style={{ marginRight: 10 }} />
                <div>
                  <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, 1500</h4>
                  <p style={{ margin: 0 }}>Feel free to visit us on any of our service days.</p>
                </div>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ---- Slide 3 ---- */}
        <Carousel.Item>
          <picture className="carousel-picture">
            <source media="(max-width: 600px) and (orientation: portrait)" srcSet={Img3Mobile} />
            <source media="(max-width: 1024px)" srcSet={Img3Tablet} />
            <img
              className="d-block w-100 carousel-img"
              src={Img3Desktop}
              alt="Where the Eagles Gather"
              loading="lazy"
            />
          </picture>

          <Carousel.Caption>
            <Container>
              <h3>We are an Inter-denominational Church</h3>
              <h1>WHERE THE EAGLES GATHER</h1>
              <p>We aim to deepen your understanding through insightful preaching. Together, we strive to grow in faith and wisdom, preparing ourselves for the 2nd Coming.</p>
              <br />
              <Button variant="light" onClick={handleWatchNow}>SEE MORE</Button>
              <br /><br /><br /><br /><br /><br />
              <div className="address" style={{ display: 'flex', alignItems: 'center' }}>
                <IoLocationOutline size={60} style={{ marginRight: 10 }} />
                <div>
                  <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, 1500</h4>
                  <p style={{ margin: 0 }}>Feel free to visit us on any of our service days.</p>
                </div>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default CarouselPage;
