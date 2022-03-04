// this is a script that creates the information about the planet and displays it when we press the planet
let newName = document.querySelector('.name');
let newLatinName = document.querySelector('.latinname');
let newDesc = document.querySelector('.desc');
let newCircum = document.querySelector('.circum');
let newDistance = document.querySelector('.distance');
let newMaxTemp = document.querySelector('.max-temp');
let newMinTemp = document.querySelector('.min-temp');
let newMoons= document.querySelector('.moons');
let showInfo = document.querySelector('#show-info');
let planetHover = document.querySelectorAll('.planet');
let currentPlanet = document.querySelector('current-planet');

import { toggleBtn,  } from "./showInfo.js";

export function displayBodies(bodies){

    
    document.querySelectorAll('.planet').forEach(item =>{

        
        

        item.addEventListener('click',event =>{

             console.log('du tryckte på', item.className);

            for (let i = 0; i < bodies.length; i++) {
                
               if (item.className.includes(bodies[i].name)) {
                    //currentPlanet.innerHTML = bodies[i].name;                   
                    newName.innerHTML = bodies[i].name;
                    newLatinName.innerHTML = bodies[i].latinName;
                    newDesc.innerHTML = bodies[i].desc;
                    newCircum.innerHTML = 'OMKRETS' + '<br>' + bodies[i].circumference;
                    newDistance.innerHTML = 'KM FRÅN SOLEN' + '<br>' + bodies[i].distance;
                    newMaxTemp.innerHTML = 'MAX TEMPERATUR' + '<br>' + bodies[i].temp.day;
                    newMinTemp.innerHTML = 'MIN TEMPERATUR' + '<br>' + bodies[i].temp.night;
                    newMoons.innerHTML = 'MÅNAR' + '<br>' + bodies[i].moons;
                    showInfo.style.display = 'block';
                }; 
            };   
        });
    });
    
};

