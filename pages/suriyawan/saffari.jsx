import React from 'react';
import ProductCard from '../../components/ProductCard';

const Saffari = () => {
  const products = [{ name: 'Product1', price: 100, image: '/img.jpg' }];
  return products.map(p => <ProductCard key={p.name} product={p} />);
};

export default Saffari;
