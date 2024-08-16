// Read the theory from here
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
// https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

//Promise 
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
//   // fetch() returns a Promise that resolves to a Response object.
//   console.log(fetchPromise); //Pending Promise that means fetch operation is going on.
  
//   fetchPromise.then((response) => {
//     //This arrow function is the callback to be executed when promise gets resolved.
//     console.log(fetchPromise);
//     console.log(`Received response: ${response.status}`);
//   });
  
//   console.log("Started request…");


  
// Chaining Promises
// With the fetch() API, once we get a Response object, we need to call another function to get the response data.
// Say we want the data as JSON, We call the json method provided by the Response object. 
// json() is also asynchronous
// So here we call 2 successive async functions.

const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

// fetchPromise2.then((response) =>{
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data[0].name);
//     });
// });

// Hey!! The above is similar as Callback inside callback only with then() calls.
// Let's chain the then() calls
// then() method provided by Promise itself returns a promise, which will be completed with the result of the function passed to it. 

// Promise Chaining
// fetchPromise2
// .then((response) => response.json())//Returns the promise returned by json()
// .then((data) => {
//     console.log(data[0].name);
// });

//Well Now We need to check that response before we try to read it

fetchPromise2
.then((response) => {
    //Whether the response was successful (state 200-299)
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log(data[0].name);
});

// To support error handling, Promise objects provide a catch() method. 
// If you add catch() to the end of a promise chain, then it will be called when any of the asynchronous function calls fail. So you can implement an operation as several consecutive asynchronous function calls, and have a single place to handle all errors.

const fetchPromise3 = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise3
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });
  






