const reducer = (state, { type, payload }) => {
  let cities;
    switch (type) {
      case "UPDATE_TEXT":
        const { field, text } = payload;
        return {
          ...state,
          [field] : text
        }
      case "UPDATE_SEARCH_TEXT":
        return {
          ...state,
          searchText : payload
        };
      case "UPDATE_LOCATION_TEXT":
        cities = { ...state.cities };
        for (let city in cities) {
          cities[city] = false;
        }
        return {
          ...state,
          cities,
          locationText: payload
        };
      case "TOGGLE_FULLTIME":
        return {
          ...state,
          fullTime : !state.fullTime
        }
      case "TOGGLE_CITY":
        let currentCitySelection = state.cities[payload];
        cities = { ...state.cities };
        for (let city in cities) {
          cities[city] = false;
        }
        cities[payload] = !currentCitySelection;
        return {
          ...state,
            cities,
            locationText : ''
        }
      case "SELECT_JOB":
        return {
          ...state,
          selectedJob : payload
        }
      case "CLEAR_JOB":
        return {
          ...state,
          selectedJob : ""
        }
      case "START_SEARCH":
        return {
          ...state,
          results: [],
          searchStatus: "Searching..."
        }
      case "NO_RESULTS":
        return {
          ...state,
          results: [],
          searchStatus: "No Results Found"
        }
      case "NEW_DATA":
        return {
          ...state,
          results: payload,
          page: 0,
          start: 0,
          end: 5,
          urlPage : 1
        }
      case "UPDATE_DATA":
        return {
          ...state,
          results : state.results.concat(payload),
          urlPage : state.urlPage + 1
        }
      case "UPDATE_PAGE":
        let page = payload;
        let start = page * 5;
        let end = start + 5;
        return {
          ...state,
          page,
          start,
          end
        }
      default:
        return state;
    }
  };

  export default reducer;