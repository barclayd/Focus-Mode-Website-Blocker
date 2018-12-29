# Focus-Mode-Website-Blocker

Website blocker to help facilitate productivity.

Built using Python and JavaScript.

Blocked websites return the page 'This site cannot be reached' generic browser message.

### How it Works
This script make continual edits to the 'hosts' file found within /etc/hosts to redirect blocked websites to '127.0.0.1'.
```
127.0.0.1    www.netflix.com
```
When users navigate to a blocked website during 'focus mode', the browser will display 'This page cannot be reached' - in effect, blocking access to the domain.

### Setup - Windows Users

Replace filePath with the following line:
```
const filePath = "C:\Windows\System32\drivers\etc\hosts";
```

Mac and Linux users can skip this step.

### How to Run

##### Mac & Linux Users:
```
$ sudo nano blocker.js
```

##### Windows Users:
Open command prompt as Administrator => go to project directory => run the following command:

```
nano blocker.js
```

### Run automatically on Start-Up

##### Mac & Linux Users:
The script can be run automatically on starting up the system by using crontab.
Open terminal and enter:
```
sudo crontab -e
```
This will enable us to modify the cron table.
Add the following line to the end of the cron table - replacing 'path-to-focusMode' with the path to where you have saved the focusMode file.
```
@reboot node /path-to-focusMode/focusMode.js
```
##### Windows Users:
[Follow this guide to schedule scripts to run at boot for Windows ](https://www.howtogeek.com/138159/how-to-enable-programs-and-custom-scripts-to-run-at-boot/)

##### How to add to Cron table:
```
$ sudo nano blocker.js
```

##### Windows Users:



Future Updates:

* Panel to configure start/end times
* Weekend mode/customise working schedule to enable website blocker
* Pomodoro Timer functionality that disables block during breaks
* Track time spent on blocked websites
* Schedule blocks for specific websites
* User inputs which websites should be blocked

