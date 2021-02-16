/* let clock = document.getElementById('clock'); */

setInterval(currentTime, 1000);

function currentTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = 'AM';

    if (hour > 12) {
        hour -= 12;
        am_pm = 'PM';
    } 
    if (hour == 0) {
        hr = 12;
        am_pm = 'AM';
    }

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    /*
    if (hour = 0) {
        return 12;
    } else if (hour >= 12) {
        return hour - 12;
    } else {
        return hour;
    }
    */
    
    let timeFormat = hour + ' : ' + min + ' : ' + sec + ' ' + am_pm;
    document.getElementById('clock').innerHTML = timeFormat;  
    
    /*
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    */
   
    /*document.getElementById('clock').innerHTML = timeFormat;*/
    
   /*hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    let timeFormat = hour + ' : ' + min + ' : ' + sec + ' ' + highnoon;

    document.getElementById('clock').innerHTML = timeFormat;

    function updateTime(k) {
        if (k < 10) {
            return '0' + k;
        } else {
            return k;
        }
    }    
    */
}

currentTime();