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