import React, { useReducer, createContext } from 'react';
import reducer from './reducer';


export const MyContext = createContext('');

const initialState = {
    searchText: "",
    locationText: "",
    fullTime : false,
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


    return (
        <MyContext.Provider value={{state, dispatch }}>
            { children }
        </MyContext.Provider>
    )
}

export default MyProvider;