import React, { Component } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    showModal: false
  };

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { book } = this.props;
    const { showModal } = this.state;

    return (
      <div style={{ height: '100%' }}>
        <Card style={{ height: '100%' }}>
          <Card.Img variant="top" src={book.img} style={{ height: '600px', objectFit: 'cover' }} />
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem' }}>
            <div>
              <Card.Title style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{book.title}</Card.Title>
              <Card.Text style={{ marginBottom: '1rem' }}>{book.description}</Card.Text>
            </div>
            <div>
              <button className='bg-success mx-2 rounded-pill px-4 py-2 border-0 text-white'>Acquista</button>
              <button className='bg-danger rounded-pill px-4 py-2 border-0 text-white' onClick={this.handleModalOpen}>Dettagli</button>
            </div>
          </Card.Body>
        </Card>

        <Modal show={showModal} onHide={this.handleModalClose}>
  <Modal.Header closeButton>
    <Modal.Title style={{ fontWeight: 'bold' }}>{book.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Card.Img variant="top" src={book.img} style={{ height: '700px', objectFit: 'cover', marginBottom: '1rem' }} />
    <p><strong>Categoria: </strong>{book.category}</p>
    <p><strong>Prezzo: </strong>{book.price}€</p>
    {/* Aggiungi qui ulteriori informazioni del libro */}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleModalClose}>
      Chiudi
    </Button>
    <Button variant="primary" onClick={this.handleModalClose}>
      Salva
    </Button>
  </Modal.Footer>
</Modal>

      </div>
    );
  }
}

export default SingleBook;
