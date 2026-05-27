import React, { Fragment, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Button } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import '../Carousel/CarouselPage.css';
import { useHeroLoader } from '../../../../../utils/HeroLoaderContext';

// Slide 1 variants
import Img1Desktop from '../../../../../media/homepage/carousel-1-desktop-opt-v1.jpg';
import Img1Tablet  from '../../../../../media/homepage/carousel-1-tablet-opt-v1.jpg';
import Img1Mobile  from '../../../../../media/homepage/carousel-1-mobile-opt-v1.jpg';

// Slide 2 variants
import Img2Desktop from '../../../../../media/homepage/carousel-2-desktop-opt-v1.jpg';
import Img2Tablet  from '../../../../../media/homepage/carousel-2-tablet-opt-v2.jpg';
import Img2Mobile  from '../../../../../media/homepage/carousel-2-mobile-opt-v1.jpg';

// Slide 3 variants
import Img3Desktop from '../../../../../media/homepage/carousel-3-desktop-opt-v1.jpg';
import Img3Tablet  from '../../../../../media/homepage/carousel-3-tablet-opt-v1.jpg';
import Img3Mobile  from '../../../../../media/homepage/carousel-3-mobile-opt-v1.jpg';

const CarouselPage = () => {
  const { markHeroMediaReady } = useHeroLoader();
  const firstSlideImageRef = useRef(null);

  useEffect(() => {
    const preloadConfigs = [
      {
        href: Img1Mobile,
        media: '(max-width: 600px) and (orientation: portrait)',
      },
      {
        href: Img1Tablet,
        media: '(min-width: 601px) and (max-width: 1024px)',
      },
      {
        href: Img1Desktop,
        media: '(min-width: 1025px)',
      },
    ];

    const links = preloadConfigs.map(({ href, media }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      link.media = media;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (firstSlideImageRef.current?.complete) {
      markHeroMediaReady();
    }
  }, [markHeroMediaReady]);

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
              ref={firstSlideImageRef}
              className="d-block w-100 carousel-img carousel-img-slide-1"
              src={Img1Desktop}
              alt="Welcome to Benoni City Tabernacle (BCT)"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={markHeroMediaReady}
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
                  <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, Ekurhuleni</h4>
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
              className="d-block w-100 carousel-img carousel-img-slide-2"
              src={Img2Desktop}
              alt="Connect with Bible Truths"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
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
                  <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, Ekurhuleni</h4>
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
              className="d-block w-100 carousel-img carousel-img-slide-3"
              src={Img3Desktop}
              alt="Where the Eagles Gather"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
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
                  <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, Ekurhuleni</h4>
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
