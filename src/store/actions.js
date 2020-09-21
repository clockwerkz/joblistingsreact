import urlBuilder from '../utilities/urlBuilder';

export const updateInput = dispatch => (field, text) => dispatch({type: "UPDATE_TEXT", payload: { field, text }})

export const updateSearchInput = dispatch => text => dispatch({type: "UPDATE_SEARCH_TEXT", payload : text});

export const updateLocationInput = dispatch => text => dispatch({type: "UPDATE_LOCATION_TEXT", payload : text});
  
export const toggleCity = dispatch => city => dispatch({type: "TOGGLE_CITY", payload : city});

export const toggleFullTime = dispatch => () => dispatch({ type: "TOGGLE_FULLTIME"});

export const updateResults = dispatch => data => dispatch({type: "UPDATE_DATA", payload : data})

export const updatePage = dispatch => selected => dispatch({type : "UPDATE_PAGE", payload : selected})

export const clearJob = dispatch => () => dispatch({type: "CLEAR_JOB"});

export const selectJob = dispatch => job => dispatch({type:"SELECT_JOB", payload : job});

export const startSearch = dispatch => () => dispatch({type: "START_SEARCH"});

export const newData = dispatch => data => dispatch({type: "NEW_DATA",payload : data});

export const updateData = dispatch => data => dispatch({type: "UPDATE_DATA",payload : data});

export const noResults = dispatch => () => dispatch({type: "NO_RESULTS"});

     