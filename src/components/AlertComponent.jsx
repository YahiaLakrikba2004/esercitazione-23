import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Welcome = ({ carouselHeight }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleDismiss = () => {
    setShowAlert(false);
  };

  return (
    showAlert && (
      <Alert variant="success" style={{ backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', borderRadius: '0.25rem', padding: '0.75rem', marginBottom: '3rem', marginTop: '3rem', width:'90%' }} dismissible onClose={handleDismiss}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1rem' }}>Offerta Speciale!</h4>
        <p style={{ marginBottom: '0', fontSize: '0.9rem' }}>Scopri i nostri libri in offerta!</p>
      </Alert>
    )
  );
};

export default Welcome;
