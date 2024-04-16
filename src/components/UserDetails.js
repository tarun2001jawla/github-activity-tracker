// UserDetails.js
import React, { useState, useEffect } from 'react';
import './UserDetails.css';

const UserDetails = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserInfo({
          repos: data.public_repos,
          gists: data.public_gists,
          following: data.following,
          followers: data.followers,
        });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (username) {
      fetchUserInfo();
    }
  }, [username]);

  return (
    <div className="user-details-container">
      {userInfo && (
        <div>
          <h2>User Details</h2>
          <p>Username: <a href={`https://github.com/${username}`}>{username}</a></p>
          <p>Repos: {userInfo.repos}</p>
          <p>Gists: {userInfo.gists}</p>
          <p>Following: {userInfo.following}</p>
          <p>Followers: {userInfo.followers}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
