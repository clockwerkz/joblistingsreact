const reducer = (state, { type, payload }) => {
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
      case "UPDATE_DATA":
        return {
          ...state,
          results: payload,
          page: 0,
          start: 0,
          end: 5
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