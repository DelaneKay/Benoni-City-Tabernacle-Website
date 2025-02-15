import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { MdCheck } from "react-icons/md";
import Image from '../../../../../media/homepage/img10.jpg';
import './AppSection.css';
import { Button } from 'react-bootstrap';

const AppSection = () => {
  return (
    <section className='app-section'>
      <div className="container">
        <div className="layout layout-2">
          <div 
            className="layout-media bg-image" 
            style={{ backgroundImage: `url(${Image})` }}
          ></div>
          <div 
            className="layout-content bg-100" 
          >
            <div className="text-block-1">
              <h2>DOWNLOAD THE APP</h2>
              <p className="big">
                To stay connected with our church and receive the latest news and updates from us, download the free BCT app that offers:
              </p>
              <div className="row row-15">
                <div className="col-sm-auto">
                  <ul className="list-marked">
                    <li className="list-item"><MdCheck className='store-check-icon'/>Announcements</li>
                    <li className="list-item"><MdCheck className='store-check-icon'/>Sermons</li>
                    <li className="list-item"><MdCheck className='store-check-icon'/>Event Notifications</li>
                  </ul>
                </div>
              </div>
              <div className="button-group">
                <Button variant="outline-dark" size="lg" className="store-button apple-button">
                  <FaApple className="store-icon" /> APPLE STORE
                </Button>
                <Button variant="outline-dark" size="lg" className="store-button play-button">
                  <FaGooglePlay className="store-icon" /> GOOGLE PLAY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
