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

// Hier laad je het object in, zet je de boolean voor die pagina op true
// en zet je het object weer terug in localStorage.
const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.computer = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));

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
        loginField.style.animation = "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        setTimeout(function(){screenBackground.style.animation = "zoom-in .7s both"}, 800);
        setTimeout(function(){desktop.style.display = "block"}, 1600);
    } else {
        passwordField.style.animation = "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
        setTimeout(function(){passwordField.style.animation = "none"}, 800);
    }
}

const setHour = document.getElementById("js--hour");
const setMin = document.getElementById("js--minute");
const setDay = document.getElementById("js--day");
const setMonth = document.getElementById("js--month");
const setYear = document.getElementById("js--year");

function updateClock(){
    let now = new Date();
    let hour = now.getHours(),
        min = now.getMinutes(),
        day = now.getDate(),
        month = now.getMonth(),
        year = now.getFullYear();
    setHour.innerHTML = hour;
    setMin.innerHTML = min;
    setDay.innerHTML = day;
    setMonth.innerHTML = month;
    setYear.innerHTML = year;
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1000);
}

window.onload = function() {
    initClock()
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 2500);
    setTimeout(function(){
        if (screen.style.opacity < .5) {
            onOffButton.style.animation = "blink .5s alternate infinite";
        }
    }, 5000)

    hamburger.style.pointerEvents = "none";
    setTimeout(() => {
        hamburger.style.pointerEvents = "auto";
    }, 3000);

    for(const it in visited){
        if (visited[it] == false){
            list_items[page].style.color = "grey";
            list_items[page].style.cursor = "default";
            list_links[page].removeAttribute("href");
        }
        page++;
    }
}

function startVideoPlayer() {
    setTimeout(function(){videoPlayer.style.animation = "scale-in-center .3s ease-in both"}, 500);
    setTimeout(function(){window.location.href = "videoPlayer.html"}, 1500);
}

const modal = document.getElementById("js--modal");
const modalBg = document.getElementById("js--modal-bg");
let modalOpen = false;

function resetWarning(){
    modalBg.style.display = "block";
    modal.style.display = "flex";
    modalBg.style.opacity = ".5";
    modal.style.opacity = "1";
    modalOpen = true;
}

function hideModal() {
    modalBg.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(function(){
        modalBg.style.display = "none";
        modal.style.display = "none";
    }, 1000);
    modalOpen = false;
}

function backToStart(){
    document.location.href = "index.html";
}

// Navigatie
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
        overlay.style.zIndex = 20;
        overlay.style.opacity = 0.8;
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        hamburger.style.pointerEvents = "none";
        setTimeout(() => {
            overlay.style.zIndex = -1;
            hamburger.style.pointerEvents = "auto";
        }, 1000);
    }
}

window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
        modal.style.display = "none";
    } else if(modalOpen == true) {
        modal.style.display = "flex";
    }
});