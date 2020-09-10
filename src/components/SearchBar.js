import React from 'react';

const SearchBar = ({ placeholder, inputValue, updateInputValue }) => {
    return (
        <input 
            type="text" 
            className="search-bar__input" 
            placeholder={placeholder} 
            value={inputValue}
            onChange={(e)=> updateInputValue(e.target.value)}
        />
    )
}

export default SearchBar;