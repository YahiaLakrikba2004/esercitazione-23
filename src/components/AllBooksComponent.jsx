import React, { useState } from 'react';
import { Card, Container, Row, Col, ButtonGroup, Button, Carousel, Modal } from 'react-bootstrap'; 
import booksData from '../books.json';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
};

const AllTheBooks = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselInterval, setCarouselInterval] = useState(5000);
  const [shuffledAllBooks, setShuffledAllBooks] = useState(shuffleArray(booksData));

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === "all") {
      setShuffledAllBooks(shuffleArray(booksData));
    }
  };

  const handleShowDetails = (book) => {
    setSelectedBook(book);
    setShowDetailsModal(true);
    setCarouselInterval(null); 
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
    setShowDetailsModal(false);
    setCarouselInterval(5000); 
  };

  const handleCarouselSelect = (selectedIndex, e) => {
    if (!showDetailsModal) {
      setCarouselIndex(selectedIndex);
    }
  };

  const filteredBooks = selectedGenre === "all" ? shuffledAllBooks : booksData.filter(book => book.category === selectedGenre);
  const offerBooks = booksData.slice(0, 9);

  return (
    <Container fluid>
      <Carousel style={{ marginBottom: '20px', height: '400px' }} interval={carouselInterval} activeIndex={carouselIndex} onSelect={handleCarouselSelect}>
        {offerBooks.map((book, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={book.img}
              alt={book.title}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>
              <h3>{book.title}</h3>
              <p>Prezzo: €{book.price}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Row>
        <ButtonGroup style={{ marginBottom: '20px' }}>
          <Button variant="secondary" onClick={() => handleGenreChange("all")} className="btn-transition">All</Button>
          <Button variant="secondary" onClick={() => handleGenreChange("fantasy")} className="btn-transition">Fantasy</Button>
          <Button variant="secondary" onClick={() => handleGenreChange("history")} className="btn-transition">History</Button>
          <Button variant="secondary" onClick={() => handleGenreChange("horror")} className="btn-transition">Horror</Button>
          <Button variant="secondary" onClick={() => handleGenreChange("romance")} className="btn-transition">Romance</Button>
          <Button variant="secondary" onClick={() => handleGenreChange("scifi")} className="btn-transition">Sci-Fi</Button>
        </ButtonGroup>
        {filteredBooks.map((book, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-4">
            <Card className="book-card" style={{ height: '100%' }}>
              <div style={{ height: '400px', overflow: 'hidden' }}>
                <Card.Img src={book.img} className="book-image" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
              </div>
              <Card.Body>
                <Card.Title style={{ height: '50px', overflow: 'hidden' }}>{book.title}</Card.Title>
                <Card.Text style={{ marginBottom: '5px' }}>Categoria: {book.category}</Card.Text>
                <Card.Text style={{ marginBottom: '5px' }}>Prezzo: €{book.price}</Card.Text>
                <Button type="button" className="btn btn-primary mx-4" onClick={() => handleShowDetails(book)}>Dettagli</Button>
                <Button type="button" className="btn btn-success">Acquista libro</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showDetailsModal} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img src={selectedBook?.img} className="book-image" style={{ objectFit: 'contain', maxHeight: '400px', width: '100%' }} />
          </div>
          <p className='P'>Categoria: {selectedBook?.category}</p>
          <p className='P'>Prezzo: €{selectedBook?.price}</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AllTheBooks;
