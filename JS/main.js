//Calling setClock method so that it updates the position of each hand(second, minute, hour) every 1 second.
setInterval(setClock, 1000);

//Selecting the three hands by their data attribute
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock(){
    let currentTime = new Date();
    //Calculating the time ratio 
    const secondsRatio = currentTime.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentTime.getMinutes() ) / 60;
    const hoursRatio = (minutesRatio + currentTime.getHours() ) / 12;
    
    //Passing the above calculated ratios for setRotation method to change the hands position
    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}
function setRotation(element, rotationRatio){
    //Setting the --rotation css variable with the ratio
    element.style.setProperty("--rotation", (rotationRatio * 360 + "deg")); 
}

setClock();
