import React, { useState } from 'react';
import QrReader from 'react-qr-reader'; // Corrected import

const QrScanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      // Redirect to the scanned book's individual page
      // You can use react-router-dom for navigation
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrReader delay={300} onError={handleError} onScan={handleScan} />
      {result && <p>Scanned Result: {result}</p>}
    </div>
  );
};

export default QrScanner;
