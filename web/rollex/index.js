const heure = document.querySelector(".heure");
const minute = document.querySelector(".minute");
const seconde = document.querySelector(".seconde");

function updateClock() {
    const currentDate = new Date();
    const h = currentDate.getHours()
    const m = currentDate.getMinutes();
    const s = currentDate.getSeconds();
    const hDeg = (h/12)*360;
    const mDeg = (m/60)*360;
    const sDeg = (s/60)*360;
    heure.style.transform = `rotate(${hDeg}deg)`;
    minute.style.transform = `rotate(${mDeg}deg)`;
    seconde.style.transform = `rotate(${sDeg}deg)`;
}

setInterval(updateClock, 1000);