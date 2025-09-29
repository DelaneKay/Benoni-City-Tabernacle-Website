import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import MissionsImage from '../../../../../media/missions/clayville-logo-1.webp';
import './MissionsAbout.css'
import { Outlet } from 'react-router-dom';

const MissionsAbout = () => {

    const goToYoutubePage = () => {
      window.open('https://www.youtube.com/@clayviewspokenword7940', '_blank')
  }; 

  return (
    <section>
      <Container className='missions-section'>
        <Row>
            <Col xs={12} md={10} className='missions-left-col'>
                <h1>The Growth of Clayville Spoken Word Ministry: A Testament to Faith and Outreach</h1>
                <p>
                  Clayville Spoken Word Ministry stands as a beacon of faith and growth in the heart of Tembisa, Johannesburg. As a sister church of Benoni City Tabernacle, it has flourished under the dedicated leadership of <strong>Pastor William Ndlovu</strong>. Through passionate outreach efforts and open-air services, the church has witnessed tremendous growth, touching the lives of many in the community.
                </p>
                <h3>A Legacy of Spiritual Growth</h3>
                <p>
                  Pastor William Ndlovu’s journey in ministry is deeply rooted in his time under the guidance of Rev. T. Mahere, where he developed his calling and spiritual leadership. Under this mentorship and leadership, he cultivated a passion for preaching the Word, eventually being led to take up the pastoral role at Clayville Spoken Word Ministry.
                </p>
                <h3>A Church on a Mission</h3>
                <p>
                  Clayville Spoken Word Ministry is deeply rooted in the <strong>End-Time Message</strong> brought by God’s prophet <strong>William Branham</strong>, emphasizing the restoration of the true Word of God as revealed in Scripture. This commitment to the <strong>Message of the Hour</strong> fuels the church’s mission to reach souls with the unadulterated truth of the Gospel.
                </p>
                <p>
                  Through open-air evangelism, community outreach, and steadfast preaching, the ministry has become a light in Clayville and beyond, drawing believers into a deeper walk with Christ. The church remains dedicated to preparing the Bride of Christ for His soon return, carrying forward the work of the ministry as taught by Brother Branham and Rev. T. Mahere who is following in his footsteps.
                </p>
                <p>
                  As the ministry moves forward, it stands as a testimony to God’s faithfulness—reaching souls, transforming hearts, and expanding the Kingdom one outreach at a time.
                </p>
                <div className="text-start">
                    <Button className='btn-missions' variant="outline-danger" size="lg"
                    onClick={goToYoutubePage}>
                    Watch More
                    </Button>
                    <Outlet/>
                </div>
            </Col>
            <Col xs={12} md={2}>
                <img
                    src={MissionsImage}
                    alt="Junior Class"
                    className="img-fluid mb-4 missions-img"
                    style={{    
                        objectFit: 'cover',  
                        width: 'auto'}}
                />
                
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissionsAbout
