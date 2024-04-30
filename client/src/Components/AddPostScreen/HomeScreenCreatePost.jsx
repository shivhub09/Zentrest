import React, { useState } from 'react';
import './HomeScreenCreatePost.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const HomeScreenCreatePost = () => {
    const [postText, setPostText] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleTextChange = (e) => {
        setPostText(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handlePost = async () => {
        if (!postText && !image) {
            alert("You must enter text or upload an image to create a post.");
            return;
        }

        setLoading(true); // Show loading state while posting
        try {
            const formData = new FormData();
            formData.append("description", postText);
            formData.append("userEmail", "shivnagori2020@gmail.com");
            formData.append("isGenerated", false);
            if (image) {
                formData.append("postFile", image);
            }

            const response = await axios.post('http://localhost:8080/api/v1/users/createPostbyUser', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Post created:', response.data);
            setLoading(false);
            alert("Post created successfully!"); 
            navigate('/profile'); 
            setPostText('');
            setImage(null);
            setImagePreview(null);
        } catch (error) {
            console.error("Error creating post:", error);
            setLoading(false);
            alert("An error occurred while creating the post. Please try again.");
        }
    };








    return (
        <div className="create-post-container">
            <div className="postBox">
                <div className="imageFileLeft">
                    <input
                        type="file"
                        accept="image/*"
                        className="upload-button"
                        onChange={handleImageChange}
                    />
                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" />
                        </div>
                    )}
                </div>
                <div className="create-post-content">
                    <h1>CREATE A POST NOW !</h1>
                    <textarea
                        className="post-text"
                        placeholder="Caption it here"
                        value={postText}
                        onChange={handleTextChange}
                    ></textarea>
                    <div className="create-post-footer">
                        <button className="post-button" onClick={handlePost} disabled={loading}>
                            {loading ? "Posting..." : "POST"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreenCreatePost;
