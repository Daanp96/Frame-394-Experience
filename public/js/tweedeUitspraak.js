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
console.log(visited);

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
}

function nextPage() {
    overlay.style.opacity = "1";
    overlay.style.zIndex = "10";
    setTimeout(function(){window.location.href = "Frames-doorlopen.html";}, 2000);
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
        setTimeout(() => {
            navigation.style.display = "block";
        });
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
        }, 3000);
    }

    for(let i = 0; i < list_items.length; i++){
        if(list_items[i].dataset.visited === "false"){
            list_items[i].style.color = "grey";
        }
    }
}