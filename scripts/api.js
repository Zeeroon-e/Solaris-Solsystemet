// this module is where we get our api key and data info from

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/';
// get api key
export async function getApiKey(){
    const KEY_URL = BASE_URL + 'keys';
    const response = await fetch(KEY_URL, {
        method: 'POST'
    });
   const data = await response.json();
   console.log(data.key);
   getBodies(data.key);
   
}
// access the api with a new key for each request, and store the data from the api
 export async function getBodies(dataKey){
    const BODIES_URL = BASE_URL + 'bodies';
    const response = await fetch(BODIES_URL, {
        method: 'GET',
        headers: {'x-zocom': dataKey}
    });
    

   const data = await response.json();
   // sends the data from the api to displaybodies function
   displayBodies(data.bodies);
}


import { displayBodies } from "./displayBodies.js";