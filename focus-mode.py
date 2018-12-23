import time
from datetime import datetime as dt

# path to host file
host_path = "/etc/hosts"

# redirect to local host
redirect = "127.0.0.1"

blocked_websites = ["www.twitter.com", "www.facebook.com"]

focus_mode_start = 9

focus_mode_end = 17

while True:
    # check if current time is between 8:00am and 4:00pm
    if dt(dt.now().year, dt.now().month, dt.now().day, focus_mode_start) \
            < dt.now() < dt(dt.now().year, dt.now().month, dt.now().day, focus_mode_end):
        print("Work time!")
    else:
        print("Chill time!")
    time.sleep(5)
