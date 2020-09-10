import React, { useState } from 'react';

const SearchBar = ({ placeholder, initialValue="" }) => {
    const [value, setValue] = useState(initialValue);
    return (
        <input 
            type="text" 
            className="search-bar__input" 
            placeholder={placeholder} 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
        />
    )
}

export default SearchBar;