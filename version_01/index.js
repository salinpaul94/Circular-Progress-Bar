let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
  counter += 1;
  number.innerHTML = counter + "%";
}, 31);

// 65% in 2000ms
// therefor for 1% 2000/65 = 30.76 ~ 31ms
