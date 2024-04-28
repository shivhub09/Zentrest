import React, { useState } from 'react';
import axios from 'axios';
import './RegisterScreen.css';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading indication

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.password || !profilePhoto) {
      setError('All fields are required, including a profile photo.');
      return;
    }

    setIsLoading(true); // Start loading
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('password', formData.password);
      data.append('profilePhoto', profilePhoto);

      const response = await axios.post(
        'http://localhost:8080/api/v1/users/registerUser',
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

     

      if (response.status === 201) {
        setSuccessMessage(`User "${formData.name}" successfully registered!`);
        setError('');
        setFormData({ name: '', email: '', password: '' });
        setProfilePhoto(null);
      }
    } catch (err) {
      const errMessage = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(response);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="RegisterScreenContainer">
      <div className="RegisterScreenBox">
        <div className="RegisterCol1">
          <img
            src="https://i.pinimg.com/736x/eb/a6/a8/eba6a853efdbeac7a398782d08f8375b.jpg"
            alt="Welcome"
          />
        </div>
        <div className="RegisterCol2">
          <div className="RegisterScreenTitle">Register</div>
          <div className="forms">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="profile-photo-upload" className="upload-label">
              Upload Profile Photo
            </label>
            <input
              type="file"
              id="profile-photo-upload"
              onChange={handlePhotoUpload}
              accept="image/*"
            />
          </div>
          <div className="box3">
            <input
              className="RegisterBtn"
              type="button"
              value={isLoading ? 'Registering...' : 'Register!'} // Indicate loading
              onClick={handleSubmit}
              disabled={isLoading} // Disable button during submission
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
