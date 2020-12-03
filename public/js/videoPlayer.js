const viewDiscr = document.getElementById("js--viewDiscr");
const viewDiscrBg = document.getElementById("js--viewDiscr-bg");
const continueButton = document.getElementById("js--continue");
const exitVideo = document.getElementById("js--exitVideo");
const overlay = document.getElementById("js--overlay");

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.video = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));
console.log(visited);

function playVideo() {
    viewDiscr.style.animation = "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    viewDiscrBg.style.opacity = "0";
    setTimeout(function(){viewDiscrBg.style.display = "none";}, 1000);
    setTimeout(function(){
        continueButton.style.display = "block";
        continueButton.style.animation = "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 1000);
}

function skipVideo() {
    viewDiscr.style.animation = "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    exitVideo.style.display = "flex";
    exitVideo.style.animation = "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    continueButton.style.display = "none";
}

function closeExitVideo(){
    viewDiscrBg.style.opacity = "0";
    setTimeout(function(){viewDiscrBg.style.display = "none";}, 1000);
    exitVideo.style.display = "none";
    setTimeout(function(){
        continueButton.style.display = "block";
        continueButton.style.animation = "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 1000);}

function nextPage() {
    overlay.style.zIndex = "10"
    overlay.style.opacity = "1";
    setTimeout(function(){window.location.href = "eersteUitspraak.html"}, 3000);
}

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
let counter = 0;

function showNavigation() {
    counter++;
    if(counter % 2){
        navigation.style.opacity = 1;
        navi_text.style.opacity = 0;
        overlay.style.zIndex = 1;
        overlay.style.opacity = 0.8;
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.zIndex = -1;
        }, 1000);
    }

    for(let i = 0; i < list_items.length; i++){
        if(list_items[i].dataset.visited === "false"){
            list_items[i].style.color = "grey";
            list_items[i].style.cursor = "default";
        }
    }
}