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
          fullTime : !state.fullTime
        }
      case "TOGGLE_CITY":
        let currentCitySelection = state.cities[payload];
        let cities = { ...state.cities };
        for (let city in cities) {
          cities[city] = false;
        }
        cities[payload] = !currentCitySelection;
        return {
          ...state,
            cities
        }
      default:
        return state;
    }
  };

  export default reducer;