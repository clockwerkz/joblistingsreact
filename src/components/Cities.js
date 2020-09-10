import React from 'react';
import CheckBox from './CheckBox';

const Cities = ({ cities, toggleCity }) => {
    const cityNames = Object.keys(cities);
    return (
        <div className="search__cities">
            {cityNames.map(cityName => (
            <CheckBox 
                cityClass={true}
                key={cityName} 
                label={cityName} 
                value={cities[cityName]}
                toggle={toggleCity} 
            />))}
        </div>
    )
}


export default Cities;