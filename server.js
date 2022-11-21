// 'use strict';


// console.log('our first server');

// const { request } = require('express');
// //'require' instead of 'import'
// // once we 'require' something it must be used
// const express = require('express');
// const weather = require('./data/weather.json')


// //bring in the .env file using 'npm i dotenv'
// require('dotenv').config();

// //we must include cors if we want to share resources over the web
// const cors = require('cors');

// //routes
// const app = express();
// app.use(cors());
// //define the PORT and validate that the .env file works
// const PORT = process.env.PORT || 3002;

// //if we see our server running on 3002, it means there is a problem with the .env file or how we are importing it. 

// // ROUTES
// //where we will write handlers for our endpoints
// //app.get() correlates to axios.get()
// //app.get() takes in a parament or url in quotes, and a callback function

// // app.get('/weather', (request, response)=>{
// // let cityName = request.query.city_name;

// // let selectedCity = weather.find(city => city.city_name === cityName);
// // console.log(selectedCity);



// // let weatherArr = selectedCity.data.map(day => new Forcast(day));


// // // let filterCity = new City(selectedCity);
// // // let cityForcast = new Forcast(selectedCity);
// // response.send(weatherArr);
// // });



// // '*' wildcard
// // this will run for any route not defined above
// app.get('*', (request, response) => {
//     response.send('that route does not exsist')
// });


// class City {
//     constructor(cityObject) {
//         this.lat = cityObject.lat;
//         this.lon = cityObject.lon;
//         this.city = cityObject.city_name;

//     }
// }

// class Forcast {
//     constructor(cityObject) {
//         this.date = cityObject.datetime;
//         this.description = cityObject.weather.description;
//     }
// }


// //error handlers

// //start the server

// //listen is an express method. It brings in a PORT value and a callback method.
// app.listen(PORT, () => console.log(`listening on port ${PORT}`));




'use strict';

console.log('our first server');


const express = require('express');
require('dotenv').config();
const cors = require('cors');

var weather = require('./weather.js');
var movies = require('./movies.js');


const app = express();
const PORT=process.env.PORT || 3002;
app.use(cors());




app.get('/weather', weather);
app.get('/movie', movies);


app.get('/', (request, response) => {
  response.send('Hello, from our server');
});


app.get('*', (request, response) => {
  response.send('That route does not exist');
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
