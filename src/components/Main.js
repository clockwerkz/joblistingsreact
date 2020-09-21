import React from "react";
import connect from '../utilities/connect';

import SearchHeader from './SearchHeader';
import SearchOptions from './SearchOptions';
import SearchResults from './SearchResults';
import Details from './Details';

import { startSearch, newData, updateData, noResults } from '../store/actions'; 
import urlBuilder from '../utilities/urlBuilder';

const Main = ({ selectedJob, startSearch, newData, updateData, noResults, cities, locationText, searchText, urlPage }) => {
    const fetchJobs = async (newSearch=true) => {
        console.log(newSearch);
        console.log(startSearch);
        startSearch();
        let url = urlBuilder(cities, locationText, searchText, urlPage);
        try {
            console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            if (newSearch) {
                if (data.length === 0) {
                    return noResults();
                }
                return newData(data);
            }
            return updateData(data);
        } catch (err) {
            console.error('Error:', err);
        }
    }

    if (selectedJob === "") {
        return (
            <section className="search">
                <SearchHeader fetchJobs={fetchJobs}/>
                <div className="search-body">
                    <SearchOptions />
                    <SearchResults fetchJobs={fetchJobs}/>
                </div>
            </section>
        );
    } else {
        return (<Details />)
    }
};

const mapDispatchToProps = (dispatch) => ({
    startSearch : startSearch(dispatch), 
    newData : newData(dispatch), 
    updateData : updateData(dispatch), 
    noResults : noResults(dispatch)
});

const mapStateToDispatch = (state) => ({
    selectedJob: state.selectedJob,
    cities : state.cities, 
    locationText : state.locationText, 
    searchText : state.searchText, 
    urlPage : state.urlPage
})

export default connect(mapStateToDispatch, mapDispatchToProps)(Main);