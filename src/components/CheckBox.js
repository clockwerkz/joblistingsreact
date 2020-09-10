import React from 'react';

const CheckBox = ({ label, value, toggle }) => {
    return (
        <label className="search-option">{label}
            <input type="checkbox" 
                checked={value}
                onChange={()=>toggle(label)}
            />
            <span className="checkmark"></span>
        </label>
    )
}

export default CheckBox;