import React from 'react';
import connect from '../utilities/connect';
import { updateSearchInput } from '../store/actions';

import SearchBar from './SearchBar';

const SearchHeader = ({ searchText, updateSearchInput, fetchJobs }) => {
    const searchJobs = () => {
        fetchJobs();
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
        updateSearchInput : updateSearchInput(dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        searchText : state.searchText,
        urlPage : state.urlPage
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);