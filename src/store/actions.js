export const updateSearchInput = dispatch => text => dispatch({type: "UPDATE_SEARCH_TEXT", payload : text});

export const updateLocationInput = dispatch => text => dispatch({type: "UPDATE_LOCATION_TEXT", payload : text});
  
export const toggleCity = dispatch => city => dispatch({type: "TOGGLE_CITY", payload : city});

export const toggleFullTime = dispatch => () => dispatch({ type: "TOGGLE_FULLTIME"});