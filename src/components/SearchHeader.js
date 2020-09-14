import React from 'react';
import connect from '../utilities/connect';
import { updateSearchInput, updateResults } from '../store/actions';
import { config } from '../utilities/constants';

import SearchBar from './SearchBar';

const SearchHeader = ({ cities, searchText, locationText, updateSearchInput, updateResults }) => {
    const searchJobs = () => {
        let cityName = '';
        console.log("Searching...");
        if (locationText!=='') {
            cityName = locationText;
        } else {
            const cityNames = Object.keys(cities);
            cityName = cityNames.reduce((saved, current) => cities[current] ? current : saved, '');
        }
        let url = config.url.API_URL;
        if (cityName!=='') {
            url+=`location=${cityName}`
        }
        fetch(url)
        .then(res => res.json())
        .then(data => updateResults(data));
    }

    return (
        <div className="search-bar">
            <div className="search-bar__form-input">
                <i className="material-icons">work_outline</i>
                <SearchBar 
                placeholder="Title, companies, expertise or benefits" 
                inputValue={searchText}
                updateInputValue={updateSearchInput}
                />
                <button className="btn" onClick={searchJobs}>Search</button>
            </div> 
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchInput : updateSearchInput(dispatch),
        updateResults : updateResults(dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        searchText : state.searchText,
        locationText : state.locationText,
        cities : state.cities
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);