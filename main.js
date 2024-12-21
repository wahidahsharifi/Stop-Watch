const play = document.getElementById("play");
const pause = document.getElementById("pause");
const flag = document.getElementById("flag");

const countdownTimer = {
   time: 0,
   intervalId: null,
   startState: false,
   lastSecond: null,
   timeOutput: document.getElementById("time"),
   millisecondsOutput: document.getElementById("milliseconds"),
   num: 1,
   pastLap: 0,

   start: function () {
      if (!this.startState) {
         this.startState = true;
         flag.style.opacity = "1";
         play.style.display = "none";
         pause.style.display = "block";
         this.intervalId = setInterval(() => {
            this.time += 10;
            const formattedTime = this.formatTime();
            this.timeOutput.textContent = formattedTime.timeString;
            this.millisecondsOutput.textContent = `.${formattedTime.milliseconds}`;

            // Update document.title only for seconds
            if (this.lastSecond !== formattedTime.seconds) {
               this.lastSecond = formattedTime.seconds;
               document.title = formattedTime.timeString;
            }
         }, 10);
      }
   },

   reset: function (m = false) {
      this.time = 0;
      this.startState = false;
      flag.style.opacity = "0.3";
      play.style.display = "block";
      pause.style.display = "none";
      const formattedTime = this.formatTime();
      this.timeOutput.textContent = formattedTime.timeString;
      this.millisecondsOutput.textContent = `.${formattedTime.milliseconds}`;
      document.title = formattedTime.timeString;
      if (this.intervalId) {
         clearInterval(this.intervalId);
         this.intervalId = null;
      }
      if (!m) {
         document.querySelector("tbody").innerHTML = "";
         this.num = 1;
         this.pastLap = 0;
      }
   },

   stops: function () {
      if (this.startState) {
         const m = this.time;
         this.reset(true);
         this.time = m;
         play.style.display = "block";
         pause.style.display = "none";
         const formattedTime = this.formatTime();
         this.timeOutput.textContent = formattedTime.timeString;
         this.millisecondsOutput.textContent = `.${formattedTime.milliseconds}`;
         document.title = formattedTime.timeString;
         this.startState = false;
         flag.style.opacity = "0.3";
      }
   },

   formatTime: function () {
      const hrs = Math.floor(this.time / 3600000);
      const mins = Math.floor((this.time % 3600000) / 60000);
      const secs = Math.floor((this.time % 60000) / 1000);
      const millis = Math.floor((this.time % 1000) / 10);
      return {
         timeString: `${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`,
         milliseconds: millis.toString().padStart(2, "0"),
         seconds: secs,
      };
   },

   formatLapTime: function (lapTime) {
      const hrs = Math.floor(lapTime / 3600000);
      const mins = Math.floor((lapTime % 3600000) / 60000);
      const secs = Math.floor((lapTime % 60000) / 1000);
      const millis = Math.floor((lapTime % 1000) / 10);
      return {
         timeString: `${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`,
         milliseconds: millis.toString().padStart(2, "0"),
      };
   },

   laps: function () {
      if (this.startState) {
         const lapTime = this.time - this.pastLap; // Time between last lap and current lap
         const lapFormatted = this.formatLapTime(lapTime); // Format lap time
         document.querySelector("tbody").insertAdjacentHTML(
            "afterbegin",
            `
            <tr>
               <td>${this.num}</td>
               <td>${lapFormatted.timeString}.${lapFormatted.milliseconds}</td>
               <td>${this.formatTime().timeString}.${
               this.formatTime().milliseconds
            }</td>
            </tr>
         `
         );
         this.num++;
         this.pastLap = this.time; // Update pastLap to the current time
      }
   },
};

document
   .getElementById("start")
   .addEventListener("click", () =>
      play.style.display == "block"
         ? countdownTimer.start()
         : countdownTimer.stops()
   );

document
   .getElementById("reset")
   .addEventListener("click", () => countdownTimer.reset());

flag.addEventListener("click", () => countdownTimer.laps());
