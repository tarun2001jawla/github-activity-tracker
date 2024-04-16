// HomePage.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ActivityFeed from './ActivityFeed';
import UserDetails from './UserDetails'; 
import logo from './Git_icon.svg.png';
import '../index.css';

const HomePage = () => {
  const [username, setUsername] = useState('');

  const handleSearch = (searchValue) => {
    setUsername(searchValue);
  };

  return (
    <div className="container">
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="website-name">GitStream</h1>
        </div>
      </header>
      <h2>GitHub Activity of {username}</h2>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <UserDetails username={username} />
      <ActivityFeed username={username} />
      <div className="made-by">
        <p className='dev-by-text'>Developed By - <a href='https://github.com/tarun2001jawla'>Tarun Jawla</a></p>
      </div>
    </div>
  );
};

export default HomePage;
