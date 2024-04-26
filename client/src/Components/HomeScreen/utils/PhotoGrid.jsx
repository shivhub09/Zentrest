import React from 'react';
import './PhotoGrid.css'; // Assuming you have a CSS file for your component

const PhotoGrid = ({ photo }) => {
  const { id, src, url } = photo;  // Destructure to access necessary properties

  return (
    <div key={id} className="photo-item">
        <img src={src.original} alt={`Photo ${id}`} />  {/* Include alt attribute for accessibility */}
      </div>
  );
};

export default PhotoGrid;