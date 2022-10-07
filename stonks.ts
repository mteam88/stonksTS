const axios = require('axios')
  
// Make request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  
  // Show response data
  .then((res: { data: any }) => console.log(res.data))
  .catch((err: any) => console.log(err))