import React from 'react';
import connect from '../utilities/connect';

import Card from './Card';

const SearchResults = ({ results }) => {
    return (
        <main className="search-results">
            {results.length > 0 ? 
            (
                results.map(card=>(<Card key={card.id} {...card}/>))
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