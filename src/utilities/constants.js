const prod = {
    url: {
        API_URL: 'https://young-thicket-65531.herokuapp.com/https://jobs.github.com/positions.json?',
        }
   };
   const dev = {
    url: {
        API_URL: 'https://young-thicket-65531.herokuapp.com/https://jobs.github.com/positions.json?'
        }
   };
   export const config = process.env.NODE_ENV === 'development' ? dev : prod;