const axios = require('axios');
let chache = {
    cashedRestaurants: null,
    Timestamp: null,
    searchedValue: null,
};

let TestCache = 1000 * 60 * 60 * 24 * 7 * 4;
//1000 is 1 sec * 1 min * 1 hour * 24 hrs * 7 days * 4 weeks
let timeNow = Date.now();







class Restaurant {
    constructor(restaurantObj) {
        this.restaurantName = restaurantObj.title
    }
}