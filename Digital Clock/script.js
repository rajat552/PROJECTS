const clock = document.getElementById("clock");

setInterval(function () {
  const date = new Date();
  //   console.log(date);
     clock.innerHTML = date.toLocaleTimeString();
}, 1000);
