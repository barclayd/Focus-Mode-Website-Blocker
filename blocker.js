const fs = require('fs');

const filePath = '/etc/hosts';
const redirect = '127.0.0.1';

let blockedWebsites = ["www.twitter.com", "www.facebook.com"];
const delay = 10000;

// set start hour of focus mode (24 hour clock)
const focusModeStart = 9;

// set end hour of focus mode (24 hour clock)
const focusModeEnd = 17;

const blocker = () => {
  let date = new Date();
  let hours = date.getHours();
  if(hours >= focusModeStart && hours < focusModeEnd) {
      console.log('Work time!');
  } else {
      console.log('Chill time!')
  }
};
