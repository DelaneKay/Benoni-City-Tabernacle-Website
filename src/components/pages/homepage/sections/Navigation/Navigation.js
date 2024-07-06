import React, { useEffect, useState }  from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Logo
import BCTLogo from '../../../../../media/homepage/bct-logo1.png'

// CSS
import '../Navigation/Navigation.css'

const Navigation = () => {

  const [scrolled, setScrolled] = useState(false);

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
          className={`navbar ${scrolled ? 'scrolled' : ''}`}
          fixed="top" 
        >
          <Container className='nav-section'>
            <Navbar.Brand href="#home">
              <img src={BCTLogo} alt="BCT" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className='right-aligned'>
                <Nav>
                <Nav.Link  to="/" as={Link} >HOME</Nav.Link>
                  <Nav.Link  to="/" as={Link}>SERMONS</Nav.Link>
                  <Nav.Link  to="/" as={Link}>SPECIALS</Nav.Link>
                  <Nav.Link  to="/" as={Link}>SUNDAY SCHOOL CORNER</Nav.Link>
                  <Nav.Link  to="/" as={Link}>MISSIONARY</Nav.Link>
                  <Nav.Link  to="/" as={Link}>WILLIAM BRANHAM</Nav.Link>
                  <Nav.Link  to="/" as={Link}>ABOUT US</Nav.Link>
                  <Button>ONLINE GIVING</Button>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default Navigation
