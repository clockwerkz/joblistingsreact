export const updateInput = dispatch => (field, text) => dispatch({type: "UPDATE_TEXT", payload: { field, text }})

export const updateSearchInput = dispatch => text => dispatch({type: "UPDATE_SEARCH_TEXT", payload : text});

export const updateLocationInput = dispatch => text => dispatch({type: "UPDATE_LOCATION_TEXT", payload : text});
  
export const toggleCity = dispatch => city => dispatch({type: "TOGGLE_CITY", payload : city});

export const toggleFullTime = dispatch => () => dispatch({ type: "TOGGLE_FULLTIME"});

export const updateResults = dispatch => (data) => dispatch({type: "UPDATE_DATA", payload : data})
