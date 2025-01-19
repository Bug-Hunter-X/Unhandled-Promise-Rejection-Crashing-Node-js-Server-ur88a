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

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  // Perform any necessary cleanup or logging here
});

//Unhandled Promise Rejection
const promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    // Reject with an error
    reject(new Error('Something went wrong'));
  }, 2000);
});

promise.catch(error => {
    console.error('Promise rejection handled:', error);
});