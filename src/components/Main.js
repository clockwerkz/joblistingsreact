import React, { useEffect } from "react";
import connect from '../utilities/connect';

import SearchHeader from './SearchHeader';
import SearchOptions from './SearchOptions';
import SearchResults from './SearchResults';
import Details from './Details';

const Main = ({ selectedJob }) => {
    useEffect(()=>{
        const geo = navigator.geolocation;
        if (geo) {
            geo.getCurrentPosition((geo)=>{
                console.log(geo.coords);
                const lat = geo.coords.latitude;
                const lng = geo.coords.longitude;
                //updateLocationInput({lat, lng});
            });
        }
    }, [])

    if (selectedJob === "") {
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