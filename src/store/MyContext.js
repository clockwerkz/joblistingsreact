import React, { useReducer, createContext } from 'react';
import reducer from './reducer';


export const MyContext = createContext('');

const initialState = {
    searchStatus: "Search for jobs using the provided options",
    searchText: "",
    selectedJob: "",
    locationText: "",
    fullTime : false,
    cities : {
      "London": false,
      "Amsterdam" : false,
      "New York" : false,
      "Berlin" : false
    },
    start: 0,
    end: 5,
    page: 1,
    results: [],
    urlPage : 0
};

const MyProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <MyContext.Provider value={{state, dispatch }}>
            { children }
        </MyContext.Provider>
    )
}

export default MyProvider;