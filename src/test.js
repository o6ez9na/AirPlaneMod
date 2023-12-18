
const axios = require('axios').default;

axios.get('https://air-transportation-render-api.onrender.com/aviation_personnel/')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
