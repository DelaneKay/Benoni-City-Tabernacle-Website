import React, { useEffect, useState }  from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

// Logo
import BCTLogo from '../../../../../media/homepage/bct-logo1.png'

// CSS
import '../Navigation/Navigation.css'

const Navigation = () => {

  // State to track navbar expansion
  const [expanded, setExpanded] = useState(false);

  // State to track navbar scrolling
  const [scrolled, setScrolled] = useState(false);

  // Get the current location (route)
  const location = useLocation();

  // Set whether the navbar should be transparent based on the route
  const isHomePage = location.pathname === '/'; // Make transparent on HomePage
  
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
          className={`navbar ${scrolled ? 'scrolled' : ''} ${isHomePage && !scrolled ? 'navbar-transparent' : 'navbar-solid'}`}
          fixed="top"
          expanded={expanded} 
        >
          <Container className='nav-section'>
            <Navbar.Brand href="#home">
              <img src={BCTLogo} alt="BCT" className="logo" />
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
                  to="/Sermons"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/Sermons')}
                >
                  SERMONS
                </Nav.Link>
                <Nav.Link
                  to="/Specials"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/Specials')}
                >
                  SPECIALS
                </Nav.Link>
                <Nav.Link
                  to="/SundaySchool"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/SundaySchool')}
                >
                  SUNDAY SCHOOL CORNER
                </Nav.Link>
                <Nav.Link
                  to="/Missionary"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/Missionary')}
                >
                  MISSIONARY
                </Nav.Link>
                <Nav.Link
                  to="/WilliamBranham"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/WilliamBranham')}
                >
                  WILLIAM BRANHAM
                </Nav.Link>
                <Nav.Link
                  to="/AboutUs"
                  as={Link}
                  onClick={() => setExpanded(false)}
                  className={isActive('/AboutUs')}
                >
                  ABOUT US
                </Nav.Link>
                  <Button variant='light' onClick={() => setExpanded(false)}>ONLINE GIVING</Button>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default Navigation
