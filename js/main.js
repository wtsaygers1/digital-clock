/* sets the interval of the function currentTime to update 
every second or 1000 milliseconds */
setInterval(currentTime, 1000);

/* this function gets the current date with new Date() and 
creates the date object
THe hour, min, and sec variables tell the function to get
the current time elements respectively */
function currentTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = 'AM';

/* these if statements determine if it is AM or PM
the first is saying if the hour is greater than 12, then
subtract 12 from the hour and put PM at the end
the second is saying if the hour is 0, then replace the 0
with 12 and put an AM at the end
any hour between 1 and 11 inclusive will just show that hour
and have an AM at the end because that is the default */    
    if (hour > 12) {
        hour -= 12;
        am_pm = 'PM';
    } 
    if (hour == 0) {
        hr = 12;
        am_pm = 'AM';
    }
/* the code below adds a zero to any number in the hour,
minutes, and seconds that is less than 10
this is required because if a unit of time is less than ten
than its default is just the single digit which is not how
time is normally displayed */
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

/* the variable timeFormat creates the format to display
the time and below it is the command for where to put
the display in the HTML structure of the web page */    
    let timeFormat = hour + ':' + min + ':' + sec + ' ' + am_pm;
    document.getElementById('clock').innerHTML = timeFormat; 

/* this Event Listener waits for a specific event to occur --
in this case a click of a button and then it runs the 
currentTime function */    
    document.getElementById('clock').addEventListener('click', 
    currentTime);
}

currentTime();

/* working to get the 24hr format displayed when button is
clicked

if (document.getElementById('world').addEventListener('click',
    worldTime)) {
    return function worldTime() {
        let world = new Date();
        let hour = world.getHours();
        let min = world.getMinutes();
        let sec = world.getSeconds();

        hour = hour < 10 ? '0' + hour : hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;

    let 24hrFormat = hour + ':' + min + ':' + sec;
    
    document.getElementById('clock').innerHTML = 24hrFormat;
    }
}
*/

/* schedule creates a date object with new Date and then 
updates it with the .getDate and .getFullYear methods
month is an array because the .getMonth method returns a
number 0-11 signifying the position of the month */
let schedule = new Date();
    let day = schedule.getDate();
    let month = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
    let year = schedule.getFullYear();

/* this finds the HTML element and displays the date
as coded
month looks different than day and year because I had to specify
which month in the array so what is happening is the .getMonth
method finds the index of the current month and then returns
the month in word form to the web page */    
document.getElementById('date').innerHTML = month[schedule.getMonth()] + ' ' + day + ', ' + year;
