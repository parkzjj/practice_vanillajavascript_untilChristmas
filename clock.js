const now = new Date();
const future = new Date("2022/12/25/00:00:00");
const distance = (future-now)/1000;
const clock = document.getElementById("clock");
console.log(distance);


function remainTimer() {
    const now = new Date();
    const future = new Date("2022/12/23/00:00:00");
    const distance = (future-now)/1000;
    const remainSeconds = Math.floor(((((distance%(60*60*24))%3600))%60));
    const remainMinutes = Math.floor(((distance%(60*60*24))%3600)/60);
    const remainHours = Math.floor((distance%(60*60*24))/3600);
    const remainDays = Math.floor(distance/(60*60*24));
    clock.innerText = `${remainDays}d ${remainHours}h ${remainMinutes}m ${remainSeconds}s`;
}

remainTimer();
setInterval(remainTimer, 1000);

