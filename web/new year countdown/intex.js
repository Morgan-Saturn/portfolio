const days = document.getElementById("day");
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const yearTime = new Date("2027-01-01T00:00:00").getTime();


updateCountdown()
function updateCountdown(){
    
    const today = new Date().getTime();
    const gap = yearTime - today;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}

setInterval(updateCountdown, 1000);