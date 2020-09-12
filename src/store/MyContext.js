import React, { useReducer, createContext } from 'react';
import reducer from './reducer';


export const MyContext = createContext('');

const initialState = {
    searchText: "",
    locationText: "",
    "Full Time" : false,
    cities : {
      "London": false,
      "Amsterdam" : false,
      "New York" : false,
      "Berlin" : false
    },
    page: 0,
    results: []
};

const MyProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateSearchInput =  text => dispatch({type: "UPDATE_SEARCH_TEXT", payload : text});

    const updateLocationInput = (text) => dispatch({type: "UPDATE_LOCATION_TEXT", payload : text});
  
    const toggleCity = (city) => dispatch({type: "TOGGLE_CITY", payload : city});
  
    const toggleFullTime = () => dispatch({ type: "TOGGLE_FULLTIME"});

    return (
        <MyContext.Provider value={{state, updateSearchInput, updateLocationInput, toggleCity, toggleFullTime}}>
            { children }
        </MyContext.Provider>
    )
}

export default MyProvider;