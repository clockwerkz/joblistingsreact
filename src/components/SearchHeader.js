import React from 'react';
import connect from '../utilities/connect';
import { updateSearchInput, fetchJobs } from '../store/actions';

import SearchBar from './SearchBar';

const SearchHeader = ({ cities, searchText, locationText, updateSearchInput, urlPage,  fetchJobs }) => {
    const searchJobs = () => {
        fetchJobs(cities, locationText, searchText, 0);
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
        fetchJobs : fetchJobs(dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        searchText : state.searchText,
        locationText : state.locationText,
        cities : state.cities,
        urlPage : state.urlPage
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);