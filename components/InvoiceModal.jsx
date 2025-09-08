import React from 'react';

const InvoiceModal = ({ isOpen, onClose, invoice }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50">
      <div className="bg-white p-4">
        <h2>Invoice</h2>
        <p>{JSON.stringify(invoice)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InvoiceModal;
