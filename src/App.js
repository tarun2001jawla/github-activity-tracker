import React, { useState } from 'react';
import HomePage from './components/HomePage';
import './index.css';
function App() {
  // State for storing search query
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState('');

  // Handler function for updating search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <HomePage onSearch={handleSearch} />
    </div>
  );
}

export default App;
