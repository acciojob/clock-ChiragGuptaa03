//your JS code here. If required.

const timer = document.createElement("p");
timer.id = "timer";
document.body.appendChild(timer);


function updateTimer() {
  const now = new Date();
  timer.textContent = now.toLocaleString();
}


updateTimer();

// update every second
setInterval(updateTimer, 1000);
