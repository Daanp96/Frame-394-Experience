import * as ThreeD from "./3D_analyse.js";

ThreeD.main();

const toolsBar = document.getElementById("js--tools_bar");
const objectsBar = document.getElementById("js--objects_bar");
const walterScott = document.getElementById("js--walter");
const walterTitle = document.getElementById("js--walter_title");
const scottSlager = document.getElementById("js--scott");
const scottTitle = document.getElementById("js--scott_title");
const objectsTitle = document.getElementById("js--obj_title");

const handleTools = () => {
    toolsBar.addEventListener('click', (e) => {

    });
}

const objectsTools = () => {
    objectsBar.addEventListener('click', () => {
        walterScott.style.opacity = "1";
        walterTitle.style.opacity = "1";
        scottSlager.style.opacity = "1";
        scottTitle.style.opacity = "1";
        objectsBar.style.width = "15rem";
        objectsTitle.style.opacity = "0";
    });

    objectsBar.addEventListener('dblclick', () => {
        walterScott.style.opacity = "0";
        walterTitle.style.opacity = "0";
        scottSlager.style.opacity = "0";
        scottTitle.style.opacity = "";
        objectsBar.style.width = "80px";
        objectsTitle.style.opacity = "1";
    });
}

handleTools();
objectsTools();