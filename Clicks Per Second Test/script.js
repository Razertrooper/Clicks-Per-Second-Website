'use strict';

const timeH = document.getElementsByClassName("timer")[0];
const numberH = document.getElementsByClassName("number")[0];
let timeSecond = 5;
let totalClicks = 0;
let highScore = 0;
let currentClicks = 0;

timeH.innerHTML = `0${timeSecond}`;

function startTest(){
    document.getElementsByClassName("message")[0].innerHTML = "Click as fast as you can!!"
    if (totalClicks === 0){
        startCountDown()
    }
    if (timeSecond === 0){
        stopTest()
    }
    else if (timeSecond != 0){
        totalClicks++
        currentClicks = totalClicks / 5
        document.getElementsByClassName("cps")[0].innerHTML = currentClicks
        numberH.innerHTML = totalClicks
        document.getElementsByClassName("score")[0].innerHTML = totalClicks
    }
}

function startCountDown(){
    const countDown = setInterval (()=>{
        timeSecond--;
        timeH.innerHTML = `0${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countDown)
        }
    },1000)
}

function stopTest(){
    currentClicks = 0
    alert(`You got ${totalClicks} clicks in five seconds!`)
    alert(`You click ${totalClicks / 5} clicks per second!`)
    if (totalClicks > highScore){
        highScore = totalClicks
        document.getElementsByClassName('highscore')[0].innerHTML = highScore
    }
    totalClicks = 0;
    numberH.innerHTML = totalClicks
    document.getElementsByClassName("score")[0].innerHTML = totalClicks
    timeSecond = 5;
    timeH.innerHTML = `0${timeSecond}`;
    document.getElementsByClassName("message")[0].innerHTML = "Click to Start Again"
}