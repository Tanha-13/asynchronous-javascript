// random color hex code generator
const randomHexColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "";
  for (i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return `#${color}`;
};

//random color rgb code generator
function randomNumber(){
    return Math.floor(Math.random() * 256);
}
const randomRgbColor = function(){
    let redColor = randomNumber();
    let greenColor = randomNumber();
    let blueColor = randomNumber();
    return `rgb(${redColor},${greenColor},${blueColor})`;
}

//start function
let intervalId;
function startChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(() => {
    //   document.body.style.backgroundColor = randomHexColor();
      document.body.style.backgroundColor = randomRgbColor();
      document.querySelector(".colorName").innerHTML = `Color: ${randomRgbColor()}`;
    }, 1000);
  }
}

//stop function
function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

//click event in start button
document.querySelector(".start").addEventListener("click", startChangingColor);
//click event in stop button
document.querySelector(".stop").addEventListener("click", stopChangingColor);
