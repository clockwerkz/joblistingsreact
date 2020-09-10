import React, { useReducer, useState } from "react";
import "./sass/main.scss";

import SearchBar from './components/SearchBar';
import Cities from './components/Cities';
import CheckBox from './components/CheckBox';
import Card from './components/Card';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_SEARCH_TEXT":
      return {
        ...state,
        searchText : payload
      };
    case "UPDATE_LOCATION_TEXT":
      return {
        ...state,
        locationText: payload
      };
    case "TOGGLE_FULLTIME":
      return {
        ...state,
        ["Full Time"] : !state["Full Time"]
      }
    case "TOGGLE_CITY":
      let cities = {
        ...state.cities,
        [payload] : !state.cities[payload]
      }
      return {
        ...state,
          cities
      }
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    searchText: "",
    locationText: "",
    "Full Time" : false,
    cities : {
      "London": false,
      "Amsterdam" : false,
      "New York" : false,
      "Berlin" : false
    },
    results: []
  });

  const updateSearchInput = (text) => dispatch({type: "UPDATE_SEARCH_TEXT", payload : text});

  const updateLocationInput = (text) => dispatch({type: "UPDATE_LOCATION_TEXT", payload : text});

  const toggleCity = (city) => dispatch({type: "TOGGLE_CITY", payload : city});

  const toggleFullTime = () => dispatch({ type: "TOGGLE_FULLTIME"});

  const { london } = state.cities;
  return (
    <section className="search">
        <div className="search-bar">
            <div className="search-bar__form-input">
                <i className="material-icons">work_outline</i>
                <SearchBar 
                  placeholder="Title, companies, expertise or benefits" 
                  inputValue={state.searchText}
                  updateInputValue={updateSearchInput}
                />
                <button className="btn">Search</button>
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
  );
};

export default App;
