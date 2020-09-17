import { config } from '../utilities/constants';

function urlBuilder(cities, locationText, searchText, page) {
    let cityName = '';
    if (locationText!=='') {
        cityName = locationText;
    } else {
        const cityNames = Object.keys(cities);
        cityName = cityNames.reduce((saved, current) => cities[current] ? current : saved, '');
    }
    let url = config.url.API_URL;
    if (cityName!=='') {
        url+=`location=${cityName}`
    }
    if (searchText !== '') {
        url+=`&search=${searchText}`
    }
    url+=`&page=${page}`
    return url;
}

export default urlBuilder;