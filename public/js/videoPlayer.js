const viewDiscr = document.getElementById("js--viewDiscr");
const viewDiscrBg = document.getElementById("js--viewDiscr-bg");
const continueButton = document.getElementById("js--continue");
const exitVideo = document.getElementById("js--exitVideo");
const overlay = document.getElementById("js--overlay");

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.video = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));

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
const list_links = document.getElementsByClassName("navigation__items__link");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
let counter = 0;
let page = 0;

function showNavigation() {
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
}

window.onload = function() {
    for(const it in visited){
        if (visited[it] == false){
            list_items[page].style.color = "grey";
            list_items[page].style.cursor = "default";
            list_links[page].removeAttribute("href");
        }
        page++;
    }
}

const modal = document.getElementById("js--modal");
const modalBg = document.getElementById("js--modal-bg");

function resetWarning(){
    modalBg.style.display = "block";
    modal.style.display = "flex";
    modalBg.style.opacity = ".5";
    modal.style.opacity = "1";
}

function hideModal() {
    modalBg.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(function(){
        modalBg.style.display = "none";
        modal.style.display = "none";
    }, 1000);
}

function backToStart(){
    document.location.href = "index.html";
}

window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
});