import React from 'react';
import { Scanner } from 'barcode-scanner'; // Assume

const BarcodeScanner = ({ onScan }) => {
  return <Scanner onDetect={onScan} />;
};

export default BarcodeScanner;
