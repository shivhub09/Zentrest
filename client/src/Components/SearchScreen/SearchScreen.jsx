import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoGrid from '../HomeScreen/utils/PhotoGrid';
import './SearchScreen.css';

const SearchScreen = () => {
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const baseURL = 'https://api.pexels.com/v1/search';
            const params = {
                query: searchQuery,
                per_page: 8,
            };

            const response = await axios.get(baseURL, {
                params,
                headers: {
                    Authorization: 'rg2pNkU0M58S7Un8IqRibGcXo9ZI66ZDrONw0dkzSbIGkffwaTxjHPfD',
                },
            });

            setPhotos(response.data.photos);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
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
        <>
            <h1 className="SearchTitle">You Searched For : {searchQuery}</h1>

            <div className="searchGalleryContainer">
                <div className="photo-grid">
                    {photos.map((photo) => (
                        <PhotoGrid key={photo.id} photo={photo} />
                    ))}
                </div>
            </div>

        </>
    );
};

export default SearchScreen;
