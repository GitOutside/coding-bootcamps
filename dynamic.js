'use strict';

var userName = askName();
var greeting;
var hourNow = getTime();


function askName(){
  var userName = prompt('What is your name?')
  console.log(userName);
  return userName;
}


function getTime(){
  var today = new Date();
  var hourNow = today.getHours(); 
  console.log(hourNow);
  return hourNow;
}


if (hourNow > 18) {
  greeting = 'Good evening, ' + userName;
} else if (hourNow > 12) {
  greeting = 'Good afternoon, ' + userName; 
} else if (hourNow >= 0) {
  greeting = 'Good morning, ' + userName;
} else {
  greeting = 'Welcome! ' + userName;
}
document.write('<h3>' + greeting + '</h3>');
console.log(greeting);


function askSolve(userName){
  var experience = prompt('Do you like solving problems?').toLowerCase();
  console.log('before the while ' + experience);
  while((experience !== 'no') && (experience !== 'yes')){
    console.log('in while but before re-assign ' + experience);
    experience = prompt(userName + ', Do you like solving problems?').toLowerCase();
    console.log('in while but after re-assign ' + experience);
  }
  return experience;
}
askSolve(userName);

var response;
console.log(greeting);

if (experience === 'yes') {
  response = 'Great! You just might like coding, ' + userName;
}

document.write(response)








