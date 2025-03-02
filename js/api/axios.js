//Axios API calling
/* What we will learn:
    - axios is a js library
    - it helps to make request from browser(plain js/Vue/React/Node.js/Angular)
    - best for modern browser
    - return promise
    -axios returns response object - data, status, statusText. header,config
*/

console.clear();
//get method
 

//post method
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
  }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then((response) => console.log(response.data)) 
  .catch((error) => console.error('Error:', error));
  


//get function
  const makeRequest = async (url) => { //by this props we can use url
    return await axios(config);
};

const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => console.log(data));
};
getData();