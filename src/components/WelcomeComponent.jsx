import React from 'react';
import { Alert } from 'react-bootstrap';

const Welcome = ({ carouselHeight }) => {
  return (
    
      <Alert variant="success" style={{ backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', borderRadius: '0.25rem', padding: '1rem', marginBottom: '3rem', marginTop: '3rem', width:'90%' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Offerta Speciale!</h4>
        <p style={{ marginBottom: '0' }}>Scopri i nostri libri in offerta!</p>
      </Alert>
    
  );
};

export default Welcome;
