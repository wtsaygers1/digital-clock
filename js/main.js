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
the first is saying if the hour is greater than or equal to 12,
then the time will finish with PM
Otherwise the time will finish with AM */    
    am_pm = (hour >= 12) ? 'PM' : 'AM';

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
