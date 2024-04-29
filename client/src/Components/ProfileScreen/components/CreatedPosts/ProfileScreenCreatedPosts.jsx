import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileScreenCreatedPosts.css';

const ProfileScreenCreatedPosts = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCreatedPosts = async () => {
    try {
      const baseURL = 'http://localhost:8080/api/v1/users/fetchAllPostCreatedByUser';
      const requestBody = {
        email: 'shivnagori2020@gmail.com', // The data to be sent in the body
      };

      const response = await axios.post(baseURL, requestBody);
      setPhotos(response.data.data); // Set photos in state
      setLoading(false); // Mark loading as complete
    } catch (err) {
      setError(err.message); // Store the error message
      setLoading(false); // Stop the loading
    }
  };

  useEffect(() => {
    fetchCreatedPosts();
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
        <button onClick={fetchCreatedPosts}>Retry</button>
      </div>
    );
  }

  return (

    <div className="LikedPostsContainer">
      <h1>CREATED POSTS</h1>
      <div className="created-posts-grid">
        {photos.map((photo, index) => (
          <div key={index} className="post-item">
            <img src={photo.postFile} alt={`Photo ${index}`} className="post-image" />
          </div>
        ))}
      </div>
    </div>

  );
};

export default ProfileScreenCreatedPosts;
