import React from 'react';
import connect from '../utilities/connect';
import { Link } from 'react-router-dom';

import Card from './Card';

const SearchResults = ({ results }) => {
    return (
        <main className="search-results">
            {results.length > 0 ? 
            (
                results.map(card=>(<Link to={card.id} key={card.id}><Card {...card}/></Link>))
            )
            :
            (<p>Search for jobs</p>)}
            
        </main>
    )
}

const mapStateToProps = (state) => ({
    results : state.results
})


export default connect(mapStateToProps)(SearchResults);