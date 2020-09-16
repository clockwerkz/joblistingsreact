import React from "react";
import connect from '../utilities/connect';

import SearchHeader from './SearchHeader';
import SearchOptions from './SearchOptions';
import SearchResults from './SearchResults';
import Details from './Details';

const Main = ({ selectedJob }) => {
    if (selectedJob === -1) {
        return (
            <section className="search">
                <SearchHeader />
                <div className="search-body">
                    <SearchOptions />
                    <SearchResults />
                </div>
            </section>
        );
    } else {
        return (<Details />)
    }
};


const mapStateToDispatch = (state) => ({
    selectedJob: state.selectedJob
})

export default connect(mapStateToDispatch)(Main);