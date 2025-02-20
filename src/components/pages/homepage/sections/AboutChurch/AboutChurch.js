import React from 'react';
import './AboutChurch.css';
import { Button } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const AboutChurch = () => {

  const navigate = useNavigate();
  
    const goToSermonsPage = () => {
      navigate('/sermons');
    };

    const goToProphetPage = () => {
      navigate('/william-branham');
    };

  return (
    <section className='about-church'>
      <div className="container">
        <div className="layout-church layout-church-2">
          <div className="layout-church-media bg-image" style={{ backgroundImage: `url(${require('../../../../../media/homepage/img4.jpg')})` }}></div>
          <div className="layout-church-content">
            <h2><strong>ABOUT OUR CHURCH</strong></h2>
            <p>Our belief is grounded in the profound legacy of God’s prophet, William Branham. We strive to continue his mission, through the leadership of Pastor Tinashe Mahere, by sharing his vital messages with our community.</p>
            <p>Our mission is to help you grasp the present-day truth through the lens of William Branham’s prophecies, preachings and teachings. We believe that by understanding these truths, you will be better equipped to navigate the challenges and opportunities of these last days. Our sermons and teachings are designed to enlighten, inspire, and prepare you for the time we currently live in and also for what lies ahead.</p>
            <div>
                <Button 
                  variant="danger"  
                  size="lg"
                  onClick={goToSermonsPage}>OUR SERMONS</Button>
                <Button 
                  style={{marginLeft: '1.5rem'}} 
                  variant="outline-dark" 
                  size="lg"
                  onClick={goToProphetPage}>OUR PROPHET</Button>
                  <Outlet/>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChurch;
