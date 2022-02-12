// Importing library
const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
// Headers object
//const headers = { 'userID': "1234" };
// Creating a new form data
var bodyFormData = new FormData();
// Appending info to body form data
//await bodyFormData.append('processID', "1234");
bodyFormData.append('file', fs.createReadStream("u.png"), "u.png"); 
//URL
const url = 'http://127.0.0.1:80/predict';
// POST request
let results = axios.post(url, bodyFormData);
// Showing results
console.log(results.json);