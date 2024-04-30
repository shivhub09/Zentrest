import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileScreenLikedPosts.css';

const ProfileScreenLikedPosts = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLikedPosts = async () => {
    try {
      const baseURL = 'http://localhost:8080/api/v1/users/fetchLikedPostsByUser';
      const requestBody = {
        email: 'shivnagori2020@gmail.com', 
      };

      const response = await axios.post(baseURL, requestBody);
      setPhotos(response.data.data); 
      setLoading(false); 
    } catch (err) {
      setError(err.message); 
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchLikedPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <span>Loading...</span>
        {/* Placeholder for a spinner or a visual loader */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <span>Error: {error}</span>
        {/* Retry button to try fetching data again */}
        <button onClick={fetchLikedPosts}>Retry</button>
      </div>
    );
  }

  return (
    <div className="LikedPostsContainer">
      <h1>LIKED POSTS</h1>
      <div className="liked-posts-grid">
      {photos.map((photo, index) => (
        <div key={index} className="post-item">
          <img src={photo.imageUrl} alt={`Photo ${index}`} className="post-image" />
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProfileScreenLikedPosts
