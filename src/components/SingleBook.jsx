import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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
            <button className='bg-danger rounded-pill px-4 py-2 border-0 text-white' onClick={handleModalOpen}>Dettagli</button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleModalClose}>
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
          <Button variant="secondary" onClick={handleModalClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleBook;
