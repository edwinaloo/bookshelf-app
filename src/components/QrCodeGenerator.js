import React from 'react';
import QRCode from 'qrcode.react';

const QrCodeGenerator = ({ bookDetails }) => {
  return (
    <div>
      <h3>QR Code for {bookDetails.name}</h3>
      <QRCode value={`bookshelf-app/show-book/${bookDetails.isbn}`} />
    </div>
  );
};

export default QrCodeGenerator;
