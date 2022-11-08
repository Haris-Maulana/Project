const newYears = "1/12/2023";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = Math.floor((newYearsDate - currentDate) / 1000);
  const day = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const secondsHours = Math.floor(seconds) % 60;

  daysEl.innerHTML = day;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = minutes;
  secondsEl.innerHTML = secondsHours;
}

countdown();

setInterval(countdown, 1000);
