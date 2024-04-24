import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, Col, Row, NavLink } from 'react-bootstrap';
import booksData from '../books.json';

const MyNav = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    
    if (!showSearch) {
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = booksData.filter(book =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar expand="lg" style={{ borderBottom: '2px solid #282C34', boxShadow: 'rgba(0, 0, 0, 0.1) 20px -14px 20px', backgroundColor: '#282C34', display: 'flex', justifyContent: 'space-between' }}>
        <Navbar.Brand href="#" style={{ fontWeight: 'bold', color: 'white' }}>EpiBooks</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#" style={{ fontWeight: 'bold', color: 'white' }}>Home</Nav.Link>
          <Nav.Link href="#" style={{ fontWeight: 'bold', color: 'white' }}>About</Nav.Link>
          <Nav.Link href="/books.json" style={{ fontWeight: 'bold', color: 'white' }}>Tutti i libri</Nav.Link>
          <Nav.Link href="#" style={{ fontWeight: 'bold', color: 'white' }}>Contatti</Nav.Link>
          <NavLink href="#" variant="outline-light" style={{ fontWeight: 'bold', color: 'white' }}  onClick={handleSearchToggle}>Cerca</NavLink>
        </Nav>
      </Navbar>

      {showSearch && (
        <div className="search-results-container" style={{ transition: 'height 0.3s ease' }}>
          <Form inline className='d-flex justify-content-center bg-dark'>
            <FormControl
              type="text"
              placeholder="Cerca libri..."
              value={searchTerm}
              onChange={handleSearch}
              className="mr-sm-2"
              style={{ backgroundColor: '#FFFFFF', color: 'black', border: '1px solid #6C757D', marginBottom: '20px', marginTop: '20px' }}
            />
            <Button variant="light" style={{ borderColor: 'black', color: 'black', marginTop:'20px', marginBottom:'20px' }}>Cerca</Button>
          </Form>
          {searchTerm && searchResults.length > 0 ? (
            <Row className='bg-dark'>
              {searchResults.map(book => (
                <Col sm={4} key={book.id}>
                  <Card className="book-card mb-3 h-100" style={{ backgroundColor: '#343A40', color: 'white' }}>
                    <Card.Img variant="top" src={book.img} style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '16px' }}>{book.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center bg-dark" style={{ color: 'white' }}>
              {searchTerm && searchResults.length === 0 && <p className='PNAV'>Nessun risultato trovato.</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyNav;
