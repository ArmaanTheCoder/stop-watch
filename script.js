const Hour = document.querySelector(".Hour");
const Minute = document.querySelector(".Minute");
const Second = document.querySelector(".Second");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let interval;


start.addEventListener("click", () => {
    start.disabled = true;
    console.log("start - disabled");
    interval = window.setInterval(() => {
        let seconds = Second.innerText;
        seconds++;
    
        if (seconds == 60) {
            Second.innerText = "00";
            let minutes = Minute.innerText;
            minutes++;
    
    
            if (minutes == 60) {
                Minute.innerText = "00";
                let hours = Hour.innerText;
                hours++;
    
                if (hours == 24) {
                    Hour.innerText = "00";
    
                } else if (hours >= 10) {
                    Hour.innerText = hours;
                } else {
                    Hour.innerText = "0" + hours;
                }
    
            } else if (minutes >= 10) {
                Minute.innerText = minutes;
            } else {
                Minute.innerText = "0" + minutes;
            }
    
    
        } else if (seconds >= 10) {
            Second.innerText = seconds;
        } else {
            Second.innerText = "0" + seconds;
        }
    
    }, 1000);
})

stop.addEventListener("click", () =>{
    console.log("start - enabled");
    clearInterval(interval);
    start.disabled = false;
})

reset.addEventListener("click", () => {
    Second.innerText = "00";
    Minute.innerText = "00";
    Hour.innerText = "00";
    clearInterval(interval);
    start.disabled = false;
    console.log("start - enabled");
})