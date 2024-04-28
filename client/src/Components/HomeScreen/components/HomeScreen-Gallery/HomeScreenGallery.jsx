import  { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoGrid from '../../utils/PhotoGrid';

import './HomeScreenGallery.css';

const HomeScreenGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const baseURL = 'https://api.pexels.com/v1/search';
        const params = {
          query: 'aesthetic',
          per_page: 8, 
        };
  
        const response = await axios.get(baseURL, {
          params,
          headers: {
            Authorization: 'rg2pNkU0M58S7Un8IqRibGcXo9ZI66ZDrONw0dkzSbIGkffwaTxjHPfD', // Replace with your Pexels API key
          },
        });
  
        setPhotos(response.data.photos); // Set photos in state
        setLoading(false); // Mark loading as complete
      } catch (err) {
        setError(err.message); // Store the error message
        setLoading(false); // Stop the loading
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div className="galleryContainer">
        <div className="photo-grid">
          {photos.map((photo) => (
            <PhotoGrid key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
}

export default HomeScreenGallery
