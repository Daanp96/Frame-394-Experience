let i = 0;
let j = 0;
let k = 0;
const txt = "You're going to follow the story of Daniel Voshart, a videographer.";
const txt2 = "You, Daniel, come across the video of the Walter Scott incident."
const txt3 = "And you want to find out what really happened and why."
const outputText = document.getElementById("js--text");
const speed = 50;
const startButton = document.getElementById("js--startButton");

function showText(){
    startButton.style.opacity = 0;
    startButton.style.pointerEvents = "none";
    outputText.innerHTML = "";
    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
        outputText.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(function(){
            outputText.innerHTML = "";
            typeSecond();
        }, 2000);
    }
}

function typeSecond() {
    if (j < txt2.length) {
        outputText.innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeSecond, speed);
    } else {
        setTimeout(function(){
            outputText.innerHTML = "";
            typeThird();
        }, 2000);
    }
}

function typeThird() {
    if (k < txt3.length) {
        outputText.innerHTML += txt3.charAt(k);
        k++;
        setTimeout(typeThird, speed);
    } else {
        setTimeout(function(){
            startButton.innerHTML = "Continue";
            startButton.style.opacity = 1;
            startButton.style.pointerEvents = "all";
            startButton.setAttribute("onclick", "start()");
        }, 1000);
    }
}

const overlay = document.getElementById("js--overlay");

function start() {
    overlay.style.zIndex = "1";
    overlay.style.opacity = "1";
    setTimeout(function(){window.location.href = "computerOpstarten.html"}, 3000)
}