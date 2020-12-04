const choices = document.getElementById("js--choices");
const checkbox1 = document.getElementById("js--checkbox-1");
const checkbox2 = document.getElementById("js--checkbox-2");
const checkbox3 = document.getElementById("js--checkbox-3");
const choice1 = document.getElementById("js--choice-1")
const choice2 = document.getElementById("js--choice-2")
const choice3 = document.getElementById("js--choice-3")
const continueButton = document.getElementById("js--continueButton");
const modalBg = document.getElementById("js--modal-bg");
const modal = document.getElementById("js--modal");
const newspaper = document.getElementById("js--newspaper");
const newspaperWrapper = document.getElementById("js--newspaper-bg");
const newspaperTitle = document.getElementById("js--newspaper-title");
const newspaperArticle = document.getElementById("js--newspaper-article");
let choice;

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.final_choice = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));

choice1.addEventListener('click', function(){
    checkbox1.checked = true;
    checkbox2.checked = false;
    checkbox3.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
    choice = 1;
});

choice2.addEventListener('click', function(){
    checkbox2.checked = true;
    checkbox1.checked = false;
    checkbox3.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
    choice = 2;
});

choice3.addEventListener('click', function(){
    checkbox3.checked = true;
    checkbox1.checked = false;
    checkbox2.checked = false;
    continueButton.style.opacity = "1";
    continueButton.style.pointerEvents = "all";
    choice = 3;
});

function hideModal() {
    modalBg.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(function(){
        modalBg.style.display = "none";
        modal.style.display = "none";
    }, 1500);
}

const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 1500);

    for(const it in visited){
        if (visited[it] == false){
            list_items[page].style.color = "grey";
            list_items[page].style.cursor = "default";
            list_links[page].removeAttribute("href");
        }
        page++;
    }
}

function result() {
    if (choice == 2) {
        newspaperTitle.innerHTML = "Michael Slager walks away a free man";
        newspaperArticle.innerHTML = "Today, December 7, new information has been revealed from the incident with Walter Scott. U.S. District Judge David C. Norton hasn't sentenced officer Michael Slager to 20 years in prison. Although defense attorneys had argued for manslaughter, the judge agreed with prosecutors that the 'appropriate underlying offense' was voluntary manslaughter. An appeal for increase of sentence has been denied, meaning Slager walks away a free man.";
    }
    else if (choice == 3) {
        newspaperTitle.innerHTML = "Michael Slager sentenced to 20 years";
        newspaperArticle.innerHTML = 'Today, December 7, new information has been revealed about the incident with Walter Scott. U.S. District Judge David C. Norton sentenced officer Michael Slager to 20 years in prison for second-degree murder. Although defendse attorneys had argued for voluntary manslaughter, the judge agreed with prosecutors that the "appropriate underlying offense" was second-degree murder. An appeal for reduction of sentence has been denied.';
    }
    choices.style.pointerEvents = "none";
    continueButton.style.display = "none";
    newspaperWrapper.style.display = "flex";
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
        navigation.style.display = "block";
        navi_text.style.opacity = 0;
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
        }, 1000);
    }
}

const modal2 = document.getElementById("js--modal2");
const modalBg2 = document.getElementById("js--modal2-bg");
let modal2Open = false;

function resetWarning(){
    modalBg2.style.display = "block";
    modal2.style.display = "flex";
    modalBg2.style.opacity = ".5";
    modal2.style.opacity = "1";
    modal2Open = true;
}

function hideModal2() {
    modalBg2.style.opacity = "0";
    modal2.style.opacity = "0";
    setTimeout(function(){
        modalBg2.style.display = "none";
        modal2.style.display = "none";
    }, 1000);
    modal2Open = false;
}

function backToStart(){
    document.location.href = "index.html";
}

window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
        modal2.style.display = "none";
    } else if(modal2Open == true) {
        modal2.style.display = "flex";
    }
});