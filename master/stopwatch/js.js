const nums = document.querySelector("#nums");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");
const lapbtn = document.querySelector("#lapbtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let lapA = [elapsedTime];

startbtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
  console.log(startTime)
});
pausebtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetbtn.addEventListener("click", () => {
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  paused = true;
  hrs = 0;
  mins = 0;
  secs = 0;
  Numzs = 0;
  Numzm = 0;
  Numzh = 0;
  lapA = [elapsedTime];
  document.getElementById("lapT").innerHTML = "";
  clearInterval(intervalId);
  nums.textContent = `00:00:00`;
});
lapbtn.addEventListener("click", () => {
  if (!paused) {
    lapA.push(elapsedTime);

    Numzs = Math.floor(
      ((lapA[lapA.length - 1] - lapA[lapA.length - 2]) / 1000) % 60
    );
    Numzm = Math.floor(
      ((lapA[lapA.length - 1] - lapA[lapA.length - 2]) / (1000 * 60)) % 60
    );
    Numzh = Math.floor(
      ((lapA[lapA.length - 1] - lapA[lapA.length - 2]) / (1000 * 60 * 60)) % 60
    );

    Numzs = pad(Numzs);
    Numzm = pad(Numzm);
    Numzh = pad(Numzh);

    function pad(until) {
      return ("0" + until).length > 2 ? until : "0" + until;
    }
    document.getElementById(
      "lapT"
    ).innerHTML += `<li id="lapTime">&nbsp;&nbsp;&nbsp;${`${hrs}:${mins}:${secs}`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+${`${Numzh}:${Numzm}:${Numzs}`}&nbsp;&nbsp;&nbsp;|</li>`;
  }
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  nums.textContent = `${hrs}:${mins}:${secs}`;

  function pad(until) {
    return ("0" + until).length > 2 ? until : "0" + until;
  }
}
console.log((Date.now() / (1000 * 60 * 60)) % 60);
