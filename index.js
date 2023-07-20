const d = "21 august 2023 12:01 AM";
let dayEle = document.getElementById("day");
let hourEle = document.getElementById("hour");
let minuteEle = document.getElementById("minute");
let secondEle = document.getElementById("second");
let da = document.getElementById("d");
let m = document.getElementById("m");
let h = document.getElementById("h");
let s = document.getElementById("s");
let gif = document.getElementById("gif");
function counter() {
    let endDate = new Date(d);
    let curDate = new Date();
    if (curDate == endDate) {
       console.log("hello");
    }
    let diff = (endDate - curDate) / 1000;
    diff = Math.round(diff);
    // converting in days
    let days = Math.floor(diff / (3600 * 24));
    if (days < 10) {
        days = `0${days}`;
    }
    dayEle.innerText = days;
    // converting in hours
    let hours = Math.floor((diff / 3600) % 24);
    if (hours < 10) {
        hours = `0${hours}`;
    }
    hourEle.innerText = hours;
    // converting in minutes
    let minutes = Math.floor((diff / 60) % 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    minuteEle.innerText = minutes;
    // converting in seconds
    let seconds = Math.floor(diff % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    secondEle.innerText = seconds;
    if (days == 1 || days == 0) {
        da.innerText = "Day";
    }
    else {
        da.innerText = "Days";
    }
    if (hours == 1 || hours == 0) {
        h.innerText = "Hour";
    }
    else {
        h.innerText = "Hours";
    }
    if (minutes == 1 || minutes == 0) {
        m.innerText = "Min";
    }
    else {
        m.innerText = "Mins";
    }
    if (seconds == 1 || seconds == 0) {
        s.innerText = "Sec";
    }
    else {
        s.innerText = "Secs";
    }
}
setInterval(() => {
    counter();
}, 1000);