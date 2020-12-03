import * as Reddit from "./redditPost.js";

Reddit.openGifWindow();
Reddit.closeGifWindow();
Reddit.postToReddit();
Reddit.cancelPost();
Reddit.closeError();

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const overlay = document.getElementById("js--overlay");
let counter = 0;

hamburger.addEventListener("click", () => {
    counter++;
    if(counter % 2){
        navigation.style.opacity = 1;
        navi_text.style.opacity = 0;
        overlay.style.zIndex = 1;
        overlay.style.opacity = 0.8;
        setTimeout(() => {
            navigation.style.display = "block";
        });
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        hamburger.style.pointerEvents = "none";
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
            hamburger.style.pointerEvents = "auto";
        }, 1000);
    }
});

const modal = document.getElementById("js--modal");
const modalBg = document.getElementById("js--modal-bg");
const resetWarning = document.getElementById("js--resetWarning");
const backToStart = document.getElementById("js--backToStart");
const hideModal = document.getElementById("js--hideModal");

resetWarning.addEventListener("click", function resetWarning(){
    modalBg.style.display = "block";
    modal.style.display = "flex";
    modalBg.style.opacity = ".5";
    modal.style.opacity = "1";
})

hideModal.addEventListener("click", function hideModal() {
    modalBg.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(function(){
        modalBg.style.display = "none";
        modal.style.display = "none";
    }, 1000);
})

backToStart.addEventListener("click", function backToStart(){
    document.location.href = "index.html";
})

window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
});