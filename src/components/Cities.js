import React from 'react';
import connect from '../utilities/connect';
import { toggleCity } from '../store/actions';

import CheckBox from './CheckBox';

const Cities = ({ cities, toggleCity, fetchJobs }) => {
    const cityNames = Object.keys(cities);
    const handleCityClick = (cityName) => {
        toggleCity(cityName);
        fetchJobs();
    };
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

const mapStateToProps = (state) => ({
    cities : state.cities
});

const mapDispatchToProps = (dispatch) => ({
    toggleCity : toggleCity(dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(Cities);