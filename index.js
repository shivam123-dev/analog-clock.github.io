// Setting the rotation of hour, minute and seconds hand of Analog Clock

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrototatin = 30 * htime + 0.5 * mtime;
    mrototatin = 6 * mtime;
    srototatin = 6 * stime;
    // rotating function
    hour.style.transform = `rotate(${hrototatin}deg)`;
    minute.style.transform = `rotate(${mrototatin}deg)`;
    second.style.transform = `rotate(${srototatin}deg)`;

}, 1000);