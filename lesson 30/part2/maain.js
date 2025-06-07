var wakeuptime;
var dstime;
var sleeptime
var noon = 12



function showCurrentTime(){
    var clock = document.getElementById("clock")
    var CurrentTime = new Date();

    var hours = CurrentTime.getHours();
    var minutes = CurrentTime.getMinutes();
    var seconds = CurrentTime.getSeconds();

    var meridian="AM";

    if(hours>=noon){
        meridian ="PM"
    }

    var clockTime = hours + ":" + minutes + ":"+ seconds + " " + meridian;

    clock.innerText = clockTime;

    
}

var oneSecond = 1000;

setInterval(showCurrentTime,oneSecond)
