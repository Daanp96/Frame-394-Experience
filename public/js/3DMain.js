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

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.three_d = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));
console.log(visited);

toolsBar.addEventListener('click', () => {
    toolsBar.style.width = "15rem";
    toolTitle.style.opacity = "0";
});

let counted = 0;

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
        objectsBar.style.width = "15rem";
        objectsTitle.style.display = "none";
        fence.style.opacity = "1";
        fenceTitle.style.opacity = "1";
    } else {
        walterScott.style.opacity = "0";
        walterTitle.style.opacity = "0";
        michealSlager.style.opacity = "0";
        michaelTitle.style.opacity = "0";
        taser.style.opacity = "0";
        taserTitle.style.opacity = "0";
        fence.style.opacity = "0";
        fenceTitle.style.opacity = "0";
        objectsBar.style.width = "100px";
        objectsTitle.style.display = "block";
    }
});

const continueButton = document.getElementById("continue_button");

continueButton.addEventListener('click', () => {
    window.location.href = "laatsteUitspraak.html";
});

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
const overlay = document.getElementById("js--overlay");
let counter = 0;

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
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
        }, 1500);
    }

    for(let i = 0; i < list_items.length; i++){
        if(list_items[i].dataset.visited === "false"){
            list_items[i].style.color = "grey";
            list_items[i].style.cursor = "default";
        }
    }
});

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
