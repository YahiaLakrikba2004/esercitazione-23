import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNav = () => {
  return (
    <Navbar  expand="lg" style={{ borderBottom:'2px solid #282C34', boxShadow: 'rgba(0, 0, 0, 0.1) -3px 12px 20px', backgroundColor:'#282C34'}}>
      <Navbar.Brand href="#" style={{ fontWeight: 'bold', marginLeft: '20px', color:'white' }}>EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" style={{  fontWeight: 'bold', marginRight: '20px', textTransform: 'uppercase', marginLeft: '20px', color:'white' }}>Home</Nav.Link>
          <Nav.Link href="#" style={{  fontWeight: 'bold', marginRight: '20px', textTransform: 'uppercase', marginLeft: '20px', color:'white' }}>About</Nav.Link>
          <Nav.Link href="#" style={{  fontWeight: 'bold', marginRight: '20px', textTransform: 'uppercase', marginLeft: '20px', color:'white' }}>Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
