import React from 'react';

const ImageViewer = ({ src }) => {
  return <img src={src} alt="View" className="max-w-full h-auto" />;
};

export default ImageViewer;
