//Fetch API calling
/* What we will learn:
    - It replaces XMLHttpRequest
    - fetch() - can call in 2 ways - then, async await
    - fetch() - return promise
*/

console.clear();

// Fetch API calling - Way 1 (then)
// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//         }),
//         headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         },
//     }) // Fetch API is used to get the data from the server. It takes two parameters. 1st is the URL and 2nd is the method. By default, the method is GET.
//     .then((res) => {
//             if (!res.ok) {
//                 const message = `An error has occured: ${res.status}`;
//                 throw new Error(`Error : ${res.status}`); // If error occurs then it will throw my custom error message.
//             }
//             return res.json();
//         }) // To get the data response have to convert into json format.
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Fetch API calling - Way 2 (async await)
//get
const makeRequest = async (url) => { //by this props we can use url
    const res = await fetch(url);
    if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(`Error : ${res.status}`);
    }

    const data = await res.json();
    return data;
};

const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res));
};
getData();



//send
const makeRequestSend = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }
    return res.json(); // ✅ Parse JSON once
};

const sendData = async () => { // ✅ Make sendData async
    try {
        const response = await makeRequestSend('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        console.log(response); // ✅ No need for response.json() again
    } catch (error) {
        console.error(error.message);
    }
};

sendData();
