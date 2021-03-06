// Importeer alle functies uit de three.js file.
import * as ThreeD from "./3D_analyse.js";

//Gebruik de three.js functies en voer ze uit.
ThreeD.main();

const toolsBar = document.getElementById("js--tools_bar");
const toolTitle = document.getElementById("js--tools_title");
const objectsBar = document.getElementById("js--objects_bar");
const walterScott = document.getElementById("js--walter");
const walterTitle = document.getElementById("js--walter_title");
const michealSlager = document.getElementById("js--michael");
const michaelTitle = document.getElementById("js--michael_title");
const objectsTitle = document.getElementById("js--obj_title");
const taser = document.getElementById("js--taser");
const taserTitle = document.getElementById("js--taser_title");
const fence = document.getElementById("js--fence");
const fenceTitle = document.getElementById("js--fence_title");
const delete_objects = document.getElementById("js--tools_delete");
const object_items = document.getElementsByClassName("objectsBar__item");

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.three_d = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));

let counted = 0;

toolsBar.addEventListener('click', () => {
    counted++;

    if(counted % 2){
        toolsBar.style.width = "15rem";
        toolTitle.style.opacity = "0";
    } else {
        toolsBar.style.width = "10rem";
        toolTitle.style.opacity = "1";
    }
});

// delete_objects.addEventListener("click", () => {

// });

objectsBar.addEventListener("click", () => {
    counted++;
    
    if(counted % 2){
        walterScott.style.opacity = "1";
        walterScott.style.display = "block";
        walterTitle.style.opacity = "1";
        michealSlager.style.opacity = "1";
        michealSlager.style.display = "block";
        michaelTitle.style.opacity = "1";
        taser.style.opacity = "1";
        taserTitle.style.opacity = "1";
        fence.style.opacity = "1";
        fenceTitle.style.opacity = "1";
        objectsBar.style.width = "15rem";
        objectsTitle.style.display = "none";

        for(let i = 0; i < object_items.length; i++){
            object_items[i].style.display = "block";
        }

    } else {
        walterScott.style.opacity = "0";
        walterTitle.style.opacity = "0";
        michealSlager.style.opacity = "0";
        michaelTitle.style.opacity = "0";
        taser.style.opacity = "0";
        taserTitle.style.opacity = "0";
        fence.style.opacity = "0";
        fenceTitle.style.opacity = "0";
        objectsBar.style.width = "10rem";
        objectsTitle.style.display = "block";

        for(let i = 0; i < object_items.length; i++){
            object_items[i].style.display = "none";
        }
    }
});

const continueButton = document.getElementById("continue_button");

continueButton.addEventListener('click', () => {
    window.location.href = "laatsteUitspraak.html";
});

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_links = document.getElementsByClassName("navigation__items__link");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
const overlay = document.getElementById("js--overlay");
let counter = 0;
let page = 0;

hamburger.addEventListener("click", () => {
    
    counter++;
    if(counter % 2){
        navi_text.style.opacity = 0;
        navigation.style.display = "block";
        overlay.style.zIndex = 1;
        overlay.style.opacity = 0.8;
        setTimeout(() => {
            navigation.style.opacity = 1;
        }, 100);
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        hamburger.style.pointerEvents = "none";
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
            hamburger.style.pointerEvents = "auto";
        }, 1500);
    }
});

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 1500);

    for(const it in visited){
        if (visited[it] == false){
            list_items[page].style.color = "grey";
            list_items[page].style.cursor = "default";
            list_items[page].style.textDecoration = "none";
            list_links[page].removeAttribute("href");
        }
        page++;
    }
}

const modal_button = document.getElementById("js--modalButton");
const modal = document.getElementById("js--modal");
const modalBg = document.getElementById("js--modal-bg");

modal_button.addEventListener("click", () => {
    modalBg.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(function(){
        modal.style.display = "none";
        modalBg.style.display = "none";
    }, 1500);
});

const modal2 = document.getElementById("js--modal2");
const modalBg2 = document.getElementById("js--modal2-bg");
const resetWarning = document.getElementById("js--resetWarning");
const backToStart = document.getElementById("js--backToStart");
const hideModal2 = document.getElementById("js--hideModal2");
let modal2Open = false;

resetWarning.addEventListener("click", function resetWarning(){
    modalBg2.style.display = "block";
    modal2.style.display = "flex";
    modalBg2.style.opacity = ".5";
    modal2.style.opacity = "1";
    modal2Open = true;
})

hideModal2.addEventListener("click", function hideModal2() {
    modalBg2.style.opacity = "0";
    modal2.style.opacity = "0";
    setTimeout(function(){
        modalBg2.style.display = "none";
        modal2.style.display = "none";
    }, 1000);
    modal2Open = false;
})

backToStart.addEventListener("click", function backToStart(){
    document.location.href = "index.html";
})

window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
        modal2.style.display = "none";
    } else if(modal2Open == true) {
        modal2.style.display = "flex";
    }
});