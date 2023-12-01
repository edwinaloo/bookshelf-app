import React from 'react';
import QRCode from 'react-qrcode';

const QrCodeGenerator = ({ bookDetails }) => {
  return (
    <div>
      <h3>QR Code for {bookDetails.bookName}</h3>
      <QRCode value={`bookshelf-app/show-book/${bookDetails.id}`} />
    </div>
  );
};

export default QrCodeGenerator;
