import React from 'react';

const ParcelCard = ({ parcel }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h3>Parcel ID: {parcel.id}</h3>
      <p>Status: {parcel.status}</p>
      <p>Destination: {parcel.destination}</p>
    </div>
  );
};

export default ParcelCard;
