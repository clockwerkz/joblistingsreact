import React from 'react';

const Cities = ({ cities, toggleCity }) => {
    const cityNames = Object.keys(cities);
    return (
        <div className="search__cities">
            {cityNames.map(cityName => (
            <label key={cityName} className="search-option city">{cityName}
                <input type="checkbox" checked={cities[cityName]} onChange={()=>toggleCity(cityName)}/>
                <span className="checkmark"></span>
            </label>
            ))}

        </div>
    )
}


export default Cities;