import React, { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import Img1 from '../../../../../media/homepage/img5.jpg'
import Img2 from '../../../../../media/homepage/img2.jpg'
import Img3 from '../../../../../media/homepage/img3.jpg'
import '../Carousel/CarouselPage.css'
import Navigation from '../Navigation/Navigation';

const CarouselPage = () => {

    // Function to handle "Watch Now" button click
  const handleWatchNow = () => {
    const seemoreSection = document.getElementById('church-info'); // Reference the SermonStreaming section by its id
    if (seemoreSection) {
      seemoreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Fragment>
        <Carousel slide={true} controls={false}>
        <Carousel.Item>
            <img style={{height: '100vh'}}
            className="d-block w-100"
            src={Img2}
            alt="First slide"
            />
            <Carousel.Caption>
                <Container>
                    <h3>Welcome to Benoni City Tabernacle (BCT)</h3>
                    <h1 >A SOUL SAVING STATION</h1>
                    <p>We are a Word based church with no creed but Christ, no law but love and no book but the Bible.</p>
                    <br/>
                    <Button variant="light" onClick={handleWatchNow}>SEE MORE</Button>
                    <br/><br/><br/><br/><br/><br/>
                    <div className="address" style={{ display: 'flex', alignItems: 'center' }}>
                    <IoLocationOutline size={60} style={{ marginRight: '10px' }}/>
                    <div>
                        <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, 1500</h4>
                        <p style={{ margin: 0 }}>Feel free to visit us on any of our service days.</p>
                    </div>
                    </div>
                </Container>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{height: '100vh'}}
            className="d-block w-100"
            src={Img3}
            alt="First slide"
            />
            <Carousel.Caption>
                <Container>
                    <h3>Understand the Endtime Message</h3>
                    <h1>CONNECT WITH BIBLE TRUTHS</h1>
                    <p>At our church, we help you understand the times we are living in by sharing the teachings of William Branham and preaching the present-day truth.</p>
                    <br/>
                    <Button variant="light" onClick={handleWatchNow}>SEE MORE</Button>
                    <br/><br/><br/><br/><br/><br/>
                    <div className="address" style={{ display: 'flex', alignItems: 'center' }}>
                    <IoLocationOutline size={60} style={{ marginRight: '10px' }}/>
                    <div>
                        <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, 1500</h4>
                        <p style={{ margin: 0 }}>Feel free to visit us on any of our service days.</p>
                    </div>
                    </div>
                </Container>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{height: '100vh'}}
            className="d-block w-100"
            src={Img1}
            alt="First slide"
            />
            <Carousel.Caption>
                <Container>
                    <h3>We are an Inter-denominational Church</h3>
                    <h1>WHERE THE EAGLES GATHER</h1>
                    <p>We aim to deepen your understanding through insightful preaching. Together, we strive to grow in faith and wisdom, preparing ourselves for the 2nd Coming.</p>
                    <br/>
                    <Button variant="light" onClick={handleWatchNow}>SEE MORE</Button>
                    <br/><br/><br/><br/><br/><br/>
                    <div className="address" style={{ display: 'flex', alignItems: 'center' }}>
                    <IoLocationOutline size={60} style={{ marginRight: '10px' }}/>
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
  )
}

export default CarouselPage
