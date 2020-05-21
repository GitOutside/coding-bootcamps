'use strict';


var today = new Date();
var hourNow = today.getHours(); 
var greeting;
var userName = prompt('What is your name?')

if (hourNow > 18) {
  greeting = 'Good evening,'  + userName;
} else if (hourNow > 12) {
  greeting = 'Good afternoon,'  + userName; 
} else if (hourNow >= 0) {
  greeting = 'Good morning,'  + userName;
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');


var day = prompt('Do you think you might want to code?')

if (day = 'Yes') {
    message = 'Let the coding begin' + userName;
} else if (day = 'No') {
    message = 'Are you sure' + userName ?;
}