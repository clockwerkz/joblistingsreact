import React from 'react';
import connect from '../utilities/connect';
import { toggleFullTime, updateLocationInput  } from '../store/actions';

import SearchBar from './SearchBar';
import Cities from './Cities';
import CheckBox from './CheckBox';

const SearchOptions = ({ cities, fullTime, toggleFullTime, toggleCity, locationText, updateLocationInput}) => {
    return (
        <aside className="search-criteria">
            <CheckBox label="Full Time"value={fullTime} toggle={toggleFullTime}/>
            <h3 className="search__subtitle">Location</h3>
            <div className="search-bar__form-input">
                <i className="material-icons">public</i>
                <SearchBar 
                    placeholder="City, state, zip code or country" 
                    inputValue={locationText}
                    updateInputValue={updateLocationInput}
                />
            </div>
            <Cities  />
        </aside>
    );
};

const mapStateToProps = (state) => ({
    fullTime : state.fullTime,
    locationText : state.locationText,
    cities : state.cities
});

const mapDispatchToProps = (dispatch) => ({
    toggleFullTime : toggleFullTime(dispatch),
    updateLocationInput : updateLocationInput(dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);