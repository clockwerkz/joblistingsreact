import React from 'react';
import connect from '../utilities/connect';
import ReactPaginate from 'react-paginate';

import Card from './Card';

import { updatePage, fetchJobs, updateLocationInput } from '../store/actions';
const SearchResults = ({ results, start, end, updatePage, cities, locationText, updateLocationInput, searchText, fetchJobs, urlPage, searchStatus }) => {
    
    let numberOfPages = Math.ceil(results.length / 5);
    
    const handlePageCick = ({ selected }) => {
        if (selected + 1 === numberOfPages && numberOfPages % 10 === 0) {
            console.log("End of current set of pages");
            fetchJobs(cities, locationText, searchText, urlPage, false);
        }
        updatePage(selected);
    }
    
    const paginateProps = {
        pageCount : numberOfPages,
        containerClassName : 'details__pagination',
        pageLinkClassName : 'details__pagination-number',
        activeLinkClassName: 'details__pagination-number--selected',
        previousLinkClassName: 'details__pagination-prev',
        nextLinkClassName: 'details__pagination-next',
        pageRangeDisplayed : 2,
        previousLabel: '<<',
        nextLabel: '>>',
        disabledClassName: 'details__pagination--disabled',
        onPageChange : handlePageCick
    }

    let currentStatusClass;
    switch (searchStatus) {
        case "Searching...":
            currentStatusClass = <p className="search-results__status searching">Searching...</p>;
            break;
        default: 
            currentStatusClass = <p className="search-results__status">{searchStatus}</p>;
    }
    return (
        <main className="search-results">
            {results.length > 5 && <ReactPaginate {...paginateProps}/>}
            {results.length > 0 ? 
            (
                results.slice(start, end).map((card,index)=>(<Card key={card.id} {...card} index={index}/>))
            )
            :
            (currentStatusClass)}
        </main>
    )
}

const mapStateToProps = (state) => ({
    results : state.results,
    start: state.start,
    end: state.end,
    cities : state.cities,
    locationText : state.locationText,
    searchText : state.searchText,
    page : state.page,
    urlPage : state.urlPage,
    searchStatus : state.searchStatus
})

const mapDispatchToProps = (dispatch) => ({
    updatePage : updatePage(dispatch),
    fetchJobs : fetchJobs(dispatch),
    updateLocationInput : updateLocationInput(dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);