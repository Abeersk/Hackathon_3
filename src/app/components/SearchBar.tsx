'use client'

import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Input field change handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Search button click handler
  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  // Enter key press handler
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="px-4 py-2 w-full outline-none"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 transition duration-300"
      >
        <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
