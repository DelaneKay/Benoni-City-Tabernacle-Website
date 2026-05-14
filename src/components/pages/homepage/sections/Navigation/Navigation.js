import React, { useEffect, useState }  from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

// Logo
import BCTLogo from '../../../../../media/homepage/bct-logo1.png'
import BCTLogoWhite from '../../../../../media/homepage/footer-logo-transparent.png'

// CSS
import '../Navigation/Navigation.css'

const Navigation = () => {
  const ONLINE_GIVING_URL = 'https://offering.benonicitytabernacle.co.za/'

  // State to track navbar expansion
  const [expanded, setExpanded] = useState(false);

  // State to track navbar scrolling
  const [scrolled, setScrolled] = useState(false);

  // Get the current location (route)
  const location = useLocation();

  // Use the white logo on any page while the navbar is still in its top, unscrolled state
  const useHeroLogo = !scrolled
  
  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : ''; // Return 'active-link' class if the current path matches
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <Container>
      <Navbar
          expand="lg" 
          className={`navbar ${scrolled ? 'scrolled' : 'navbar-transparent'}`}
          fixed="top"
          expanded={expanded} 
        >
          <Container className='nav-section'>
            <Navbar.Brand href="#home">
              <img src={useHeroLogo ? BCTLogoWhite : BCTLogo} alt="BCT" className={`logo ${useHeroLogo ? 'logo-hero' : ''}`} />
            </Navbar.Brand>

             {/* Navbar toggle button */}
             <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)} // Toggle between open/close
          >
            {/* Conditionally render "X" or hamburger icon */}
            {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Navbar.Toggle>


            <Navbar.Collapse id="navbar-nav" className='right-aligned'>
                <Nav>
                <Nav.Link
                  to="/"
                  as={Link}
                  onClick={() => setExpanded(false)}
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  to="/sermons"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/sermons')}
                >
                  SERMONS
                </Nav.Link>
                <Nav.Link
                  to="/sunday-school"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/sunday-school')}
                >
                  SUNDAY SCHOOL CORNER
                </Nav.Link>
                <Nav.Link
                  to="/missionary"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/mmissionary')}
                >
                  MISSIONS
                </Nav.Link>
                <Nav.Link
                  to="/william-branham"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/william-branham')}
                >
                  WILLIAM BRANHAM
                </Nav.Link>
                <Nav.Link
                  to="/about-us"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/about-us')}
                >
                  ABOUT US
                </Nav.Link>
                  <Button className='nav-btn' variant='light' onClick={() => {
                    setExpanded(false);
                    window.location.assign(ONLINE_GIVING_URL);
                  }}>ONLINE GIVING</Button>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default Navigation
