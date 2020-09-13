import React, { useContext } from "react";

import SearchBar from './SearchBar';
import Cities from './Cities';
import CheckBox from './CheckBox';
import Card from './Card';

import { MyContext } from '../store/MyContext';
import connect from '../utilities/connect';
import { updateSearchInput, updateLocationInput, toggleCity, toggleFullTime } from '../store/actions';

const Main = (props) => {
  
    const { cities, fullTime, searchText, updateSearchInput, locationText, updateLocationInput, toggleCity, toggleFullTime } = props;

    const { london } = cities;
    const searchJobs = () => {
        const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=New+York`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    }

  

    return (
        <section className="search">
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
            <div className="search-body">
                
            <aside className="search-criteria">
                <CheckBox label="Full Time"value={fullTime} toggle={toggleFullTime}/>
                <h3 className="search__subtitle">Location</h3>
                <div className="search-bar__form-input">
                    <i className="material-icons">public</i>
                    <SearchBar 
                        placeholder="City, state, zip code or country" 
                        inputValue={locationText}
                        updateInputValue={updateLocationInput}
                    />
                </div>
                <Cities cities={cities} toggleCity={toggleCity} />
            </aside>

            <main className="search-results">
                <Card />
            </main>
            </div>
        </section>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchInput : updateSearchInput(dispatch),
        updateLocationInput : updateLocationInput(dispatch),
        toggleCity : toggleCity(dispatch),
        toggleFullTime : toggleFullTime(dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);