import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="font-bold">{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
