import React, { useContext } from "react";

import SearchBar from './SearchBar';
import Cities from './Cities';
import CheckBox from './CheckBox';
import Card from './Card';

import { MyContext } from '../store/MyContext';

const Main = () => {
  
  const searchJobs = () => {
    const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=New+York`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
  }

  //const { london } = state.cities;

  return (
    <MyContext.Consumer>
        {({state, updateSearchInput, updateLocationInput, toggleCity, toggleFullTime})=>(
            <section className="search">
                <div className="search-bar">
                    <div className="search-bar__form-input">
                        <i className="material-icons">work_outline</i>
                        <SearchBar 
                        placeholder="Title, companies, expertise or benefits" 
                        inputValue={state.searchText}
                        updateInputValue={updateSearchInput}
                        />
                        <button className="btn" onClick={searchJobs}>Search</button>
                    </div> 
                </div>
                <div className="search-body">
                    
                <aside className="search-criteria">
                    <CheckBox label="Full Time"value={state["Full Time"]} toggle={toggleFullTime}/>
                    <h3 className="search__subtitle">Location</h3>
                    <div className="search-bar__form-input">
                        <i className="material-icons">public</i>
                        <SearchBar 
                            placeholder="City, state, zip code or country" 
                            inputValue={state.locationText}
                            updateInputValue={updateLocationInput}
                        />
                    </div>
                    <Cities cities={state.cities} toggleCity={toggleCity} />
                </aside>

                <main className="search-results">
                    <Card />
                </main>
                </div>
            </section>
        )}
    </MyContext.Consumer>
  );
};


export default Main;