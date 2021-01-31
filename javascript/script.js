//---------------------------clock
// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
//   var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   } // add zero in front of numbers < 10
//   return i;
// }

// startTime();

//---------------------countdown timer

let countDownDate = new Date("dec 24, 2021 23:59:00").getTime();

let seconds = setInterval(function () {
  let todaysDate = new Date().getTime();

  let timeDifferance = countDownDate - todaysDate;

  let days = Math.floor(timeDifferance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifferance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDifferance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifferance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds ";

  if (timeDifferance < 0) {
    clearInterval(seconds);
    document.getElementById("countdown").innerHTML =
      "Packages Successfully Delivered";
  }
}, 1000);
