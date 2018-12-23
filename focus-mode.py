import time
from datetime import datetime as dt

# path to host file
host_path = "/etc/hosts"

# redirect to Google
redirect = "google.co.uk"

blocked_websites = ["www.twitter.com", "www.facebook.com"]

# set start hour of focus mode (24 hour clock)
focus_mode_start = 9

# set end hour of focus mode (24 hour clock)
focus_mode_end = 17

while True:
    # check if current time is between 8:00am and 4:00pm
    if dt(dt.now().year, dt.now().month, dt.now().day, focus_mode_start) \
            < dt.now() < dt(dt.now().year, dt.now().month, dt.now().day, focus_mode_end):
        print("Work time!")
        file = open(host_path, "r+")
        approved_websites = file.read()
        for website in blocked_websites:
            if website in approved_websites:
                pass
            else:
                # access to a non-approved website is recorded
                # writes IP address of local host and website name to block
                file.write(redirect + " " + website + "\n")
    else:
        print("Chill time!")
        file = open(host_path, 'r+')
        approved_websites = file.readlines()
        # take pointer back to beginning of the file
        file.seek(0)
        for line in approved_websites:
            if not any(website in line for website in blocked_websites):
                file.write(line)
            file.truncate()
    time.sleep(5)
