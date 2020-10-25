const screen = document.getElementById("js--screen");
const onOffButton = document.getElementById("js--onOffButton");

function onOff() {
    if(screen.style.opacity > .5) {
        screen.style.opacity = "0";
        onOffButton.style.pointerEvents = "none";
        setTimeout(function(){onOffButton.style.pointerEvents = "all";},2000);
    } else {
        screen.style.opacity = "1";
        onOffButton.style.pointerEvents = "none";
        setTimeout(function(){onOffButton.style.pointerEvents = "all";},2000);
    }
}