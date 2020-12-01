// Importeer alle functies uit de three.js file.
import * as ThreeD from "./3D_analyse.js";

//Gebruik de three.js functies en voer ze uit.
ThreeD.main();

const toolsBar = document.getElementById("js--tools_bar");
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

const handleTools = () => {
    toolsBar.addEventListener('click', (e) => {
        // doet helaas niets :(
    });
}

const objectsTools = () => {
    objectsBar.addEventListener('click', () => {
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
    });

    objectsBar.addEventListener('dblclick', () => {
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
    });
}

// handleTools();
objectsTools();

const continueButton = document.getElementById("continue_button");

continueButton.addEventListener('click', () => {
    window.location.href = "laatsteUitspraak.html";
});