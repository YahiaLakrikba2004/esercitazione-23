import React, { useState } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './commentArea';
import { Col, Row, ButtonGroup, Button } from 'react-bootstrap';
import booksData from '../books.json';

const BookList = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleFilterChange = (filter) => {
    setFilter(filter);
    setSelectedBook(null);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setSelectedBook(null);
  }

  const handleBookSelect = (asin) => {
    setSelectedBook(asin);
  }

  let filteredBooks = [...books];

  if (filter !== 'all') {
    filteredBooks = filteredBooks.filter((book) =>
      book.category && book.category.toLowerCase() === filter.toLowerCase()
    );
  }

  if (searchQuery !== '') {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery)
    );
  }

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={6} md={3} className="text-center">
          <ButtonGroup className="filter-buttons">
            <Button onClick={() => handleFilterChange('all')} className="filter-button">All</Button>
            <Button onClick={() => handleFilterChange('fantasy')} className="filter-button fantasy">Fantasy</Button>
            <Button onClick={() => handleFilterChange('scifi')} className="filter-button scifi">Sci-Fi</Button>
            <Button onClick={() => handleFilterChange('romance')} className="filter-button romance">Romance</Button>
            <Button onClick={() => handleFilterChange('horror')} className="filter-button horror">Horror</Button>
            <Button onClick={() => handleFilterChange('history')} className="filter-button history">History</Button>
          </ButtonGroup>
          <br />
          <br />
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {filteredBooks.map((book) => (
          <Col xs={6} md={3} key={book.asin}>
            <SingleBook book={book} onSelect={() => handleBookSelect(book.asin)} />
          </Col>
        ))}
      </Row>

      <Col md={4}>
        {selectedBook && <CommentArea asin={selectedBook} />}
      </Col>
    </>
  );
}

export default BookList;
