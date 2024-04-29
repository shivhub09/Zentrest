import React, { useState } from 'react';
import './ProfileScreen.css';
import ProfileScreenCreatedPosts from './components/CreatedPosts/ProfileScreenCreatedPosts';
import ProfileScreenLikedPosts from './components/LikedPosts/ProfileScreenLikedPosts';

const ProfileScreen = () => {

  const [activeTab, setActiveTab] = useState('liked');

  return (
    <div className="profile-screen">
      <div className="profileStatic">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_lL_J90lHdpIm-4sQr9xM7eFXBfir0vyt8GNsnO3wQ&s" alt="" srcset="" />
        <h1>SHIVAM NAGORI</h1>
        <p>An enthusiastic person for new images and pictures from all over the world</p>
      </div>

      {/* Dynamic Profile Part */}
      <div className="profileDynamic">
        {/* Navigation buttons to switch content */}
        <div className="profileButtons">
          <button onClick={() => setActiveTab('liked')}>Liked Posts</button>
          <button onClick={() => setActiveTab('created')}>Created Posts</button>
        </div>

        {/* Conditional rendering based on activeTab */}
        {activeTab === 'liked' && <ProfileScreenLikedPosts></ProfileScreenLikedPosts>}
        {activeTab === 'created' && <ProfileScreenCreatedPosts></ProfileScreenCreatedPosts>}
      </div>
    </div>
  );
};

export default ProfileScreen;
