import React, { useEffect } from 'react';
import connect from '../utilities/connect';
import ReactPaginate from 'react-paginate';

import Card from './Card';

import { updatePage } from '../store/actions';

const SearchResults = ({ results, start, end, updatePage }) => {
    
    let numberOfPages = Math.ceil(results.length / 5);
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
        onPageChange : updatePage
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <main className="search-results">
            {results.length > 5 && <ReactPaginate {...paginateProps}/>}
            {results.length > 0 ? 
            (
                results.slice(start, end).map((card,index)=>(<Card key={card.id} {...card} index={index}/>))
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

const mapDispatchToProps = (dispatch) => ({
    updatePage : updatePage(dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);