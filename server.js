'use strict';


console.log('our first server');

const { request } = require('express');
//'require' instead of 'import'
// once we 'require' something it must be used
const express = require('express');

//bring in the .env file using 'npm i dotenv'
require('dotenv').config();

//routes
const app = express();

//define the PORT and validate that the .env file works
const PORT = process.env.PORT || 3002;

//if we see our server running on 3002, it means there is a problem with the .env file or how we are importing it. 

// ROUTES
//where we will write handlers for our endpoints
//app.get() correlates to axios.get()
//app.get() takes in a parament or url in quotes, and a callback function

app.get('/', (request, response)=>{
    response.send('hello from our server');
});

app.get('/sayHello', (request, response)=> {
    console.log(request.query.name);
    response.send(`Hi ${request.query.name}`);
    
})

// '*' wildcard
// this will run for any route not defined above
app.get('*', (request, response)=> {
    response.send('that route does not exsist')
});

//error handlers

//start the server

//listen is an express method. It brings in a PORT value and a callback method.
app.listen(PORT, () => console.log(`listening on port ${PORT}`));