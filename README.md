# Pseudo Code for Digital Clock

Start: Digital Clock Running

Functionality: A clock the tells the time updating every second for accuracy 

INIT:
- digital clock format (??download?? digital clock font)
- hours (01 - 12) (00 - 24)
- minutes (00 - 59)
- seconds (00 - 59)
- AM/PM
- Clock updates every second (setInterval method for 1000      
milliseconds)
- Stretch Goals
    - day/month/year
    - toggle button between 12hr and 24hr
    - design
    - ANALOG 

Objects:
- clock layout 
    - Date object
    - Hour + ":" + Minute + ":" + Seconds + "AM/PM"
- page decoration
    - header
    - paragraphs
    - links

End: program runs as long as time exist

HTML:
- header
- clock (use a div element with id clock)
- footer
- toggle button
- calendar date

CSS:
- background
- clock font/size/position
- button
- date positioning

JS:
- set the current time
    - new Date (sets the times hours, minutes, seconds)
    - update hours, minutes, and seconds
- display the clock by getting the element in the HTML and setting up digital clock format
- display the hours, minutes, and seconds in two digit form
    - If: single digit
        - Then: zero in front
    - Else: two digit number
- establish an interval for how often clock updates
        - 1000 milliseconds = 1 second
- AM/PM
    - the clock displays if it is morning or afternoon
- set the current day
    - updates every day

Functions:
- currentTime()
    - var: date, hour, min, sec
   
    
- AM/PM (highnoon)
    - If: hour is >= 12
        - Then: PM
    - Else: 
        - AM
    
    - If: hour = 0
        - return: 12
    - Else if: hour > 12
        - return: hour - 12
    - Else:
        - return: hour

     -updateTime()
        - hour, min, sec

- document.getElementById("clock").innerText/HTML = clock format

- setInterval
    - currentTime() function, interval desired (1000 ms)
        
- updateTime()
    - If: single digit
        - return: add zero in front of number
    - Else: 
        - return number 



