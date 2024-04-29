import React, { useState } from 'react';
import './HomeScreenCreatePost.css';

const HomeScreenCreatePost = () => {
    const [postText, setPostText] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

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

    const handlePost = () => {
        console.log('Post content:', postText);
        if (image) {
            console.log('Uploaded image:', image);
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
                        <button className="post-button" onClick={handlePost}>
                            POST
                        </button>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default HomeScreenCreatePost;
