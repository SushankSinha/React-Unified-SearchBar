import React, { useState } from 'react';
import { Input } from 'antd';
import { useSearch } from '../../context/SearchContext';
import { debounce } from 'lodash';

const { Search } = Input;

const SearchBar = () => {
  const { setSearchQuery } = useSearch();
  const [searchValue, setSearchValue] = useState('');

  // Debounce the setSearchQuery function with a delay of 500ms
  const debouncedSearch = debounce((value) => {
    setSearchQuery(value.trim());
  }, 500);

  const handleSearch = (value) => {
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Search
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default SearchBar;
