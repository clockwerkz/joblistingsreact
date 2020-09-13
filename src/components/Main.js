import React from "react";

import SearchHeader from './SearchHeader';
import SearchOptions from './SearchOptions';
import SearchResults from './SearchResults';

const Main = (props) => {
  
    return (
        <section className="search">
            <SearchHeader />
            <div className="search-body">
                <SearchOptions />
                <SearchResults />
            </div>
        </section>
    );
};


export default Main;