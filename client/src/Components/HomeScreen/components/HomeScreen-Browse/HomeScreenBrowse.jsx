import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomeScreenBrowse.css';

const HomeScreenBrowse = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const baseUrl = 'http://localhost:8080/api/v1/posts/fetchAllPosts';
      const response = await axios.get(baseUrl);
      setPhotos(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setLoading(false);
    }
  };

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

      // Show an alert when the post is successfully liked
      window.alert('Post successfully liked!');

    } catch (error) {
      console.error("Error liking post:", error);
      setError("Failed to like the post. Please try again.");
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <span>Error: {error}</span>
        <button onClick={fetchPosts}>Retry</button>
      </div>
    );
  }

  return (
    <div className="AllPostsContainer">
      <h1>BROWSE</h1>
      <div className="all-posts-grid">
        {photos.map((photo, index) => (
          <div key={index} className="post-item">
            <img
              src={photo.postFile}
              alt={`Photo ${index}`}
              onClick={() => likePosts(photo.postFile)}
              className="post-image"
            />
          </div>
        ))}
      </div>
    </div>
    );
  }
export default HomeScreenBrowse;
