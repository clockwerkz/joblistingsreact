import React from 'react';
import connect from '../utilities/connect';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import Card from './Card';

const SearchResults = ({ results, start, end }) => {
    const handlePaginationClick = (output) => console.log(output);
    const paginateProps = {
        pageCount : 7,
        containerClassName : 'details__pagination',
        pageClassName : 'details__pagination-number',
        pageRangeDisplayed : 2,
        onPageChange : handlePaginationClick
    }
    return (
        <main className="search-results">
            <ReactPaginate {...paginateProps}/>
            {results.length > 0 ? 
            (
                results.slice(start, end).map(card=>(<Link to={card.id} key={card.id}><Card {...card}/></Link>))
            )
            :
            (<p>Search for jobs</p>)}
            
        </main>
    )
}

const mapStateToProps = (state) => ({
    results : state.results,
    start: state.start,
    end: state.end,
    page: state.page
})


export default connect(mapStateToProps)(SearchResults);