const fs = require('fs');

const filePath = '/etc/hosts';
const redirectPath = '127.0.0.1';

let blockedWebsites = ["www.twitter.com", "www.facebook.com"];
const delay = 10000;

// set start hour of focus mode (24 hour clock)
const focusModeStart = 9;

// set end hour of focus mode (24 hour clock)
const focusModeEnd = 17;

const focusMode = () => {
  let date = new Date();
  let hours = date.getHours();
  if(hours >= focusModeStart && hours < focusModeEnd) {
      console.log('Work time!');
      fs.readFile(filePath, (err, data) => {
          let fileContents = data.toString();
          for(let website in blockedWebsites) {
              let addWebsite = "\n" + redirectPath + " " + website;
              if (fileContents.indexOf(addWebsite) < 0) {
                  console.log('Website not present in hosts file');
                  fs.appendFile(filePath, addWebsite, (err) => {
                      if(err){
                          return console.log(err);
                      }
                      console.log('File Updated Successfully');
                  });
              } else {
                  console.log('Website: ' + addWebsite + ' is present');
              }
          }
      })
  } else {
      // unblock blocked websites during chill time
      console.log('Chill time!');
      // append to empty string completeContent
      let completeContent = '';
      fs.readFileSync(filePath)
          .toString()
          .split('\n')
          .forEach((line) => {
              let flag = 1;
              // loop through each website to check if the list contains a blocked website
              for(let i=0; i < blockedWebsites.length; i++) {
                  if(line.indexOf(blockedWebsites[i]) >= 0) {
                      flag = 0;
                      break;
                  }
              }
              if (flag === 1) {
                  if(line === ''){
                      completeContent += line;
                  } else {
                      completeContent += line + "\n";
                  }
              }
          });
      // replace contents of file with completeContent
      fs.writeFile(filePath, completeContent, (err) => {
          if(err){
              console.log('Error:', err);
              return err;
          }
      });

  }
};

focusMode();
setInterval(() => {
    focusMode();
}, delay);
