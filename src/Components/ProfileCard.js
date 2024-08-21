import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="container">
      <div className="card profile-card shadow p-3 mb-5 bg-white rounded">
        <div className="card-body text-center">
          <FaUserCircle size={100} className="profile-icon mb-3" />
          <h5 className="card-title">Alpha Pandey</h5>
          <div className="profile-details">
            <p className="card-text">CSE : 22BCS007</p>
            <p className="card-text">B.tech : 2022</p>
            <p className="card-text">Semester : V</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
