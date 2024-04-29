import React from 'react';
import './PhotoGrid.css'; 

const PhotoGrid = ({ photo }) => {
  const { id, src, url } = photo;  

  return (
    <div key={id} className="photo-item">
      <img src={src.original} alt={`Photo ${id}`} />  
      <input type="button" value="🩷" />
    </div>
  );
};

export default PhotoGrid;