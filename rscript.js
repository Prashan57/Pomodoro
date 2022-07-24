"use strict";

console.log("sync");

//1. Select all the tabs from tab list
const PomodoroTab = document.getElementById("pomodoro-tab");
const ShortBreakTab = document.getElementById("short-break-tab");
const LongBreakTab = document.getElementById("long-break-tab");

const PomodoroContent = document.getElementById("pomodoro-content");
const ShortBreakContent = document.getElementById("shortbreak-content");
const LongBreakContent = document.getElementById("longbreak-content");

const pomoTimer = document.getElementById("pomoTimer");
const shortTimer = document.getElementById("shortTimer");
const longTimer = document.getElementById("longTimer");

const pStartTimer = document.getElementById("pomoStartTimer");
const sStartTimer = document.getElementById("shortStartTimer");
const lStartTimer = document.getElementById("longStartTimer");

const Pause = document.getElementById("Pause");

//Text from js
pStartTimer.textContent = "START";
sStartTimer.textContent = "START";
lStartTimer.textContent = "START";

//Add click event listener on each tab
PomodoroTab.addEventListener("click", function () {
  console.log("Pomodoro");

  //TAB SELECT
  PomodoroTab.classList.add("active");
  ShortBreakTab.classList.remove("active");
  LongBreakTab.classList.remove("active");

  //TAB CONTENT
  PomodoroContent.classList.add("active");
  ShortBreakContent.classList.remove("active");
  LongBreakContent.classList.remove("active");
});

ShortBreakTab.addEventListener("click", () => {
  console.log("short break");

  //TAB SELECT
  ShortBreakTab.classList.add("active");
  PomodoroTab.classList.remove("active");
  LongBreakTab.classList.remove("active");

  //TAB CONTENT
  ShortBreakContent.classList.add("active");
  PomodoroContent.classList.remove("active");
  LongBreakContent.classList.remove("active");
});

LongBreakTab.addEventListener("click", () => {
  console.log("long break");

  //TAB SELECT
  LongBreakTab.classList.add("active");
  ShortBreakTab.classList.remove("active");
  PomodoroTab.classList.remove("active");

  //TAB CONTENT
  LongBreakContent.classList.add("active");
  ShortBreakContent.classList.remove("active");
  PomodoroContent.classList.remove("active");
});
var secondsLeft;
//Timer function
const timer = (seconds, contentDisplay, timerControl) => {
  
const   now = Date.now();
   const then = now + seconds * 1000;
  
   let timeInterval = setInterval(() => {

    if (timerControl.innerText=="START")
 {
 timerControl.addEventListener("click", function () {
  clearInterval(timeInterval); 
timerControl.innerText = "STOP";

 });
}
else 
//if(timerControl.innerText=="START")

{
   timerControl.addEventListener("click", function () {
      timerControl.innerText = "START";  
     
    })
  
 secondsLeft = Math.round((then - Date.now()) / 1000);
      displayTimer(secondsLeft, contentDisplay);
     

      //timer end condition
      if (secondsLeft < 1) {
        clearInterval(timeInterval);
      } 
 
    }

    

  }, 1000);

  console.log(secondsLeft);

  return secondsLeft;
}

function displayTimer(seconds, element) {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  console.log({ minute, second });
  element.innerText = minute + " : " + second;
}

// //Add button event listener
var z=1500;
pStartTimer.addEventListener("click", function () {
  let PomodoroTotalTime = z;
 pStartTimer.innerText="STOP";
  z=timer(PomodoroTotalTime, pomoTimer, pStartTimer);
  
});
 
sStartTimer.addEventListener("click", function () {
  let shortTotalTime = 300;
  if (sStartTimer.textContent === "START") {
    sStartTimer.textContent = "STOP";
    timer(shortTotalTime, shortTimer);
  } else if (sStartTimer.textContent === "STOP") {
    sStartTimer.textContent = "START";
    clearInterval(timer.timeInterval);
    console.log("stop");
  }
});
lStartTimer.addEventListener("click", function () {
  let LongTotalTime = 600;
  if (lStartTimer.textContent === "START") {
    lStartTimer.textContent = "STOP";
    timer(LongTotalTime, longTimer);
  }
   else if (lStartTimer.textContent === "STOP") {
    lStartTimer.textContent = "START";
    clearInterval(timer.timeInterval);
    console.log("stop");
  }
});