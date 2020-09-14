const prod = {
    url: {
        API_URL: 'https://jobs.github.com/positions.json?',
        }
   };
   const dev = {
    url: {
        API_URL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?'
        }
   };
   export const config = process.env.NODE_ENV === 'development' ? dev : prod;