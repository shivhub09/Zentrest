import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomeScreenBrowse.css'; // Ensure this file exists and is referenced correctly

const HomeScreenBrowse = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const baseUrl = 'http://localhost:8080/api/v1/posts/fetchAllPosts';
      const response = await axios.get(baseUrl);
      setPhotos(response.data.data); // Update photos state
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <span>Loading...</span>
        {/* Add a spinner or other visual loader here */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <span>Error: {error}</span>
        <button onClick={fetchPosts}>Retry</button> {/* Fixed the retry function */}
      </div>
    );
  }

  return (
    <div className="AllPostsContainer">
      <h1>BROWSE</h1>
      <div className="all-posts-grid">
        {photos.map((photo, index) => (
          <div key={index} className="post-item">
            <img src={photo.postFile} alt={`Photo ${index}`} className="post-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreenBrowse;
