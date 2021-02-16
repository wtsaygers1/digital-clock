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
- clock (use a div)
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
    - updates every second
    - new Date
- set the current day
    - updates every day

