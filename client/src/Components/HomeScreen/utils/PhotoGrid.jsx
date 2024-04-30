import React from 'react';
import './PhotoGrid.css'; 
import axios from 'axios';

const PhotoGrid = ({ photo }) => {
  const { id, src, url } = photo;  

  const likePosts = async (imageUrl) => {
    try {
      const baseUrl = 'http://localhost:8080/api/v1/users/likePost';

      const data = {
        userEmail: "shivnagori2020@gmail.com",
        imageUrl: imageUrl,
      };

      const response = await axios.post(baseUrl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      window.alert('Post successfully liked!');

    } catch (error) {
      console.error("Error liking post:", error);
      setError("Failed to like the post. Please try again.");
    }
  }

  return (
    <div key={id} className="photo-item">
      <img src={src.original} alt={`Photo ${id}`} onClick={()=>likePosts(src.original)} />  
    </div>
  );
};

export default PhotoGrid;