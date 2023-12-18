
const axios = require('axios').default;
axios.get('https://air-transportation-render-api.onrender.com/aviation_personnel/')
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
