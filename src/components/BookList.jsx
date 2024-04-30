import React, { Component } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './commentArea';
import { Col, Row, ButtonGroup, Button } from 'react-bootstrap';
import booksData from '../books.json';

class BookList extends Component {
  state = {
    filter: 'all',
    searchQuery: '',
    books: booksData,
    selectedBook: null // Aggiungi selectedBook allo stato iniziale
  }

  handleFilterChange = (filter) => {
    this.setState({ filter, selectedBook: null }); // Resetta selectedBook quando cambia il filtro
  }

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase(), selectedBook: null }); // Resetta selectedBook quando cambia la ricerca
  }

  handleBookSelect = (asin) => {
    this.setState({ selectedBook: asin });
  }

  render() {
    const { filter, searchQuery, books, selectedBook } = this.state;
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
              <Button onClick={() => this.handleFilterChange('all')} className="filter-button">All</Button>
              <Button onClick={() => this.handleFilterChange('fantasy')} className="filter-button fantasy">Fantasy</Button>
              <Button onClick={() => this.handleFilterChange('scifi')} className="filter-button scifi">Sci-Fi</Button>
              <Button onClick={() => this.handleFilterChange('romance')} className="filter-button romance">Romance</Button>
              <Button onClick={() => this.handleFilterChange('horror')} className="filter-button horror">Horror</Button>
              <Button onClick={() => this.handleFilterChange('history')} className="filter-button history">History</Button>
            </ButtonGroup>
            <br />
            <br />
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {filteredBooks.map((book) => (
            <Col xs={6} md={3} key={book.asin}>
              <SingleBook book={book} onSelect={() => this.handleBookSelect(book.asin)} />
            </Col>
          ))}
        </Row>

        <Col md={4}>
          {selectedBook && <CommentArea asin={selectedBook} />} {/* Passa selectedBook solo se è stato selezionato */}
        </Col>
      </>
    );
  }
}

export default BookList;
