setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock(){
    let currentTime = new Date();
    const secondsRatio = currentTime.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentTime.getMinutes() ) / 60;
    const hoursRatio = (minutesRatio + currentTime.getHours() ) / 12;

    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}
function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation", (rotationRatio * 360 + "deg"));
}

setClock();
