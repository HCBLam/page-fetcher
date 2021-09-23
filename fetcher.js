const request = require('request');
const fs = require("fs");


// Implement a node app
// It should take 2 command line arguments:  1) a URL;  2) a local file path
// It should download the resource at the URL to the local path
// Upon completion, it should print out a message like:  'Downloaded and saved 1235 bytes to ./index.html

// We need to make an HTTP request and wait for a response
  // w02d03's lesson on Using request Library has a model of how to make an HTTP request

// After the HTTP request is complete, need to take the received data and write it to a local file
  // w02d01's lesson on Intro to Async Control Flow has a model of how to use fs.writeFile

// File size:  1 character is equal to 1 byte


const args = process.argv.splice(2);
const url = args[0];
const local = args[1];


request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the webpage.

  fs.writeFile(local, body, (error) => {
    if (error) {
      console.log('Failed to write to file');
      return;
    }
    console.log('Downloaded and saved ' + body.length + ` bytes to ${local}.`);
  });
});












