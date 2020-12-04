const checkbox1 = document.getElementById("js--checkbox-1");
const checkbox2 = document.getElementById("js--checkbox-2");
const checkbox3 = document.getElementById("js--checkbox-3");
const choice1 = document.getElementById("js--choice-1")
const choice2 = document.getElementById("js--choice-2")
const choice3 = document.getElementById("js--choice-3")
const continueButton = document.getElementById("js--continueButton");

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.second_choice = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));

choice1.addEventListener('click', function(){
    checkbox1.checked = true;
    checkbox2.checked = false;
    checkbox3.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
});

choice2.addEventListener('click', function(){
    checkbox2.checked = true;
    checkbox1.checked = false;
    checkbox3.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
});

choice3.addEventListener('click', function(){
    checkbox3.checked = true;
    checkbox1.checked = false;
    checkbox2.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
});


const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 1500);
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;

    for(const it in visited){
        if (visited[it] == false){
            list_items[page].style.color = "grey";
            list_items[page].style.cursor = "default";
            list_links[page].removeAttribute("href");
        }
        page++;
    }
}

function nextPage() {
    overlay.style.opacity = "1";
    overlay.style.zIndex = "10";
    setTimeout(function(){window.location.href = "Frames-doorlopen.html";}, 2000);
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
        }, 3000);
    }

    for(let i = 0; i < list_items.length; i++){
        if(list_items[i].dataset.visited === "false"){
            list_items[i].style.color = "grey";
            list_items[i].style.cursor = "default";
        }
    }
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

window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
        modal.style.display = "none";
    } else if(modalOpen == true) {
        modal.style.display = "flex";
    }
});