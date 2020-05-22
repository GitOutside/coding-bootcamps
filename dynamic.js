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
if (hourNow > 18){
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



var response;


function askSolve(userName){
  var experience = prompt(userName + ' do you like solving problems?').toLowerCase();
  while((experience !== 'no') && (experience !== 'yes')){
      experience = prompt(userName + ' do you like solving problems?').toLowerCase();
  }

  if (experience === 'yes') {
    response = 'Great! You just might like coding, ' + userName;
  }
  return experience;
}
console.log(userName + 'beforetest');
askSolve(userName);

document.write(response);








