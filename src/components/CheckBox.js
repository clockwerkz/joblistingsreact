import React from 'react';

const CheckBox = ({ label, value, toggle, cityClass=false }) => {
    return (
        <label className={cityClass ?"search-option city":"search-option"}>{label}
            <input type="checkbox" 
                checked={value}
                onChange={()=>toggle(label)}
            />
            <span className="checkmark"></span>
        </label>
    )
}

export default CheckBox;