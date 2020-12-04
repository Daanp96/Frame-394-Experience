let i = 0;
let j = 0;
let k = 0;
const txt = "You're going to follow the story of Daniel Voshart, a videographer.";
const txt2 = "You, Daniel, come across the video of the Walter Scott incident."
const txt3 = "And you want to find out what really happened and why."
const outputText = document.getElementById("js--text");
const speed = 50;
const startButton = document.getElementById("js--startButton");
const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_links = document.getElementsByClassName("navigation__items__link");
const list_items = document.getElementsByClassName("navigation__items__link__choice");

function showText(){
    startButton.style.opacity = 0;
    startButton.style.pointerEvents = "none";
    outputText.innerHTML = "";
    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
        outputText.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(function(){
            outputText.innerHTML = "";
            typeSecond();
        }, 2000);
    }
}

function typeSecond() {
    if (j < txt2.length) {
        outputText.innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeSecond, speed);
    } else {
        setTimeout(function(){
            outputText.innerHTML = "";
            typeThird();
        }, 2000);
    }
}

function typeThird() {
    if (k < txt3.length) {
        outputText.innerHTML += txt3.charAt(k);
        k++;
        setTimeout(typeThird, speed);
    } else {
        setTimeout(function(){
            startButton.innerHTML = "Continue";
            startButton.style.opacity = 1;
            startButton.style.pointerEvents = "all";
            startButton.setAttribute("onclick", "start()");
        }, 1000);
    }
}

const overlay = document.getElementById("js--overlay");

function start() {
    overlay.style.zIndex = "1";
    overlay.style.opacity = "1";
    setTimeout(function(){window.location.href = "computerOpstarten.html"}, 3000)
}

// Dit object houd bij op welke pagina's je geweest bent.
// Dit is om te voorkomen dat de gebruiker pagina's gaat skippen via navigatie.

let counter = 0;

function showNavigation() {
    counter++;
    if(counter % 2){
        navi_text.style.opacity = 0;
        navigation.style.display = "block";
        setTimeout(() => {
            navigation.style.opacity = 1;
        }, 100);
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        hamburger.style.pointerEvents = "none";
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
            hamburger.style.pointerEvents = "auto";
        }, 1500);
    }
}

let visited = {
    start: true,
    computer: false,
    video: false,
    first_choice: false,
    stabilizer: false,
    reddit_post: false,
    reddit_comments: false,
    second_choice: false,
    frames: false,
    three_d: false,
    final_choice: false
}

let page = 0;
 
window.onload = function() {
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

// Hiermee wordt het object in localStorage opgeslagen waarmee het object
// over de hele website te bereiken zal zijn.
localStorage.setItem('visited_pages', JSON.stringify(visited));