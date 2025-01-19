const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// In another file or after the above code:

// Unhandled Promise Rejection
const promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    // Reject with an error
    reject(new Error('Something went wrong'));
  }, 2000);
});

promise.catch(error => {
    console.error('Unhandled promise rejection:', error);
});

//The above code doesn't handle errors from async operations. It will still terminate the server