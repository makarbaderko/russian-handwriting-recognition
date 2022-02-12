// Importing library
const FormData = require('form-data');
// Headers object
//const headers = { 'userID': "1234" };
// Creating a new form data
var bodyFormData = new FormData();
// Appending info to body form data
await bodyFormData.append('processID', "1234");
await bodyFormData.append('file', fs.createReadStream("files/data.zip"), "data.zip"); 
//URL
const url = 'localhost:8080/api/Extension/deploy';
// POST request
let results = await axios.post(url, body, { headers });
// Showing results
console.log(results);