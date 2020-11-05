const screen = document.getElementById("js--screen");
const onOffButton = document.getElementById("js--onOffButton");

const stickyNote = document.getElementById("js--stickyNote");
const stickyNoteTop = document.getElementById("js--stickyNote__top");
const stickyNoteBottom = document.getElementById("js--stickyNote__bottom");
let foldedOut = false;

const passwordField = document.getElementById("js--passwordField");
const passwordInput = document.getElementById("js--passwordInput");
const passwordButton = document.getElementById("js--passwordButton");
const password = document.getElementById("js--password");
const loginField = document.getElementById("js--loginField");
const screenBackground = document.getElementById("js--screenBackground");
const desktop = document.getElementById("js--desktop");
const videoPlayerIcon = document.getElementById("js--videoPlayerIcon");
const videoPlayer = document.getElementById("js--videoPlayer");

const overlay = document.getElementById("js--overlay");

function onOff() {
    if(screen.style.opacity > .5) {
        screen.style.opacity = "0";
        onOffButton.style.pointerEvents = "none";
        setTimeout(function(){onOffButton.style.pointerEvents = "all";},2000);
    } else {
        onOffButton.style.animation = "none";
        screen.style.opacity = "1";
        onOffButton.style.pointerEvents = "none";
        setTimeout(function(){onOffButton.style.pointerEvents = "all";},2000);
    }

    onOffButton.style.animation = "none";
    setTimeout(function(){
        if (foldedOut == false) {
            stickyNote.style.animation = "blink .5s alternate infinite";
        }
    }, 5000);
}

stickyNote.onmouseenter = function(){
    if(foldedOut == false){
        stickyNoteBottom.style.animation = "slight-fold-out .7s forwards";
    }
}

stickyNote.onmouseleave = function(){
    if(foldedOut == false){
        stickyNoteBottom.style.animation = "slight-fold-in .7s";
    }
}

stickyNote.onclick = function(){
    foldedOut = true;
    stickyNote.style.pointerEvents = "none";
    stickyNote.style.animation = "none";
    stickyNoteBottom.style.animation = "fold-out 1s forwards";
}

passwordButton.onclick = function() {
    if (passwordInput.value == password.textContent) {
        console.log("Password correct!");
        loginField.style.animation = "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        setTimeout(function(){screenBackground.style.animation = "zoom-in .7s both"}, 800);
        setTimeout(function(){desktop.style.display = "block"}, 1600);
    } else {
        passwordField.style.animation = "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
        setTimeout(function(){passwordField.style.animation = "none"}, 800);
    }
}

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 5000);
    setTimeout(function(){
        if (screen.style.opacity < .5) {
            onOffButton.style.animation = "blink .5s alternate infinite";
        }
    }, 5000)
}

function startVideoPlayer() {
    setTimeout(function(){videoPlayer.style.animation = "scale-in-center .3s ease-in both"}, 500);
    setTimeout(function(){window.location.href = "videoPlayer.html"}, 1500);
}