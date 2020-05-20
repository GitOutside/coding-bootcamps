'use strict';

var userName = prompt('What is your name?');


document.write('<h3> 'Hello' + userName </h3>');

var today = new Date();
var hourNow = today.getHours(); 
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening, + userName!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon, + userName!'; 
} else if (hourNow >= 0) {
  greeting = 'Good morning, user';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');