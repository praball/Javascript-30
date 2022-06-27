const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds * 6) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes * 6) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    //console.log(minutes);

    const hours = now.getHours();
    const hourDegrees = (hours * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    //console.log(hours);
}

setInterval(setDate, 1000);
